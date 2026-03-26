import React from "react";
import { Series } from "remotion";
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

loadFonts();

const COURSE_ID = "L01";
const TITLE = "プロンプトエンジニアリング入門\n─ AIを使いこなす質問力";
const THEME = "生成AIスキルセット";

const GOALS = [
  "プロンプトの基本構造を理解する",
  "効果的なプロンプトを書くテクニックを習得する",
  "業務で使える実践的なプロンプトパターンを身につける",
];

const CHAPTERS = [
  "プロンプトとは何か",
  "良いプロンプトの5つの要素",
  "実践テクニック集",
  "業務で使えるテンプレート",
];

const ASSIGNMENTS = [
  "自分の業務で日常的に行うタスクを1つ選びプロンプトを3パターン書いてください",
  "それぞれの出力を比較しどのプロンプトが最も良い結果を出したか分析してください",
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
  ch2_slide1: 300,
  ch2_slide2: 210,
  ch3_title: 90,
  ch3_slide1: 270,
  ch3_slide2: 270,
  ch4_title: 90,
  ch4_slide1: 270,
  ch4_slide2: 210,
  assignment: 180,
  outro: 150,
};

export const AI_SKILLS_L01_DURATION = Object.values(D).reduce(
  (a, b) => a + b,
  0,
);

export const AiSkillsL01: React.FC = () => {
  return (
    <>
      {/* <Audio src={staticFile("bgm.mp3")} volume={0.15} loop /> */}
      {/* <Audio src={staticFile("ai-skills/L01_narration.wav")} volume={1.0} /> */}

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

        {/* ── Chapter 1: プロンプトとは何か ── */}
        <Series.Sequence durationInFrames={D.ch1_title}>
          <ChapterTitle chapterNumber={1} chapterTitle="プロンプトとは何か" />
        </Series.Sequence>

        <Series.Sequence durationInFrames={D.ch1_slide1}>
          <BulletSlide
            heading="プロンプト＝AIへの指示書"
            bullets={[
              "生成AIは「指示の質」で出力の質が決まる",
              "曖昧な質問には曖昧な回答が返ってくる",
              "具体的で明確な指示が良い結果を生む",
            ]}
          />
        </Series.Sequence>

        <Series.Sequence durationInFrames={D.ch1_slide2}>
          <HighlightSlide
            text="AIの能力を引き出すのは\nあなたの「質問力」"
            color={colors.accent}
          />
        </Series.Sequence>

        {/* ── Chapter 2: 良いプロンプトの5つの要素 ── */}
        <Series.Sequence durationInFrames={D.ch2_title}>
          <ChapterTitle
            chapterNumber={2}
            chapterTitle="良いプロンプトの5つの要素"
          />
        </Series.Sequence>

        <Series.Sequence durationInFrames={D.ch2_slide1}>
          <BulletSlide
            heading="プロンプト設計の5要素"
            bullets={[
              "役割 ─ AIに演じてほしい専門家を指定する",
              "コンテキスト ─ 背景情報や状況を伝える",
              "タスク ─ 具体的にやってほしいことを明示する",
              "フォーマット ─ 出力形式を指定する",
              "制約 ─ 文字数やトーンなどの条件を付ける",
            ]}
            accentColor={colors.sage}
          />
        </Series.Sequence>

        <Series.Sequence durationInFrames={D.ch2_slide2}>
          <HighlightSlide
            text="5要素を押さえるだけで\n出力の精度が劇的に向上する"
            color={colors.sage}
          />
        </Series.Sequence>

        {/* ── Chapter 3: 実践テクニック集 ── */}
        <Series.Sequence durationInFrames={D.ch3_title}>
          <ChapterTitle chapterNumber={3} chapterTitle="実践テクニック集" />
        </Series.Sequence>

        <Series.Sequence durationInFrames={D.ch3_slide1}>
          <BulletSlide
            heading="すぐに使えるテクニック"
            bullets={[
              "Few-shot ─ 例を2〜3個示してパターンを教える",
              "Chain of Thought ─ 「ステップバイステップで考えて」",
              "ペルソナ設定 ─ 「あなたはマーケティング専門家です」",
            ]}
            accentColor={colors.lavender}
          />
        </Series.Sequence>

        <Series.Sequence durationInFrames={D.ch3_slide2}>
          <BulletSlide
            heading="出力を改善するテクニック"
            bullets={[
              "反復改善 ─ 出力を見て指示を修正し再生成する",
              "比較依頼 ─ 「AとBのメリットデメリットを比較して」",
              "制約追加 ─ 「200文字以内で」「箇条書きで」",
            ]}
            accentColor={colors.lavender}
          />
        </Series.Sequence>

        {/* ── Chapter 4: 業務で使えるテンプレート ── */}
        <Series.Sequence durationInFrames={D.ch4_title}>
          <ChapterTitle
            chapterNumber={4}
            chapterTitle="業務で使えるテンプレート"
          />
        </Series.Sequence>

        <Series.Sequence durationInFrames={D.ch4_slide1}>
          <BulletSlide
            heading="定番プロンプトテンプレート"
            bullets={[
              "メール作成 ─ 相手・目的・トーンを指定して依頼",
              "議事録要約 ─ テキストを渡して要点を抽出させる",
              "アイデア出し ─ テーマと条件を与えて10案生成",
            ]}
            accentColor={colors.dustyRose}
          />
        </Series.Sequence>

        <Series.Sequence durationInFrames={D.ch4_slide2}>
          <HighlightSlide
            text="テンプレートは\n「自分用にカスタマイズ」して\n初めて武器になる"
            subText="まずは1つ自分の業務に合わせて作ってみましょう"
            color={colors.dustyRose}
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
