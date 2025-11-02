export interface Theme {
  name: string;
  description: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
    border: string;
    glow: string;
    success: string;
    warning: string;
    error: string;
  };
  effects: {
    cardBg: string;
    cardBorder: string;
    inputBg: string;
    promptColor: string;
    cursorColor: string;
  };
}

export const themes: Record<string, Theme> = {
  cyberpunk: {
    name: "Cyberpunk",
    description: "Neon-soaked future with cyan and magenta vibes",
    colors: {
      primary: "#00f5ff", // bright electric cyan
      secondary: "#ff00aa", // vivid magenta
      accent: "#00ffc8", // bright teal
      background: "#14182b", // lighter midnight for better visibility
      text: "#e8f4f8", // soft white with cyan tint
      border: "#00d4ff",
      glow: "#00f5ff",
      success: "#00ff88",
      warning: "#ffd700",
      error: "#ff2e63",
    },
    effects: {
      cardBg: "rgba(20, 24, 43, 0.65)",
      cardBorder: "rgba(0, 245, 255, 0.25)",
      inputBg: "rgba(25, 30, 50, 0.5)",
      promptColor: "#00f5ff",
      cursorColor: "#ff00aa",
    },
  },
  matrix: {
    name: "Matrix",
    description: "Deep terminal green with phosphor glow",
    colors: {
      primary: "#39ff14", // neon green
      secondary: "#00ff41", // matrix green
      accent: "#0dff00", // bright lime
      background: "#0d1117", // dark terminal
      text: "#c9f0d6", // soft green tint
      border: "#1f6f3e",
      glow: "#39ff14",
      success: "#00ff41",
      warning: "#d4ff00",
      error: "#ff3131",
    },
    effects: {
      cardBg: "rgba(13, 17, 23, 0.65)",
      cardBorder: "rgba(57, 255, 20, 0.3)",
      inputBg: "rgba(18, 25, 20, 0.5)",
      promptColor: "#39ff14",
      cursorColor: "#00ff41",
    },
  },
  dracula: {
    name: "Dracula",
    description: "Elegant vampire theme with vibrant accents",
    colors: {
      primary: "#ff79c6", // candy pink
      secondary: "#bd93f9", // soft purple
      accent: "#50fa7b", // mint green
      background: "#282a36", // lighter for better visibility
      text: "#f8f8f2", // off-white
      border: "#6272a4",
      glow: "#ff79c6",
      success: "#50fa7b",
      warning: "#ffb86c",
      error: "#ff5555",
    },
    effects: {
      cardBg: "rgba(40, 42, 54, 0.65)",
      cardBorder: "rgba(189, 147, 249, 0.35)",
      inputBg: "rgba(68, 71, 90, 0.5)",
      promptColor: "#ff79c6",
      cursorColor: "#bd93f9",
    },
  },
  nord: {
    name: "Nord",
    description: "Cool arctic palette with snow and ice tones",
    colors: {
      primary: "#88c0d0", // frost cyan
      secondary: "#81a1c1", // polar blue
      accent: "#8fbcbb", // ice teal
      background: "#3b4252", // lighter polar night
      text: "#eceff4", // snow white
      border: "#5e81ac",
      glow: "#88c0d0",
      success: "#a3be8c", // aurora green
      warning: "#ebcb8b", // aurora yellow
      error: "#bf616a", // aurora red
    },
    effects: {
      cardBg: "rgba(59, 66, 82, 0.65)",
      cardBorder: "rgba(136, 192, 208, 0.35)",
      inputBg: "rgba(76, 86, 106, 0.5)",
      promptColor: "#88c0d0",
      cursorColor: "#8fbcbb",
    },
  },
  gruvbox: {
    name: "Gruvbox",
    description: "Warm retro palette with earthy vintage tones",
    colors: {
      primary: "#fe8019", // bright orange
      secondary: "#fabd2f", // bright yellow
      accent: "#b8bb26", // bright green
      background: "#282828", // lighter dark background
      text: "#ebdbb2", // light beige
      border: "#d65d0e",
      glow: "#fe8019",
      success: "#b8bb26",
      warning: "#d79921",
      error: "#cc241d",
    },
    effects: {
      cardBg: "rgba(40, 40, 40, 0.65)",
      cardBorder: "rgba(254, 128, 25, 0.35)",
      inputBg: "rgba(60, 56, 54, 0.5)",
      promptColor: "#fe8019",
      cursorColor: "#fabd2f",
    },
  },
  monokai: {
    name: "Monokai",
    description: "Vibrant classic with balanced neon colors",
    colors: {
      primary: "#66d9ef", // bright cyan
      secondary: "#a6e22e", // lime green
      accent: "#f92672", // hot pink
      background: "#2d2e27", // lighter charcoal
      text: "#f8f8f2", // off-white
      border: "#49483e",
      glow: "#66d9ef",
      success: "#a6e22e",
      warning: "#fd971f",
      error: "#f92672",
    },
    effects: {
      cardBg: "rgba(45, 46, 39, 0.65)",
      cardBorder: "rgba(102, 217, 239, 0.35)",
      inputBg: "rgba(73, 72, 62, 0.5)",
      promptColor: "#66d9ef",
      cursorColor: "#a6e22e",
    },
  },
};
