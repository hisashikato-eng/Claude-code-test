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
const TITLE = "AIの倫理とリスク管理\n─ 安全にAIを使うために";
const THEME = "生成AIリテラシー";

const GOALS = [
  "AI利用に伴う主要なリスクを理解する",
  "著作権・プライバシーの基本ルールを学ぶ",
  "組織としてのAIガバナンスの考え方を知る",
];

const CHAPTERS = [
  "AIが抱える4つのリスク",
  "著作権と知的財産",
  "プライバシーと情報セキュリティ",
  "組織のAIガバナンス",
];

const ASSIGNMENTS = [
  "自社または所属組織のAI利用ガイドラインを確認し要点を3つにまとめてください",
  "ガイドラインがない場合は自分なりのAI利用ルールを5つ作成してください",
];

const D = {
  title: 150,
  goal: 180,
  toc: 150,
  ch1_title: 90,
  ch1_slide1: 300,
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

export const AI_LITERACY_L02_DURATION = Object.values(D).reduce(
  (a, b) => a + b,
  0,
);

export const AiLiteracyL02: React.FC = () => {
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

      {/* ── Chapter 1: AIが抱える4つのリスク ── */}
      <Series.Sequence durationInFrames={D.ch1_title}>
        <ChapterTitle
          chapterNumber={1}
          chapterTitle="AIが抱える4つのリスク"
        />
      </Series.Sequence>

      <Series.Sequence durationInFrames={D.ch1_slide1}>
        <BulletSlide
          heading="知っておくべき4大リスク"
          bullets={[
            "ハルシネーション ─ もっともらしい誤情報の生成",
            "バイアス ─ 学習データに含まれる偏見の再現",
            "情報漏洩 ─ 入力データが外部に渡るリスク",
            "著作権侵害 ─ 既存の著作物に酷似した出力",
          ]}
        />
      </Series.Sequence>

      <Series.Sequence durationInFrames={D.ch1_slide2}>
        <HighlightSlide
          text="リスクを知ることは\nAIを「使わない理由」ではなく\n「正しく使う条件」"
          color={colors.dustyRose}
        />
      </Series.Sequence>

      {/* ── Chapter 2: 著作権と知的財産 ── */}
      <Series.Sequence durationInFrames={D.ch2_title}>
        <ChapterTitle chapterNumber={2} chapterTitle="著作権と知的財産" />
      </Series.Sequence>

      <Series.Sequence durationInFrames={D.ch2_slide1}>
        <BulletSlide
          heading="AI出力と著作権の基本"
          bullets={[
            "AI生成物の著作権は現状グレーゾーン（各国で議論中）",
            "他者の著作物をそのままプロンプトに使わない",
            "出力が既存作品に酷似していないか確認する",
          ]}
          accentColor={colors.sage}
        />
      </Series.Sequence>

      <Series.Sequence durationInFrames={D.ch2_slide2}>
        <BulletSlide
          heading="実務で気をつけるポイント"
          bullets={[
            "商用利用の可否をツールの利用規約で確認する",
            "AI生成であることを適切に開示する",
            "最終成果物には必ず人間の編集・判断を加える",
          ]}
          accentColor={colors.sage}
        />
      </Series.Sequence>

      {/* ── Chapter 3: プライバシーと情報セキュリティ ── */}
      <Series.Sequence durationInFrames={D.ch3_title}>
        <ChapterTitle
          chapterNumber={3}
          chapterTitle="プライバシーと情報セキュリティ"
        />
      </Series.Sequence>

      <Series.Sequence durationInFrames={D.ch3_slide1}>
        <BulletSlide
          heading="入力してはいけない情報"
          bullets={[
            "個人情報 ─ 氏名・住所・電話番号・マイナンバー",
            "機密情報 ─ 未公開の経営データ・戦略資料",
            "顧客データ ─ 取引先情報・契約内容",
          ]}
          accentColor={colors.lavender}
        />
      </Series.Sequence>

      <Series.Sequence durationInFrames={D.ch3_slide2}>
        <HighlightSlide
          text="「AIに聞いてみよう」の前に\n「この情報を外に出して\n大丈夫か？」と考える"
          color={colors.lavender}
        />
      </Series.Sequence>

      {/* ── Chapter 4: 組織のAIガバナンス ── */}
      <Series.Sequence durationInFrames={D.ch4_title}>
        <ChapterTitle chapterNumber={4} chapterTitle="組織のAIガバナンス" />
      </Series.Sequence>

      <Series.Sequence durationInFrames={D.ch4_slide1}>
        <BulletSlide
          heading="AIガバナンスの3本柱"
          bullets={[
            "ルール ─ 利用ガイドラインの策定と周知",
            "教育 ─ 全社員へのリテラシー研修",
            "監視 ─ 利用状況のモニタリングと定期見直し",
          ]}
          accentColor={colors.dustyRose}
        />
      </Series.Sequence>

      <Series.Sequence durationInFrames={D.ch4_slide2}>
        <HighlightSlide
          text="ルールは「縛り」ではなく\n安心してAIを使うための\n「基盤」である"
          color={colors.accent}
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
