// 検出結果をJSON形式で出力
import fs from 'fs';

const output = fs.readFileSync('/home/vscode/.claude/projects/-workspaces-marutto-study/dab405a1-930d-408d-93a9-bda45799b46b/tool-results/bzukl9pdk.txt', 'utf-8');
const lines = output.split('\n');

const issues = {};
let currentFile = null;
let currentQ = null;

for (const line of lines) {
  const fileMatch = line.match(/^📁 (.+)$/);
  if (fileMatch) {
    currentFile = fileMatch[1];
    if (!issues[currentFile]) issues[currentFile] = [];
    continue;
  }

  const qMatch = line.match(/^\s+(q\d+)\s+\(ratio:\s+([\d.]+)\)\s+-\s+(.+)$/);
  if (qMatch && currentFile) {
    currentQ = { id: qMatch[1], ratio: qMatch[2], question: qMatch[3], options: [] };
    issues[currentFile].push(currentQ);
    continue;
  }

  const optMatch = line.match(/^\s+(✓| )\s+\[(\d+)\]\s+(.+)$/);
  if (optMatch && currentQ) {
    currentQ.options.push({
      isCorrect: optMatch[1] === '✓',
      length: parseInt(optMatch[2]),
      text: optMatch[3],
    });
  }
}

// Write per-file issue details
fs.writeFileSync('scripts/issues.json', JSON.stringify(issues, null, 2));
console.log(`Files with issues: ${Object.keys(issues).length}`);
console.log(`Total issues: ${Object.values(issues).reduce((s, a) => s + a.length, 0)}`);
