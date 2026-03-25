// クイズ選択肢から不要な括弧補足を削除するスクリプト
// 残すべきケース: 読み仮名（ひらがな/カタカナのみ）、固有名詞の別名
import fs from 'fs';
import path from 'path';

function findFiles(dir) {
  const results = [];
  try {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) results.push(...findFiles(fullPath));
      else if (entry.name === 'index.ts') results.push(fullPath);
    }
  } catch(e) {}
  return results;
}

// 括弧内がひらがな・カタカナのみ（読み仮名）→ 残す
// ただし、長すぎるカタカナ（5文字超）は固有名詞の補足説明の可能性が高い → 削除
function isReadingOnly(parenContent) {
  if (!/^[ぁ-んァ-ヶー・]+$/.test(parenContent)) return false;
  // ひらがなを含む → 読み仮名として残す
  if (/[ぁ-ん]/.test(parenContent)) return true;
  // カタカナのみで5文字以下 → 読み仮名として残す
  if (parenContent.replace(/[ー・]/g, '').length <= 5) return true;
  // カタカナのみで6文字以上 → 固有名詞の補足（例: ネイティブアメリカン）→ 削除
  return false;
}

// 残すべき括弧補足のパターン
function shouldKeep(fullOption, parenContent) {
  // 読み仮名のみ → 残す (例: 匈奴（きょうど）、濠（ほり）)
  // ただし括弧前がカタカナのみの場合は説明補足（例: アジア（インド））
  const beforeParen = fullOption.split('（')[0];
  if (isReadingOnly(parenContent) && !/^[ァ-ヶー]+$/.test(beforeParen)) return true;

  // 略語と正式名称のペア → 残す
  // パターン: 正式名称（略語） or 略語（正式名称）
  const abbreviationPairs = [
    'メシア',           // 救世主（メシア）
    'ホモ・サピエンス',
    'コーラン',
    'バイブル',
    'マニュファクチュア',
    'サミット',         // 主要国首脳会議（サミット）
  ];
  if (abbreviationPairs.some(p => parenContent.includes(p))) return true;

  // アルファベット略語 ↔ 正式名称のペア → 残す
  // 例: NATO（北大西洋条約機構）、SDGs（持続可能な開発目標）、PKO協力法
  const optionBeforeParen = fullOption.split('（')[0];
  // 括弧前がアルファベット略語 (NATO, SDGs等) or 括弧内がアルファベット略語 (ODA, EU等)
  if (/^[A-Za-z]{2,}s?$/.test(optionBeforeParen.trim()) || /^[A-Za-z]{2,}[^\s]*$/.test(parenContent.trim())) return true;
  // PKO協力法のように略語を含む括弧内
  if (/[A-Z]{2,}/.test(parenContent) && parenContent.length < 10) return true;

  // 教科書的に両方の名称が重要なもの → 残す
  const keepExact = [
    '日明貿易（勘合貿易）',
    '亜寒帯（冷帯）',
    'シェンチェン（深圳）',
    '季節風（モンスーン）',
  ];
  if (keepExact.some(k => fullOption.startsWith(k))) return true;

  // それ以外の説明的な括弧 → 削除
  return false;
}

const dryRun = process.argv.includes('--dry-run');
const baseDirs = [
  'src/data/subjects/history/eras',
  'src/data/subjects/history/units',
  'src/data/subjects/geography/units',
];

let totalChanges = 0;
let totalKept = 0;

for (const baseDir of baseDirs) {
  const files = findFiles(baseDir);
  for (const file of files) {
    let content = fs.readFileSync(file, 'utf-8');
    let modified = false;

    // options配列内の文字列にある括弧補足を処理
    const newContent = content.replace(
      /options:\s*\[([^\]]+)\]/g,
      (fullMatch, optionsBlock) => {
        let newBlock = optionsBlock;
        // 各オプション文字列内の括弧を処理
        newBlock = newBlock.replace(/'([^']*（[^）]*）[^']*)'/g, (optMatch, optText) => {
          // 複数の括弧がある可能性
          let result = optText;
          const parenRegex = /（([^）]+)）/g;
          let parenMatch;
          const replacements = [];

          while ((parenMatch = parenRegex.exec(optText)) !== null) {
            const parenContent = parenMatch[1];
            if (shouldKeep(optText, parenContent)) {
              totalKept++;
              if (dryRun) console.log(`  KEEP: '${optText}' → 括弧「${parenContent}」`);
            } else {
              replacements.push(parenMatch[0]); // 全体（括弧含む）
              totalChanges++;
              if (dryRun) console.log(`  REMOVE: '${optText}' → 括弧「${parenContent}」を削除`);
            }
          }

          for (const rep of replacements) {
            result = result.replace(rep, '');
          }

          if (result !== optText) {
            modified = true;
            return `'${result}'`;
          }
          return optMatch;
        });

        return fullMatch.replace(optionsBlock, newBlock);
      }
    );

    if (modified && !dryRun) {
      fs.writeFileSync(file, newContent);
      console.log(`Updated: ${file.replace('/workspaces/marutto-study/', '')}`);
    }
  }
}

console.log(`\nTotal changes: ${totalChanges}`);
console.log(`Total kept: ${totalKept}`);
if (dryRun) console.log('\n(dry-run mode - no files modified)');
