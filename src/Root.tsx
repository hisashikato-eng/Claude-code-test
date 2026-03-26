import React from "react";
import { Composition } from "remotion";
import { MindsetL01 } from "./mindset/L01_ProMindset";

// 全シーンの合計フレーム数: 150+180+150 + (90+240+210)*4 + 180+150 = 2970
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
    </>
  );
};
