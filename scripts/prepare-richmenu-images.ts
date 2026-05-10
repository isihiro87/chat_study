/**
 * data/line-richmenu/raw/ の素材画像を、LINE リッチメニュー要件
 * （2500×1686・1MB 以下）に整形して data/line-richmenu/ に出力する。
 *
 * 使い方:
 *   npx tsx scripts/prepare-richmenu-images.ts
 *
 * 動作:
 *   1. raw/free-source.* を 2500×1686 にリサイズ → PNGパレット圧縮を試行
 *   2. PNG が 1MB を超える場合は JPEG（quality を段階的に下げる）にフォールバック
 *   3. 同様に raw/premium-source.* も処理
 *   4. 出力ファイル: data/line-richmenu/free.png または free.jpg（同様に premium）
 */
import sharp from "sharp";
import { existsSync, readdirSync, statSync, unlinkSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const ROOT = resolve(import.meta.dirname, "..");
const RAW_DIR = resolve(ROOT, "data/line-richmenu/raw");
const OUT_DIR = resolve(ROOT, "data/line-richmenu");
const TARGET_WIDTH = 2500;
const TARGET_HEIGHT = 1686;
const MAX_BYTES = 1024 * 1024; // 1 MB

const TARGETS = ["free", "premium"] as const;
type Target = (typeof TARGETS)[number];

async function main(): Promise<void> {
  for (const target of TARGETS) {
    await prepareOne(target);
  }
}

async function prepareOne(target: Target): Promise<void> {
  const sourcePath = findSource(target);
  console.log(`\n[${target}] source: ${sourcePath}`);

  // 既存出力（前回の試行）を一旦削除して、紛らわしい状態を残さない
  for (const ext of ["png", "jpg"] as const) {
    const p = resolve(OUT_DIR, `${target}.${ext}`);
    if (existsSync(p)) unlinkSync(p);
  }

  const resized = sharp(sourcePath).resize(TARGET_WIDTH, TARGET_HEIGHT, {
    fit: "fill", // アスペクト比のわずかな違いはストレッチで吸収
    kernel: "lanczos3",
  });

  // ① PNG パレット（256色）で圧縮を試す
  const pngBuffer = await resized
    .clone()
    .png({ palette: true, compressionLevel: 9, effort: 10 })
    .toBuffer();

  if (pngBuffer.length <= MAX_BYTES) {
    const outPath = resolve(OUT_DIR, `${target}.png`);
    writeFileSync(outPath, pngBuffer);
    console.log(
      `  ✓ PNG palette: ${(pngBuffer.length / 1024).toFixed(1)} KB → ${outPath}`
    );
    return;
  }

  console.log(
    `  - PNG palette が ${(pngBuffer.length / 1024).toFixed(1)} KB（>1MB）。JPEG にフォールバックします。`
  );

  // ② JPEG quality を段階的に下げる
  for (const quality of [90, 85, 80, 75, 70]) {
    const jpegBuffer = await resized
      .clone()
      .jpeg({ quality, mozjpeg: true })
      .toBuffer();
    if (jpegBuffer.length <= MAX_BYTES) {
      const outPath = resolve(OUT_DIR, `${target}.jpg`);
      writeFileSync(outPath, jpegBuffer);
      console.log(
        `  ✓ JPEG q=${quality}: ${(jpegBuffer.length / 1024).toFixed(1)} KB → ${outPath}`
      );
      return;
    }
    console.log(
      `  - JPEG q=${quality}: ${(jpegBuffer.length / 1024).toFixed(1)} KB（>1MB）`
    );
  }

  throw new Error(
    `[${target}] 1MB 以下に収められませんでした。素材を見直してください。`
  );
}

function findSource(target: Target): string {
  if (!existsSync(RAW_DIR) || !statSync(RAW_DIR).isDirectory()) {
    throw new Error(`raw ディレクトリが見つかりません: ${RAW_DIR}`);
  }
  const candidates = readdirSync(RAW_DIR).filter((name) => {
    const lower = name.toLowerCase();
    return (
      lower.startsWith(`${target}-source.`) &&
      (lower.endsWith(".png") || lower.endsWith(".jpg") || lower.endsWith(".jpeg"))
    );
  });
  if (candidates.length === 0) {
    throw new Error(
      `${target}-source.{png,jpg,jpeg} が ${RAW_DIR} に見つかりません。素材を配置してください。`
    );
  }
  if (candidates.length > 1) {
    console.warn(
      `  ⚠ ${target}-source.* が複数あります (${candidates.join(", ")})。最初の1件 ${candidates[0]} を使用します。`
    );
  }
  return resolve(RAW_DIR, candidates[0]);
}

main().catch((err) => {
  console.error(err instanceof Error ? err.message : err);
  process.exit(1);
});
