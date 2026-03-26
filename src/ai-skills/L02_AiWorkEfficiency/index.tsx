import React from "react";
import { Series } from "remotion";
import { TitleScene } from "../../shared/scenes/TitleScene";
import { GoalScene } from "../../shared/scenes/GoalScene";
import { TOCScene } from "../../shared/scenes/TOCScene";
import { AssignmentScene } from "../../shared/scenes/AssignmentScene";
import { OutroScene } from "../../shared/scenes/OutroScene";
import { ChapterTitle } from "../../shared/scenes/ChapterTitle";
import { BulletSlide } from "../../shared/scenes/BulletSlide";
import { HighlightSlide } from "../../shared/scenes/HighlightSlide";
import { colors } from "../../shared/components/colors";
import { loadFonts } from "../../shared/components/font";

loadFonts();

const COURSE_ID = "L02";
const TITLE = "AIで業務を効率化する方法\n─ 今日から使える実践ガイド";
const THEME = "生成AIスキルセット";

const GOALS = [
  "AI活用に適した業務を見極める力を養う",
  "具体的な業務効率化パターンを5つ以上習得する",
  "AI導入のステップと注意点を理解する",
];

const CHAPTERS = [
  "AI活用に向く業務・向かない業務",
  "5大効率化パターン",
  "導入のステップ",
  "失敗しないための注意点",
];

const ASSIGNMENTS = [
  "自分の1週間の業務を書き出しAIで効率化できそうなものに印をつけてください",
  "印をつけた業務の中から1つ選び実際にAIを使って効率化を試みてください",
];

const D = {
  title: 150,
  goal: 180,
  toc: 150,
  ch1_title: 90,
  ch1_slide1: 270,
  ch1_slide2: 270,
  ch2_title: 90,
  ch2_slide1: 300,
  ch2_slide2: 270,
  ch3_title: 90,
  ch3_slide1: 270,
  ch3_slide2: 210,
  ch4_title: 90,
  ch4_slide1: 270,
  ch4_slide2: 210,
  assignment: 180,
  outro: 150,
};

export const AI_SKILLS_L02_DURATION = Object.values(D).reduce(
  (a, b) => a + b,
  0,
);

export const AiSkillsL02: React.FC = () => {
  return (
    <Series>
      <Series.Sequence durationInFrames={D.title}>
        <TitleScene courseId={COURSE_ID} title={TITLE} theme={THEME} />
      </Series.Sequence>

      <Series.Sequence durationInFrames={D.goal}>
        <GoalScene goals={GOALS} />
      </Series.Sequence>

      <Series.Sequence durationInFrames={D.toc}>
        <TOCScene chapters={CHAPTERS} />
      </Series.Sequence>

      {/* ── Chapter 1: AI活用に向く業務・向かない業務 ── */}
      <Series.Sequence durationInFrames={D.ch1_title}>
        <ChapterTitle
          chapterNumber={1}
          chapterTitle="AI活用に向く業務・向かない業務"
        />
      </Series.Sequence>

      <Series.Sequence durationInFrames={D.ch1_slide1}>
        <BulletSlide
          heading="AIが得意な業務パターン"
          bullets={[
            "繰り返しが多い ─ 定型メール・報告書の作成",
            "大量データの処理 ─ 情報整理・分類・要約",
            "下書き生成 ─ 企画書・議事録・SNS投稿",
          ]}
        />
      </Series.Sequence>

      <Series.Sequence durationInFrames={D.ch1_slide2}>
        <BulletSlide
          heading="AI単独では難しい業務"
          bullets={[
            "人間関係の構築 ─ 信頼・共感が必要な場面",
            "最終意思決定 ─ 責任を伴う判断",
            "独自のクリエイティブ ─ ブランドの世界観や独自性",
          ]}
        />
      </Series.Sequence>

      {/* ── Chapter 2: 5大効率化パターン ── */}
      <Series.Sequence durationInFrames={D.ch2_title}>
        <ChapterTitle chapterNumber={2} chapterTitle="5大効率化パターン" />
      </Series.Sequence>

      <Series.Sequence durationInFrames={D.ch2_slide1}>
        <BulletSlide
          heading="すぐに使える5つのパターン"
          bullets={[
            "① メール・チャットの下書き生成",
            "② 議事録・会議メモの自動要約",
            "③ リサーチ・情報収集の高速化",
            "④ データ分析・レポート作成補助",
            "⑤ アイデア出し・ブレインストーミング",
          ]}
          accentColor={colors.sage}
        />
      </Series.Sequence>

      <Series.Sequence durationInFrames={D.ch2_slide2}>
        <HighlightSlide
          text="1つの業務で30分短縮\n×週5日で\n年間130時間の削減"
          color={colors.sage}
        />
      </Series.Sequence>

      {/* ── Chapter 3: 導入のステップ ── */}
      <Series.Sequence durationInFrames={D.ch3_title}>
        <ChapterTitle chapterNumber={3} chapterTitle="導入のステップ" />
      </Series.Sequence>

      <Series.Sequence durationInFrames={D.ch3_slide1}>
        <BulletSlide
          heading="AI導入の4ステップ"
          bullets={[
            "Step 1 ─ 業務の棚卸し（何に時間を使っているか可視化）",
            "Step 2 ─ 小さく試す（1つの業務で1週間お試し）",
            "Step 3 ─ 効果を測る（時間短縮・品質向上を数値化）",
            "Step 4 ─ 横展開する（成功パターンをチームに共有）",
          ]}
          accentColor={colors.lavender}
        />
      </Series.Sequence>

      <Series.Sequence durationInFrames={D.ch3_slide2}>
        <HighlightSlide
          text="いきなり大改革ではなく\n「小さく始めて\n素早く検証」する"
          color={colors.lavender}
        />
      </Series.Sequence>

      {/* ── Chapter 4: 失敗しないための注意点 ── */}
      <Series.Sequence durationInFrames={D.ch4_title}>
        <ChapterTitle
          chapterNumber={4}
          chapterTitle="失敗しないための注意点"
        />
      </Series.Sequence>

      <Series.Sequence durationInFrames={D.ch4_slide1}>
        <BulletSlide
          heading="よくある失敗と対策"
          bullets={[
            "機密情報の入力 → 社内ルールを確認してから使う",
            "出力の丸写し → 必ず人間がレビュー・編集する",
            "ツール乱立 → まず1つのツールを使い倒す",
          ]}
          accentColor={colors.dustyRose}
        />
      </Series.Sequence>

      <Series.Sequence durationInFrames={D.ch4_slide2}>
        <HighlightSlide
          text="AIは「魔法」ではなく\n「優秀なアシスタント」\n使い方次第で成果が変わる"
          color={colors.dustyRose}
        />
      </Series.Sequence>

      <Series.Sequence durationInFrames={D.assignment}>
        <AssignmentScene assignments={ASSIGNMENTS} />
      </Series.Sequence>

      <Series.Sequence durationInFrames={D.outro}>
        <OutroScene courseId={COURSE_ID} title={TITLE} />
      </Series.Sequence>
    </Series>
  );
};
