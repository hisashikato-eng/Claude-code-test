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
  courseId: string;
  title: string;
};

export const OutroScene: React.FC<Props> = ({ courseId, title }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const opacity = interpolate(frame, [0, fps * 0.5], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <Background>
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          opacity,
        }}
      >
        <div
          style={{
            fontSize: 28,
            fontFamily,
            fontWeight: 500,
            color: colors.accent,
            marginBottom: 16,
          }}
        >
          {courseId}
        </div>
        <div
          style={{
            fontSize: 44,
            fontFamily,
            fontWeight: 700,
            color: colors.charcoal,
            textAlign: "center",
            maxWidth: 1200,
            lineHeight: 1.4,
            marginBottom: 48,
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: 32,
            fontFamily,
            fontWeight: 500,
            color: colors.lavender,
          }}
        >
          お疲れさまでした
        </div>
        <div
          style={{
            fontSize: 24,
            fontFamily,
            fontWeight: 400,
            color: colors.charcoal,
            marginTop: 32,
            opacity: 0.6,
          }}
        >
          WAIJ AIスクール
        </div>
      </AbsoluteFill>
    </Background>
  );
};
