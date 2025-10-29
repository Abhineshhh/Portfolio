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
      primary: "#00e5ff", // refined cyan
      secondary: "#ff00ff", // magenta
      accent: "#00c4a7", // teal accent
      background: "#0a0e27",
      text: "#e0e0e0",
      border: "#00ffff",
      glow: "#00ffff",
      success: "#00ff00",
      warning: "#ffff00",
      error: "#ff0000",
    },
    effects: {
      cardBg: "rgba(10, 14, 39, 0.6)",
      cardBorder: "rgba(0, 229, 255, 0.18)",
      inputBg: "rgba(0, 0, 0, 0.32)",
      promptColor: "#00e5ff",
      cursorColor: "#00e5ff",
    },
  },
  matrix: {
    name: "Matrix",
    description: "Classic green-on-black hacker aesthetic",
    colors: {
      primary: "#00ff41", // matrix green
      secondary: "#008f11",
      accent: "#00ff41",
      background: "#000000",
      text: "#00ff41",
      border: "#00ff41",
      glow: "#00ff41",
      success: "#00ff41",
      warning: "#ffaa00",
      error: "#ff0000",
    },
    effects: {
      cardBg: "rgba(0, 0, 0, 0.8)",
      cardBorder: "rgba(0, 255, 65, 0.3)",
      inputBg: "rgba(0, 20, 0, 0.5)",
      promptColor: "#00ff41",
      cursorColor: "#00ff41",
    },
  },
  ocean: {
    name: "Ocean",
    description: "Calming deep blue waves and aqua accents",
    colors: {
      primary: "#00d4ff", // aqua
      secondary: "#0080ff",
      accent: "#40e0d0", // turquoise
      background: "#001a33",
      text: "#b3e5fc",
      border: "#00d4ff",
      glow: "#00d4ff",
      success: "#00e676",
      warning: "#ffab00",
      error: "#ff1744",
    },
    effects: {
      cardBg: "rgba(0, 26, 51, 0.7)",
      cardBorder: "rgba(0, 212, 255, 0.3)",
      inputBg: "rgba(0, 30, 60, 0.4)",
      promptColor: "#00d4ff",
      cursorColor: "#40e0d0",
    },
  },
  sunset: {
    name: "Sunset",
    description: "Warm orange and purple twilight colors",
    colors: {
      primary: "#ff6b35", // orange
      secondary: "#9b59b6", // purple
      accent: "#f39c12", // golden
      background: "#1a0a2e",
      text: "#ffeaa7",
      border: "#ff6b35",
      glow: "#ff6b35",
      success: "#00d2d3",
      warning: "#f39c12",
      error: "#e74c3c",
    },
    effects: {
      cardBg: "rgba(26, 10, 46, 0.7)",
      cardBorder: "rgba(255, 107, 53, 0.3)",
      inputBg: "rgba(40, 20, 60, 0.4)",
      promptColor: "#ff6b35",
      cursorColor: "#9b59b6",
    },
  },
  dracula: {
    name: "Dracula",
    description: "Popular dark theme with pink and purple",
    colors: {
      primary: "#ff79c6", // pink
      secondary: "#bd93f9", // purple
      accent: "#50fa7b", // green
      background: "#282a36",
      text: "#f8f8f2",
      border: "#bd93f9",
      glow: "#ff79c6",
      success: "#50fa7b",
      warning: "#f1fa8c",
      error: "#ff5555",
    },
    effects: {
      cardBg: "rgba(40, 42, 54, 0.8)",
      cardBorder: "rgba(189, 147, 249, 0.3)",
      inputBg: "rgba(68, 71, 90, 0.5)",
      promptColor: "#ff79c6",
      cursorColor: "#50fa7b",
    },
  },
};
