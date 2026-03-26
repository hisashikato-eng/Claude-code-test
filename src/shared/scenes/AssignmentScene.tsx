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
  assignments: string[];
};

export const AssignmentScene: React.FC<Props> = ({ assignments }) => {
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
          課題
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 28,
            maxWidth: 1200,
          }}
        >
          {assignments.map((item, i) => {
            const delay = fps * 0.3 + i * fps * 0.2;
            const itemOpacity = interpolate(
              frame,
              [delay, delay + fps * 0.3],
              [0, 1],
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
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 16,
                  lineHeight: 1.6,
                }}
              >
                <div
                  style={{
                    fontSize: 28,
                    fontWeight: 700,
                    color: colors.sage,
                    minWidth: 36,
                    flexShrink: 0,
                  }}
                >
                  {i + 1}.
                </div>
                {item}
              </div>
            );
          })}
        </div>
      </AbsoluteFill>
    </Background>
  );
};
