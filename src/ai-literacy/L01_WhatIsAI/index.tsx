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

const COURSE_ID = "L01";
const TITLE = "AIとは何か\n─ 生成AIの基礎知識と全体像";
const THEME = "生成AIリテラシー";

const GOALS = [
  "AIと生成AIの違いを説明できるようになる",
  "生成AIの仕組みをざっくり理解する",
  "業務でAIを活用する際の注意点を知る",
];

const CHAPTERS = [
  "AIの歴史と現在地",
  "生成AIの仕組み",
  "できること・できないこと",
  "AIと付き合うための心構え",
];

const ASSIGNMENTS = [
  "生成AIに自分の業務内容を説明し改善提案を3つもらってください",
  "その提案のうち実現可能なものとそうでないものを理由付きで整理してください",
];

// ── シーン尺（フレーム数 @30fps）──
const D = {
  title: 150,
  goal: 180,
  toc: 150,
  ch1_title: 90,
  ch1_slide1: 270,
  ch1_slide2: 210,
  ch2_title: 90,
  ch2_slide1: 270,
  ch2_slide2: 240,
  ch3_title: 90,
  ch3_slide1: 270,
  ch3_slide2: 270,
  ch4_title: 90,
  ch4_slide1: 270,
  ch4_slide2: 210,
  assignment: 180,
  outro: 150,
};

export const AI_LITERACY_L01_DURATION = Object.values(D).reduce(
  (a, b) => a + b,
  0,
);

export const AiLiteracyL01: React.FC = () => {
  return (
    <>
      {/* <Audio src={staticFile("bgm.mp3")} volume={0.15} loop /> */}
      {/* <Audio src={staticFile("ai-literacy/L01_narration.wav")} volume={1.0} /> */}

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

        {/* ── Chapter 1: AIの歴史と現在地 ── */}
        <Series.Sequence durationInFrames={D.ch1_title}>
          <ChapterTitle chapterNumber={1} chapterTitle="AIの歴史と現在地" />
        </Series.Sequence>

        <Series.Sequence durationInFrames={D.ch1_slide1}>
          <BulletSlide
            heading="AI発展の3つの波"
            bullets={[
              "第1次ブーム（1950〜60年代）─ ルールベースの推論",
              "第2次ブーム（1980年代）─ エキスパートシステム",
              "第3次ブーム（2010年代〜）─ 深層学習と生成AI",
            ]}
          />
        </Series.Sequence>

        <Series.Sequence durationInFrames={D.ch1_slide2}>
          <HighlightSlide
            text="2022年以降\n生成AIが一気に\n私たちの日常へ"
            subText="ChatGPTの登場が社会を変えた"
            color={colors.accent}
          />
        </Series.Sequence>

        {/* ── Chapter 2: 生成AIの仕組み ── */}
        <Series.Sequence durationInFrames={D.ch2_title}>
          <ChapterTitle chapterNumber={2} chapterTitle="生成AIの仕組み" />
        </Series.Sequence>

        <Series.Sequence durationInFrames={D.ch2_slide1}>
          <BulletSlide
            heading="大規模言語モデル（LLM）とは"
            bullets={[
              "大量のテキストデータから言語パターンを学習",
              "「次に来る確率が高い単語」を予測して文章を生成",
              "学習データに基づく統計的な推論であり「思考」ではない",
            ]}
            accentColor={colors.sage}
          />
        </Series.Sequence>

        <Series.Sequence durationInFrames={D.ch2_slide2}>
          <BulletSlide
            heading="生成AIの種類"
            bullets={[
              "テキスト生成 ─ ChatGPT、Claude、Gemini",
              "画像生成 ─ DALL·E、Midjourney、Stable Diffusion",
              "音声・動画生成 ─ 音声合成、動画編集支援",
              "コード生成 ─ GitHub Copilot、Cursor",
            ]}
            accentColor={colors.sage}
          />
        </Series.Sequence>

        {/* ── Chapter 3: できること・できないこと ── */}
        <Series.Sequence durationInFrames={D.ch3_title}>
          <ChapterTitle
            chapterNumber={3}
            chapterTitle="できること・できないこと"
          />
        </Series.Sequence>

        <Series.Sequence durationInFrames={D.ch3_slide1}>
          <BulletSlide
            heading="生成AIが得意なこと"
            bullets={[
              "文章の要約・翻訳・校正",
              "アイデアの壁打ち・ブレインストーミング",
              "定型的な文書やコードの下書き作成",
              "大量データからのパターン発見",
            ]}
            accentColor={colors.lavender}
          />
        </Series.Sequence>

        <Series.Sequence durationInFrames={D.ch3_slide2}>
          <BulletSlide
            heading="生成AIが苦手なこと"
            bullets={[
              "事実確認 ─ もっともらしいウソ（ハルシネーション）",
              "最新情報 ─ 学習データ以降の出来事は知らない",
              "感情や倫理の判断 ─ 人間の価値観は代替できない",
              "責任を取ること ─ 最終判断は常に人間",
            ]}
            accentColor={colors.lavender}
          />
        </Series.Sequence>

        {/* ── Chapter 4: AIと付き合うための心構え ── */}
        <Series.Sequence durationInFrames={D.ch4_title}>
          <ChapterTitle
            chapterNumber={4}
            chapterTitle="AIと付き合うための心構え"
          />
        </Series.Sequence>

        <Series.Sequence durationInFrames={D.ch4_slide1}>
          <BulletSlide
            heading="AI活用の3つの原則"
            bullets={[
              "出力を鵜呑みにしない ─ 必ず人間が確認する",
              "機密情報を入力しない ─ 情報漏洩リスクを意識する",
              "AIは「ツール」─ 主体は常に自分である",
            ]}
            accentColor={colors.dustyRose}
          />
        </Series.Sequence>

        <Series.Sequence durationInFrames={D.ch4_slide2}>
          <HighlightSlide
            text="AIを恐れず\nAIに頼りすぎず\nAIと共に成長する"
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
