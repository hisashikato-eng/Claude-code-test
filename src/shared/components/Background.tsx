import React from "react";
import { AbsoluteFill } from "remotion";
import { colors } from "./colors";

export const Background: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  return (
    <AbsoluteFill
      style={{
        background: colors.backgroundGradient,
        fontFamily: "Noto Sans JP, sans-serif",
      }}
    >
      {children}
    </AbsoluteFill>
  );
};
