import React from "react";
import { Composition } from "remotion";
import { MindsetL01 } from "./mindset/L01_ProMindset";
import { MindsetL02, MINDSET_L02_DURATION } from "./mindset/L02_HoRenSo";
import {
  AiSkillsL01,
  AI_SKILLS_L01_DURATION,
} from "./ai-skills/L01_PromptEngineering";

// MindsetL01 合計: 150+180+150 + (90+240+210)*4 + 180+150 = 2970
const MINDSET_L01_DURATION = 2970;

export const RemotionRoot: React.FC = () => {
  return (
    <>
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
        id="AiSkillsL01"
        component={AiSkillsL01}
        durationInFrames={AI_SKILLS_L01_DURATION}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
