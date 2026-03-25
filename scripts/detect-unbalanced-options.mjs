// 正答と誤答の文字数が極端に異なるクイズ問題を検出するスクリプト
import fs from 'fs';
import path from 'path';

function findIndexFiles(dir) {
  const results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...findIndexFiles(fullPath));
    } else if (entry.name === 'index.ts' || entry.name.endsWith('.ts')) {
      results.push(fullPath);
    }
  }
  return results;
}

const subjects = ['history', 'science', 'geography'];
const issues = [];

for (const subject of subjects) {
  const baseDirs = [
    `src/data/subjects/${subject}/eras`,
    `src/data/subjects/${subject}/units`,
  ];

  for (const baseDir of baseDirs) {
    if (!fs.existsSync(baseDir)) continue;
    const files = findIndexFiles(baseDir).filter(f => f.endsWith('index.ts') || f.includes('/units/'));

    for (const file of files) {
      const content = fs.readFileSync(file, 'utf-8');
      // Find all quiz questions with options arrays
      const quizRegex = /id:\s*'(q\d+)'[\s\S]*?question:\s*'([^']*)'[\s\S]*?options:\s*\[([\s\S]*?)\][\s\S]*?correctIndex:\s*(\d+)/g;
      let match;
      while ((match = quizRegex.exec(content)) !== null) {
        const qId = match[1];
        const question = match[2];
        const optionsBlock = match[3];
        const correctIndex = parseInt(match[4]);

        // Parse options - handle both single and multi-line strings
        const optionMatches = [...optionsBlock.matchAll(/'([^']*)'/g)];
        if (optionMatches.length < 4) continue;

        const options = optionMatches.map(m => m[1]);
        const correctOption = options[correctIndex];
        if (!correctOption) continue;

        const correctLen = correctOption.length;
        const wrongOptions = options.filter((_, i) => i !== correctIndex);
        const avgWrongLen = wrongOptions.reduce((sum, o) => sum + o.length, 0) / wrongOptions.length;

        const ratio = correctLen / avgWrongLen;

        // Flag if correct answer is 1.8x longer or 0.55x shorter than average wrong
        if (ratio > 1.8 || ratio < 0.55) {
          issues.push({
            file: file.replace(/^\/workspaces\/marutto-study\//, ''),
            subject,
            qId,
            question: question.substring(0, 60),
            correctLen,
            avgWrongLen: Math.round(avgWrongLen),
            ratio: ratio.toFixed(2),
            options: options.map((o, i) => `${i === correctIndex ? '✓' : ' '} [${o.length}] ${o}`),
          });
        }
      }
    }
  }
}

// Group by file
const byFile = {};
for (const issue of issues) {
  if (!byFile[issue.file]) byFile[issue.file] = [];
  byFile[issue.file].push(issue);
}

console.log(`\n=== 検出結果: ${issues.length} 件の問題 (${Object.keys(byFile).length} ファイル) ===\n`);

for (const [file, fileIssues] of Object.entries(byFile)) {
  console.log(`\n📁 ${file}`);
  for (const issue of fileIssues) {
    console.log(`  ${issue.qId} (ratio: ${issue.ratio}) - ${issue.question}`);
    for (const opt of issue.options) {
      console.log(`    ${opt}`);
    }
  }
}

// Summary by subject
console.log('\n=== 教科別サマリー ===');
for (const subject of subjects) {
  const count = issues.filter(i => i.subject === subject).length;
  console.log(`${subject}: ${count} 件`);
}

// Output file list for easy processing
console.log('\n=== ファイルリスト ===');
for (const file of Object.keys(byFile)) {
  console.log(file);
}
