# WAIJ AIスクール 研修動画シリーズ 制作標準フロー

## シリーズ概要
- **クライアント**：WAIJ AIスクール（ワイジェー AIスクール）
- **形式**：Remotion（React）による動画生成 → MP4書き出し
- **画面サイズ**：1920×1080 / 30fps
- **デザイン**：パステルラベンダーピンク×水色（同梱のcomponents/を流用）

---

## 制作ステップ

### Step 1｜講座情報を共有
担当者が以下をClaudeに共有する：
- **大テーマ**（社会人マインドセット／生成AIスキルセット／生成AIリテラシー）
- **講座番号**（例：L03）
- **タイトル**
- **講座のゴール**
- **目次（または概要）**
- **課題**

### Step 2｜ナレーション原稿の作成（Claude）
- タイトル・ゴールをもとにClaudeが原稿を生成
- TTSにそのまま貼り付けられる形式（スペース・記号なし）で出力

### Step 3｜音声データの作成（担当者）
- TTSツール等でnarration.wavを生成
- `public/{テーマ}/{講座番号}_narration.wav` に配置

### Step 4｜Remotionコードの作成（Claude）
- 章構成・スライドを以下の構成パターンで生成
  ```
  TitleScene → GoalScene → TOCScene
  → Chapter1〜N（各章を複数スライドに分割）
  → AssignmentScene → Outro
  ```

### Step 5｜音声同期（担当者＋Claude）
- 担当者がGeminiで音声の文字起こし＋タイムスタンプを生成し、Claudeに送付
- ClaudeがTransitionSeriesの各シーン尺を再計算・更新
- 目安：2〜3回に分けてChapter単位で調整

### Step 6｜MP4レンダリング
```bash
npx remotion render src/index.ts <CompositionId> out/video.mp4 \
  --concurrency=1 --timeout=120000
```

---

## フォルダ構成

```
src/
  shared/
    components/        ← Background.tsx, font.ts, colors.ts（全講座共通）
    scenes/            ← TitleScene, GoalScene, TOCScene, AssignmentScene, OutroScene（全講座共通）
  mindset/             ← 社会人マインドセット
    L01_ProMindset/
      index.tsx
      chapters/
    L02_.../
  ai-skills/           ← 生成AIスキルセット
    L01_.../
  ai-literacy/         ← 生成AIリテラシー
    L01_.../
public/
  bgm.mp3              ← BGM共通
  mindset/
    L01_narration.wav
  ai-skills/
    L01_narration.wav
  ai-literacy/
    L01_narration.wav
Root.tsx               ← 全講座のCompositionを登録
```

### 音声ファイルの命名規則
`{テーマ略称}/{講座番号}_narration.wav`

### index.tsx内での参照
```ts
<Audio src={staticFile("mindset/L01_narration.wav")} volume={1.0} />
```

---

## デザイン仕様（共通）

| 項目 | 値 |
|---|---|
| フォント | Noto Sans JP（400/500/700） |
| 背景 | linear-gradient(135deg, #f8f4ff, #f0f7ff, #fff0f5) |
| アクセント① | #d4849a（dustyRose / ピンク） |
| アクセント② | #7aaa8a（sage / グリーン） |
| アクセント③ | #7b9fd4（accent / 水色） |
| サブカラー | #a68bc4（lavender / パープル） |
| 本文 | #3d3d3d（charcoal） |

---

## 注意事項
- BGMは `<Audio loop />` でループ再生
- レンダリングは `--concurrency=1 --timeout=120000` を必ず指定（フォント読み込みのタイムアウト対策）
- 音声同期はChapter単位で順番に調整すると効率的
