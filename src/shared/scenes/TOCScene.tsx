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
  chapters: string[];
};

export const TOCScene: React.FC<Props> = ({ chapters }) => {
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
            color: colors.sage,
            marginBottom: 48,
            opacity: headerOpacity,
          }}
        >
          目次
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {chapters.map((chapter, i) => {
            const delay = fps * 0.3 + i * fps * 0.15;
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
                  fontSize: 34,
                  fontFamily,
                  fontWeight: 500,
                  color: colors.charcoal,
                  opacity: itemOpacity,
                  display: "flex",
                  alignItems: "center",
                  gap: 20,
                }}
              >
                <div
                  style={{
                    fontSize: 24,
                    fontWeight: 700,
                    color: colors.accent,
                    minWidth: 48,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                {chapter}
              </div>
            );
          })}
        </div>
      </AbsoluteFill>
    </Background>
  );
};
