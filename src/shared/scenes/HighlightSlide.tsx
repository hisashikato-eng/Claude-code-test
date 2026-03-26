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

type HighlightSlideProps = {
  text: string;
  subText?: string;
  color?: string;
};

export const HighlightSlide: React.FC<HighlightSlideProps> = ({
  text,
  subText,
  color = colors.dustyRose,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = interpolate(frame, [0, fps * 0.4], [0.9, 1], {
    extrapolateRight: "clamp",
  });
  const opacity = interpolate(frame, [0, fps * 0.4], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <Background>
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          opacity,
          transform: `scale(${scale})`,
        }}
      >
        <div
          style={{
            fontSize: 52,
            fontFamily,
            fontWeight: 700,
            color,
            textAlign: "center",
            maxWidth: 1200,
            lineHeight: 1.5,
          }}
        >
          {text}
        </div>
        {subText && (
          <div
            style={{
              fontSize: 28,
              fontFamily,
              fontWeight: 400,
              color: colors.charcoal,
              marginTop: 32,
              opacity: 0.7,
              textAlign: "center",
              maxWidth: 1000,
              lineHeight: 1.6,
            }}
          >
            {subText}
          </div>
        )}
      </AbsoluteFill>
    </Background>
  );
};
