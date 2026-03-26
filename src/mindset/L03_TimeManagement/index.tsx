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

const COURSE_ID = "L03";
const TITLE = "タイムマネジメント入門\n─ 限られた時間で最大の成果を出す";
const THEME = "社会人マインドセット";

const GOALS = [
  "時間の使い方を客観的に把握する方法を学ぶ",
  "優先順位の付け方を身につける",
  "集中力を維持する仕組みを作れるようになる",
];

const CHAPTERS = [
  "なぜ時間が足りないのか",
  "優先順位マトリクス",
  "集中力を守る技術",
  "1日の設計図を作る",
];

const ASSIGNMENTS = [
  "1週間の業務時間を15分単位で記録し自分の時間の使い方を可視化してください",
  "緊急でないが重要なタスクを3つ特定し今週中に1つ着手してください",
];

const D = {
  title: 150,
  goal: 180,
  toc: 150,
  ch1_title: 90,
  ch1_slide1: 240,
  ch1_slide2: 210,
  ch2_title: 90,
  ch2_slide1: 270,
  ch2_slide2: 240,
  ch3_title: 90,
  ch3_slide1: 270,
  ch3_slide2: 210,
  ch4_title: 90,
  ch4_slide1: 270,
  ch4_slide2: 210,
  assignment: 180,
  outro: 150,
};

export const MINDSET_L03_DURATION = Object.values(D).reduce(
  (a, b) => a + b,
  0,
);

export const MindsetL03: React.FC = () => {
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

      {/* ── Chapter 1: なぜ時間が足りないのか ── */}
      <Series.Sequence durationInFrames={D.ch1_title}>
        <ChapterTitle chapterNumber={1} chapterTitle="なぜ時間が足りないのか" />
      </Series.Sequence>

      <Series.Sequence durationInFrames={D.ch1_slide1}>
        <BulletSlide
          heading="時間が消える3大原因"
          bullets={[
            "割り込み ─ チャット・メール・電話で集中が途切れる",
            "優先順位の不在 ─ 目の前のタスクから手をつけてしまう",
            "完璧主義 ─ 80点で十分な仕事に100点を求める",
          ]}
        />
      </Series.Sequence>

      <Series.Sequence durationInFrames={D.ch1_slide2}>
        <HighlightSlide
          text="忙しいのは\n「時間がない」のではなく\n「選んでいない」から"
          color={colors.dustyRose}
        />
      </Series.Sequence>

      {/* ── Chapter 2: 優先順位マトリクス ── */}
      <Series.Sequence durationInFrames={D.ch2_title}>
        <ChapterTitle chapterNumber={2} chapterTitle="優先順位マトリクス" />
      </Series.Sequence>

      <Series.Sequence durationInFrames={D.ch2_slide1}>
        <BulletSlide
          heading="アイゼンハワーマトリクス"
          bullets={[
            "第1象限 ─ 緊急×重要 → すぐやる",
            "第2象限 ─ 緊急でない×重要 → 計画してやる（最重要）",
            "第3象限 ─ 緊急×重要でない → 委任する",
            "第4象限 ─ 緊急でない×重要でない → やめる",
          ]}
          accentColor={colors.sage}
        />
      </Series.Sequence>

      <Series.Sequence durationInFrames={D.ch2_slide2}>
        <HighlightSlide
          text="成果を出す人は\n「第2象限」に\n最も多くの時間を使う"
          subText="未来への投資＝スキルアップ・仕組み作り・人間関係構築"
          color={colors.sage}
        />
      </Series.Sequence>

      {/* ── Chapter 3: 集中力を守る技術 ── */}
      <Series.Sequence durationInFrames={D.ch3_title}>
        <ChapterTitle chapterNumber={3} chapterTitle="集中力を守る技術" />
      </Series.Sequence>

      <Series.Sequence durationInFrames={D.ch3_slide1}>
        <BulletSlide
          heading="集中を維持する3つの方法"
          bullets={[
            "ポモドーロ・テクニック ─ 25分集中＋5分休憩",
            "通知オフタイム ─ 午前中の2時間は通知を切る",
            "タスクバッチング ─ 似た作業をまとめて処理する",
          ]}
          accentColor={colors.lavender}
        />
      </Series.Sequence>

      <Series.Sequence durationInFrames={D.ch3_slide2}>
        <HighlightSlide
          text="集中力は「意志」ではなく\n「環境」で守る"
          color={colors.lavender}
        />
      </Series.Sequence>

      {/* ── Chapter 4: 1日の設計図を作る ── */}
      <Series.Sequence durationInFrames={D.ch4_title}>
        <ChapterTitle chapterNumber={4} chapterTitle="1日の設計図を作る" />
      </Series.Sequence>

      <Series.Sequence durationInFrames={D.ch4_slide1}>
        <BulletSlide
          heading="理想の1日テンプレート"
          bullets={[
            "朝イチ ─ 最重要タスク1つに集中する（ゴールデンタイム）",
            "午前 ─ 頭を使う作業（企画・分析・判断）",
            "午後 ─ コミュニケーション系（会議・レビュー・相談）",
            "退勤前 ─ 翌日のタスクを3つ書き出す",
          ]}
          accentColor={colors.dustyRose}
        />
      </Series.Sequence>

      <Series.Sequence durationInFrames={D.ch4_slide2}>
        <HighlightSlide
          text="計画は5分で作り\n残りの時間を\n迷いなく使う"
          color={colors.accent}
        />
      </Series.Sequence>

      {/* ── まとめ ── */}
      <Series.Sequence durationInFrames={D.assignment}>
        <AssignmentScene assignments={ASSIGNMENTS} />
      </Series.Sequence>

      <Series.Sequence durationInFrames={D.outro}>
        <OutroScene courseId={COURSE_ID} title={TITLE} />
      </Series.Sequence>
    </Series>
  );
};
