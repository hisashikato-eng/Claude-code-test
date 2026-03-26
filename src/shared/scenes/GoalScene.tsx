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
  goals: string[];
};

export const GoalScene: React.FC<Props> = ({ goals }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const headerOpacity = interpolate(frame, [0, fps * 0.3], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <Background>
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          padding: 120,
        }}
      >
        <div
          style={{
            fontSize: 42,
            fontFamily,
            fontWeight: 700,
            color: colors.dustyRose,
            marginBottom: 48,
            opacity: headerOpacity,
          }}
        >
          この講座のゴール
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {goals.map((goal, i) => {
            const delay = fps * 0.3 + i * fps * 0.2;
            const itemOpacity = interpolate(
              frame,
              [delay, delay + fps * 0.3],
              [0, 1],
              { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
            );
            const slideX = interpolate(
              frame,
              [delay, delay + fps * 0.3],
              [30, 0],
              { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
            );

            return (
              <div
                key={i}
                style={{
                  fontSize: 36,
                  fontFamily,
                  fontWeight: 500,
                  color: colors.charcoal,
                  opacity: itemOpacity,
                  transform: `translateX(${slideX}px)`,
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                }}
              >
                <div
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    backgroundColor: colors.accent,
                    flexShrink: 0,
                  }}
                />
                {goal}
              </div>
            );
          })}
        </div>
      </AbsoluteFill>
    </Background>
  );
};
