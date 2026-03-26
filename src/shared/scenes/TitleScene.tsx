import React from "react";
import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { Background } from "../components/Background";
import { colors } from "../components/colors";
import { fontFamily } from "../components/font";

type Props = {
  courseId: string; // 例: "L01"
  title: string;
  theme: string; // 例: "社会人マインドセット"
};

export const TitleScene: React.FC<Props> = ({ courseId, title, theme }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const opacity = interpolate(frame, [0, fps * 0.5], [0, 1], {
    extrapolateRight: "clamp",
  });

  const slideUp = interpolate(frame, [0, fps * 0.5], [40, 0], {
    extrapolateRight: "clamp",
  });

  return (
    <Background>
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          opacity,
          transform: `translateY(${slideUp}px)`,
        }}
      >
        <div
          style={{
            fontSize: 28,
            fontFamily,
            fontWeight: 500,
            color: colors.lavender,
            marginBottom: 16,
            letterSpacing: 4,
          }}
        >
          WAIJ AIスクール ─ {theme}
        </div>
        <div
          style={{
            fontSize: 32,
            fontFamily,
            fontWeight: 500,
            color: colors.accent,
            marginBottom: 24,
          }}
        >
          {courseId}
        </div>
        <div
          style={{
            fontSize: 56,
            fontFamily,
            fontWeight: 700,
            color: colors.charcoal,
            textAlign: "center",
            maxWidth: 1400,
            lineHeight: 1.4,
          }}
        >
          {title}
        </div>
      </AbsoluteFill>
    </Background>
  );
};
