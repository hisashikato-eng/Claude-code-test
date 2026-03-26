import React from "react";
import { Audio, Series, staticFile } from "remotion";
import { TitleScene } from "../../shared/scenes/TitleScene";
import { GoalScene } from "../../shared/scenes/GoalScene";
import { TOCScene } from "../../shared/scenes/TOCScene";
import { AssignmentScene } from "../../shared/scenes/AssignmentScene";
import { OutroScene } from "../../shared/scenes/OutroScene";
import { ChapterTitle } from "./chapters/ChapterTitle";
import { BulletSlide } from "./chapters/BulletSlide";
import { HighlightSlide } from "./chapters/HighlightSlide";
import { colors } from "../../shared/components/colors";
import { loadFonts } from "../../shared/components/font";

// フォント読み込み
loadFonts();

const COURSE_ID = "L01";
const TITLE = "プロフェッショナルマインドセット\n─ 信頼される社会人の考え方";
const THEME = "社会人マインドセット";

const GOALS = [
  "プロ意識の本質を理解する",
  "信頼を築くための行動原則を学ぶ",
  "自律的に成長するマインドセットを身につける",
];

const CHAPTERS = [
  "プロ意識とは何か",
  "信頼を築く3つの原則",
  "自律的成長のサイクル",
  "明日から実践できること",
];

const ASSIGNMENTS = [
  "自分の「プロ意識」を3つの行動指針として書き出してください",
  "1週間、その行動指針を意識して業務に取り組み、気づきを記録してください",
];

// ── シーン尺（フレーム数）──────────────────
// 音声同期時にここを調整する（30fps）
const SCENE_DURATIONS = {
  title: 150, // 5秒
  goal: 180, // 6秒
  toc: 150, // 5秒
  // Chapter 1
  ch1_title: 90, // 3秒
  ch1_slide1: 240, // 8秒
  ch1_slide2: 210, // 7秒
  // Chapter 2
  ch2_title: 90,
  ch2_slide1: 240,
  ch2_slide2: 240,
  // Chapter 3
  ch3_title: 90,
  ch3_slide1: 240,
  ch3_slide2: 210,
  // Chapter 4
  ch4_title: 90,
  ch4_slide1: 240,
  ch4_slide2: 210,
  // Ending
  assignment: 180,
  outro: 150,
};

export const MindsetL01: React.FC = () => {
  return (
    <>
      {/* BGM（ファイル配置後に有効化）*/}
      {/* <Audio src={staticFile("bgm.mp3")} volume={0.15} loop /> */}
      {/* ナレーション（ファイル配置後に有効化）*/}
      {/* <Audio src={staticFile("mindset/L01_narration.wav")} volume={1.0} /> */}

      <Series>
        {/* ── 導入 ── */}
        <Series.Sequence durationInFrames={SCENE_DURATIONS.title}>
          <TitleScene courseId={COURSE_ID} title={TITLE} theme={THEME} />
        </Series.Sequence>

        <Series.Sequence durationInFrames={SCENE_DURATIONS.goal}>
          <GoalScene goals={GOALS} />
        </Series.Sequence>

        <Series.Sequence durationInFrames={SCENE_DURATIONS.toc}>
          <TOCScene chapters={CHAPTERS} />
        </Series.Sequence>

        {/* ── Chapter 1: プロ意識とは何か ── */}
        <Series.Sequence durationInFrames={SCENE_DURATIONS.ch1_title}>
          <ChapterTitle chapterNumber={1} chapterTitle="プロ意識とは何か" />
        </Series.Sequence>

        <Series.Sequence durationInFrames={SCENE_DURATIONS.ch1_slide1}>
          <BulletSlide
            heading="プロフェッショナルの定義"
            bullets={[
              "与えられた役割に対して責任を持つ姿勢",
              "期待を超える成果を意識する",
              "自分の仕事に誇りを持つ",
            ]}
          />
        </Series.Sequence>

        <Series.Sequence durationInFrames={SCENE_DURATIONS.ch1_slide2}>
          <HighlightSlide
            text="「プロ意識」とは\n特別な才能ではなく\n日々の姿勢である"
            color={colors.dustyRose}
          />
        </Series.Sequence>

        {/* ── Chapter 2: 信頼を築く3つの原則 ── */}
        <Series.Sequence durationInFrames={SCENE_DURATIONS.ch2_title}>
          <ChapterTitle
            chapterNumber={2}
            chapterTitle="信頼を築く3つの原則"
          />
        </Series.Sequence>

        <Series.Sequence durationInFrames={SCENE_DURATIONS.ch2_slide1}>
          <BulletSlide
            heading="信頼の3原則"
            bullets={[
              "約束を守る ─ 小さな期限も確実に",
              "報連相を徹底する ─ 悪い情報ほど早く",
              "一貫性を持つ ─ 言動を一致させる",
            ]}
            accentColor={colors.sage}
          />
        </Series.Sequence>

        <Series.Sequence durationInFrames={SCENE_DURATIONS.ch2_slide2}>
          <BulletSlide
            heading="信頼が生む好循環"
            bullets={[
              "任される仕事の幅が広がる",
              "チームの協力を得やすくなる",
              "成長のチャンスが増える",
            ]}
            accentColor={colors.sage}
          />
        </Series.Sequence>

        {/* ── Chapter 3: 自律的成長のサイクル ── */}
        <Series.Sequence durationInFrames={SCENE_DURATIONS.ch3_title}>
          <ChapterTitle
            chapterNumber={3}
            chapterTitle="自律的成長のサイクル"
          />
        </Series.Sequence>

        <Series.Sequence durationInFrames={SCENE_DURATIONS.ch3_slide1}>
          <BulletSlide
            heading="PDCAではなく「OODA」で考える"
            bullets={[
              "Observe ─ 状況を観察する",
              "Orient ─ 自分の立ち位置を把握する",
              "Decide ─ 次のアクションを決める",
              "Act ─ 素早く実行する",
            ]}
            accentColor={colors.lavender}
          />
        </Series.Sequence>

        <Series.Sequence durationInFrames={SCENE_DURATIONS.ch3_slide2}>
          <HighlightSlide
            text="成長とは\n「昨日の自分」を\n少しだけ超えること"
            color={colors.lavender}
          />
        </Series.Sequence>

        {/* ── Chapter 4: 明日から実践できること ── */}
        <Series.Sequence durationInFrames={SCENE_DURATIONS.ch4_title}>
          <ChapterTitle
            chapterNumber={4}
            chapterTitle="明日から実践できること"
          />
        </Series.Sequence>

        <Series.Sequence durationInFrames={SCENE_DURATIONS.ch4_slide1}>
          <BulletSlide
            heading="今日から始める3つのアクション"
            bullets={[
              "朝の5分で今日のゴールを書き出す",
              "依頼されたことに+αの提案を1つ添える",
              "退勤前に「今日学んだこと」を1行メモする",
            ]}
            accentColor={colors.dustyRose}
          />
        </Series.Sequence>

        <Series.Sequence durationInFrames={SCENE_DURATIONS.ch4_slide2}>
          <HighlightSlide
            text="小さな行動の積み重ねが\nプロフェッショナルを作る"
            subText="まずは1週間、続けてみましょう"
            color={colors.accent}
          />
        </Series.Sequence>

        {/* ── まとめ ── */}
        <Series.Sequence durationInFrames={SCENE_DURATIONS.assignment}>
          <AssignmentScene assignments={ASSIGNMENTS} />
        </Series.Sequence>

        <Series.Sequence durationInFrames={SCENE_DURATIONS.outro}>
          <OutroScene courseId={COURSE_ID} title={TITLE} />
        </Series.Sequence>
      </Series>
    </>
  );
};
