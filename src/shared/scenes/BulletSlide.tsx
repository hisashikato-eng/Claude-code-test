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

type BulletSlideProps = {
  heading: string;
  bullets: string[];
  accentColor?: string;
};

export const BulletSlide: React.FC<BulletSlideProps> = ({
  heading,
  bullets,
  accentColor = colors.accent,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const headingOpacity = interpolate(frame, [0, fps * 0.3], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <Background>
      <AbsoluteFill
        style={{
          justifyContent: "center",
          padding: "80px 160px",
        }}
      >
        <div
          style={{
            fontSize: 40,
            fontFamily,
            fontWeight: 700,
            color: accentColor,
            marginBottom: 48,
            opacity: headingOpacity,
          }}
        >
          {heading}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          {bullets.map((text, i) => {
            const delay = fps * 0.3 + i * fps * 0.25;
            const itemOpacity = interpolate(
              frame,
              [delay, delay + fps * 0.3],
              [0, 1],
              { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
            );
            const slideX = interpolate(
              frame,
              [delay, delay + fps * 0.3],
              [24, 0],
              { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
            );

            return (
              <div
                key={i}
                style={{
                  fontSize: 32,
                  fontFamily,
                  fontWeight: 500,
                  color: colors.charcoal,
                  opacity: itemOpacity,
                  transform: `translateX(${slideX}px)`,
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 20,
                  lineHeight: 1.6,
                }}
              >
                <div
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    backgroundColor: accentColor,
                    flexShrink: 0,
                    marginTop: 14,
                  }}
                />
                {text}
              </div>
            );
          })}
        </div>
      </AbsoluteFill>
    </Background>
  );
};
