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
const TITLE = "報連相の技術\n─ チームで成果を出すコミュニケーション";
const THEME = "社会人マインドセット";

const GOALS = [
  "報連相の本質と目的を理解する",
  "場面に応じた伝え方を身につける",
  "チームの信頼を高めるコミュニケーション力を鍛える",
];

const CHAPTERS = [
  "なぜ報連相が重要なのか",
  "「報告」の技術",
  "「連絡」と「相談」の使い分け",
  "報連相を習慣化するコツ",
];

const ASSIGNMENTS = [
  "今週の業務で報告連絡相談をそれぞれ1回以上意識的に行ってください",
  "うまくいった場面といかなかった場面を書き出し違いを分析してください",
];

// ── シーン尺（フレーム数 @30fps）──
const D = {
  title: 150,
  goal: 180,
  toc: 150,
  ch1_title: 90,
  ch1_slide1: 240,
  ch1_slide2: 210,
  ch2_title: 90,
  ch2_slide1: 240,
  ch2_slide2: 240,
  ch3_title: 90,
  ch3_slide1: 270,
  ch3_slide2: 210,
  ch4_title: 90,
  ch4_slide1: 240,
  ch4_slide2: 210,
  assignment: 180,
  outro: 150,
};

export const MINDSET_L02_DURATION = Object.values(D).reduce((a, b) => a + b, 0);

export const MindsetL02: React.FC = () => {
  return (
    <>
      {/* <Audio src={staticFile("bgm.mp3")} volume={0.15} loop /> */}
      {/* <Audio src={staticFile("mindset/L02_narration.wav")} volume={1.0} /> */}

      <Series>
        {/* ── 導入 ── */}
        <Series.Sequence durationInFrames={D.title}>
          <TitleScene courseId={COURSE_ID} title={TITLE} theme={THEME} />
        </Series.Sequence>

        <Series.Sequence durationInFrames={D.goal}>
          <GoalScene goals={GOALS} />
        </Series.Sequence>

        <Series.Sequence durationInFrames={D.toc}>
          <TOCScene chapters={CHAPTERS} />
        </Series.Sequence>

        {/* ── Chapter 1: なぜ報連相が重要なのか ── */}
        <Series.Sequence durationInFrames={D.ch1_title}>
          <ChapterTitle chapterNumber={1} chapterTitle="なぜ報連相が重要なのか" />
        </Series.Sequence>

        <Series.Sequence durationInFrames={D.ch1_slide1}>
          <BulletSlide
            heading="報連相が果たす3つの役割"
            bullets={[
              "チーム全体の状況を見える化する",
              "問題を早期に発見し対処できる",
              "メンバー間の信頼関係を強化する",
            ]}
          />
        </Series.Sequence>

        <Series.Sequence durationInFrames={D.ch1_slide2}>
          <HighlightSlide
            text="報連相は「義務」ではなく\nチームを動かす「武器」である"
            color={colors.dustyRose}
          />
        </Series.Sequence>

        {/* ── Chapter 2: 報告の技術 ── */}
        <Series.Sequence durationInFrames={D.ch2_title}>
          <ChapterTitle chapterNumber={2} chapterTitle="「報告」の技術" />
        </Series.Sequence>

        <Series.Sequence durationInFrames={D.ch2_slide1}>
          <BulletSlide
            heading="報告の基本フレームワーク"
            bullets={[
              "結論ファースト ─ まず結果を伝える",
              "事実と意見を分ける",
              "次のアクションを添える",
            ]}
            accentColor={colors.sage}
          />
        </Series.Sequence>

        <Series.Sequence durationInFrames={D.ch2_slide2}>
          <BulletSlide
            heading="報告のタイミング"
            bullets={[
              "完了時 ─ 依頼された仕事が終わったとき",
              "中間報告 ─ 長期タスクは途中経過を共有",
              "異常時 ─ 想定外の事態はすぐに報告",
            ]}
            accentColor={colors.sage}
          />
        </Series.Sequence>

        {/* ── Chapter 3: 連絡と相談の使い分け ── */}
        <Series.Sequence durationInFrames={D.ch3_title}>
          <ChapterTitle
            chapterNumber={3}
            chapterTitle="「連絡」と「相談」の使い分け"
          />
        </Series.Sequence>

        <Series.Sequence durationInFrames={D.ch3_slide1}>
          <BulletSlide
            heading="連絡と相談の違い"
            bullets={[
              "連絡 ─ 事実や決定事項を正確に伝えること",
              "相談 ─ 判断に迷ったとき意見やアドバイスを求めること",
              "連絡は「伝達」相談は「対話」と覚える",
            ]}
            accentColor={colors.lavender}
          />
        </Series.Sequence>

        <Series.Sequence durationInFrames={D.ch3_slide2}>
          <HighlightSlide
            text="相談は「弱さ」ではなく\n「判断力」の表れ"
            subText="一人で抱え込まず早めに周囲の知恵を借りましょう"
            color={colors.lavender}
          />
        </Series.Sequence>

        {/* ── Chapter 4: 報連相を習慣化するコツ ── */}
        <Series.Sequence durationInFrames={D.ch4_title}>
          <ChapterTitle
            chapterNumber={4}
            chapterTitle="報連相を習慣化するコツ"
          />
        </Series.Sequence>

        <Series.Sequence durationInFrames={D.ch4_slide1}>
          <BulletSlide
            heading="習慣化の3ステップ"
            bullets={[
              "タイミングを決める ─ 毎朝・毎夕など固定の時間を作る",
              "テンプレートを使う ─ 結論→経緯→次のアクションの型",
              "フィードバックをもらう ─ 伝わったか確認する習慣",
            ]}
            accentColor={colors.dustyRose}
          />
        </Series.Sequence>

        <Series.Sequence durationInFrames={D.ch4_slide2}>
          <HighlightSlide
            text="報連相は\n「回数」より「質」\n「質」より「速度」"
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
    </>
  );
};
