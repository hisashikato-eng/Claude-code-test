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
  chapterNumber: number;
  chapterTitle: string;
};

export const ChapterTitle: React.FC<Props> = ({
  chapterNumber,
  chapterTitle,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const opacity = interpolate(frame, [0, fps * 0.4], [0, 1], {
    extrapolateRight: "clamp",
  });

  const lineWidth = interpolate(frame, [fps * 0.2, fps * 0.6], [0, 400], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
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
            fontWeight: 700,
            color: colors.accent,
            letterSpacing: 6,
            marginBottom: 20,
          }}
        >
          CHAPTER {String(chapterNumber).padStart(2, "0")}
        </div>
        <div
          style={{
            width: lineWidth,
            height: 3,
            backgroundColor: colors.accent,
            marginBottom: 28,
          }}
        />
        <div
          style={{
            fontSize: 48,
            fontFamily,
            fontWeight: 700,
            color: colors.charcoal,
            textAlign: "center",
            maxWidth: 1200,
            lineHeight: 1.4,
          }}
        >
          {chapterTitle}
        </div>
      </AbsoluteFill>
    </Background>
  );
};
