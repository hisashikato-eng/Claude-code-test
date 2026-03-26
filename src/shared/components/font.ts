import { staticFile } from "remotion";

const fontWeights = [400, 500, 700] as const;

export const loadFonts = () => {
  const params = fontWeights.map((w) => `wght@${w}`).join(";");
  const url = `https://fonts.googleapis.com/css2?family=Noto+Sans+JP:${params}&display=swap`;

  return new Promise<void>((resolve) => {
    const link = document.createElement("link");
    link.href = url;
    link.rel = "stylesheet";
    link.onload = () => resolve();
    link.onerror = () => resolve(); // フォント読み込み失敗時もレンダリング継続
    document.head.appendChild(link);
  });
};

export const fontFamily = "Noto Sans JP, sans-serif";
