import React from "react";
import { Composition } from "remotion";
import { MindsetL01 } from "./mindset/L01_ProMindset";
import { MindsetL02, MINDSET_L02_DURATION } from "./mindset/L02_HoRenSo";
import {
  MindsetL03,
  MINDSET_L03_DURATION,
} from "./mindset/L03_TimeManagement";
import {
  AiSkillsL01,
  AI_SKILLS_L01_DURATION,
} from "./ai-skills/L01_PromptEngineering";
import {
  AiSkillsL02,
  AI_SKILLS_L02_DURATION,
} from "./ai-skills/L02_AiWorkEfficiency";
import {
  AiLiteracyL01,
  AI_LITERACY_L01_DURATION,
} from "./ai-literacy/L01_WhatIsAI";
import {
  AiLiteracyL02,
  AI_LITERACY_L02_DURATION,
} from "./ai-literacy/L02_AiEthicsRisk";

// MindsetL01: 手動計算 (loadFonts が副作用のみなので duration export なし)
const MINDSET_L01_DURATION = 2970;

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {/* ── 社会人マインドセット ── */}
      <Composition
        id="MindsetL01"
        component={MindsetL01}
        durationInFrames={MINDSET_L01_DURATION}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="MindsetL02"
        component={MindsetL02}
        durationInFrames={MINDSET_L02_DURATION}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="MindsetL03"
        component={MindsetL03}
        durationInFrames={MINDSET_L03_DURATION}
        fps={30}
        width={1920}
        height={1080}
      />

      {/* ── 生成AIスキルセット ── */}
      <Composition
        id="AiSkillsL01"
        component={AiSkillsL01}
        durationInFrames={AI_SKILLS_L01_DURATION}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="AiSkillsL02"
        component={AiSkillsL02}
        durationInFrames={AI_SKILLS_L02_DURATION}
        fps={30}
        width={1920}
        height={1080}
      />

      {/* ── 生成AIリテラシー ── */}
      <Composition
        id="AiLiteracyL01"
        component={AiLiteracyL01}
        durationInFrames={AI_LITERACY_L01_DURATION}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="AiLiteracyL02"
        component={AiLiteracyL02}
        durationInFrames={AI_LITERACY_L02_DURATION}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
