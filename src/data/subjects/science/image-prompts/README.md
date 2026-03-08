# 理科 画像生成プロンプト一覧

SVGでは表現できない写実的な画像（実験写真、顕微鏡像、自然現象の写真など）を
外部画像生成ツール（DALL-E, Midjourney等）で生成するためのプロンプト集。

## ファイル構成

### 中学1年（Grade 1）
- [生物分野](./grade1-biology.md) - 植物・動物の観察と分類
- [化学分野](./grade1-chemistry.md) - 物質の性質と状態変化
- [物理分野](./grade1-physics.md) - 光・音・力
- [地学分野](./grade1-earth.md) - 火山・地震・地層

### 中学2年（Grade 2）
- [化学分野](./grade2-chemistry.md) - 化学変化と原子・分子
- [生物分野](./grade2-biology.md) - 生物のからだのつくり
- [天気分野](./grade2-weather.md) - 気象
- [電気分野](./grade2-electricity.md) - 電流と磁界

### 中学3年（Grade 3）
- [化学分野](./grade3-chemistry.md) - イオンと化学変化
- [生物分野](./grade3-biology.md) - 生殖・遺伝・進化
- [物理分野](./grade3-physics.md) - 運動とエネルギー
- [地学分野](./grade3-earth.md) - 天体

## 共通スタイルガイド

全プロンプトに以下を適用:

- **背景**: 白背景（white background）
- **スタイル**: 教科書風の写実的なイラスト（realistic textbook-style illustration）
- **テキスト**: 日本語ラベル・文字なし（アプリ側で追加するため）
- **構図**: 正面または斜め45度からの見やすい角度
- **色調**: 明るく鮮明、コントラスト高め
- **解像度**: 1024x1024px 推奨

## 保存先

```
public/images/science/{grade}/{unit}/[ファイル名].png
```

例: `public/images/science/grade1/biology/pine-cone-structure.png`
