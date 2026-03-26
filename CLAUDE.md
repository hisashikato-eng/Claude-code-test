# CLAUDE.md

This file provides guidance for AI assistants (and developers) working in this repository.

## Repository Overview

- **Repository**: Claude-code-test
- **Owner**: hisashikato-eng
- **Project**: WAIJ AIスクール 研修動画シリーズ（Remotion）

## Project Structure

```
Claude-code-test/
├── CLAUDE.md
├── package.json
├── tsconfig.json
├── remotion.config.ts
├── docs/
│   └── PRODUCTION_FLOW.md    # 制作標準フロー
├── src/
│   ├── index.ts              # registerRoot エントリーポイント
│   ├── Root.tsx              # 全講座の Composition 登録
│   ├── shared/
│   │   ├── components/       # Background, font, colors（全講座共通）
│   │   └── scenes/           # TitleScene, GoalScene, TOCScene, AssignmentScene, OutroScene
│   ├── mindset/              # 社会人マインドセット講座群
│   ├── ai-skills/            # 生成AIスキルセット講座群
│   └── ai-literacy/          # 生成AIリテラシー講座群
└── public/
    ├── bgm.mp3               # BGM共通
    ├── mindset/              # ナレーション音声
    ├── ai-skills/
    └── ai-literacy/
```

## Development Workflow

### Git Conventions

- **Default branch**: master
- **Branch naming**: Feature branches should use descriptive names
- **Commit messages**: Use clear, imperative-mood messages
- Keep commits focused — one logical change per commit

### Getting Started

```bash
git clone <repository-url>
cd Claude-code-test
npm install
npm run studio    # Remotion Studio 起動
```

## Build & Test Commands

- **Install dependencies**: `npm install`
- **Studio（プレビュー）**: `npm run studio`
- **レンダリング**: `npm run render -- <CompositionId> out/video.mp4 --concurrency=1 --timeout=120000`
- **型チェック**: `npm run build`

## Code Style & Conventions

- TypeScript + React (JSX)
- フォント: Noto Sans JP (400/500/700)
- デザインカラーは `src/shared/components/colors.ts` で一元管理
- 共通シーンは props で講座情報を受け取る汎用コンポーネント

## Key Patterns & Architecture

- **Remotion TransitionSeries** を使い、シーン遷移を管理
- **共通シーン構成**: TitleScene → GoalScene → TOCScene → Chapter1〜N → AssignmentScene → OutroScene
- **音声ファイル命名**: `public/{テーマ略称}/{講座番号}_narration.wav`
- **制作フロー詳細**: `docs/PRODUCTION_FLOW.md` を参照

## AI Assistant Guidelines

When working in this repository:

1. **Read before writing** — Always read existing files before modifying them.
2. **Stay focused** — Only make changes that are directly requested. Avoid unnecessary refactoring.
3. **Run checks** — After making changes, run `npm run build` for type checking.
4. **Update this file** — When adding significant tooling, dependencies, or architectural patterns, update CLAUDE.md to reflect the current state.
5. **Security** — Never commit secrets, credentials, or .env files. Check for sensitive data before staging.
6. **Minimal changes** — Prefer small, targeted edits over large rewrites.
7. **レンダリング** — 必ず `--concurrency=1 --timeout=120000` を指定する。

## Dependencies

- **remotion** v4.0.x — 動画生成フレームワーク
- **react** 18.x — UI ライブラリ
- **typescript** 5.x — 型チェック

## Environment & Configuration

- Node.js 18+ 推奨
- 画面サイズ: 1920×1080 / 30fps
