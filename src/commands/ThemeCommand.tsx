import { themes } from "@/types/theme";
import { Palette } from "lucide-react";

interface ThemeCommandProps {
  currentTheme: string;
  onThemeChange: (theme: string) => void;
}

export default function ThemeCommand({ currentTheme, onThemeChange }: ThemeCommandProps) {
  const themeEntries = Object.entries(themes);

  return (
    <div className="space-y-4 animate-fadeIn">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-1 h-8 bg-linear-to-b from-cyan-400 to-purple-500 rounded-full shadow-lg shadow-cyan-500/50 animate-pulse"></div>
        <h2 className="text-2xl font-bold bg-linear-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradientShift flex items-center gap-2">
          <Palette size={28} /> Terminal Themes
        </h2>
      </div>

      <div className="text-gray-300 mb-4 sm:mb-6 pl-3 sm:pl-4 border-l-2 border-cyan-500/30">
        <p className="text-xs sm:text-sm">
          Current theme: <span className="text-cyan-400 font-bold animate-pulse">{themes[currentTheme]?.name || "Cyberpunk"}</span>
        </p>
        <p className="text-[0.65rem] sm:text-xs text-gray-500 mt-1">
          <span className="hidden sm:inline">Use <kbd className="px-2 py-0.5 bg-gray-700/50 rounded text-cyan-300 border border-cyan-500/30">theme &lt;name&gt;</kbd> to switch themes</span>
          <span className="sm:hidden">Click a theme below to switch</span>
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        {themeEntries.map(([key, theme], index) => {
          const isActive = key === currentTheme;
          return (
            <div
              key={key}
              className={`relative overflow-hidden rounded-lg border-2 cursor-pointer
                ${isActive 
                  ? 'border-cyan-400' 
                  : 'border-gray-700'
                }
                bg-linear-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm animate-slideIn`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => onThemeChange(key)}
            >
              {/* Theme preview gradient */}
              <div 
                className="absolute inset-0 opacity-10"
                style={{
                  background: `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary}, ${theme.colors.accent})`
                }}
              />

              <div className="relative p-4 space-y-3">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <h3 
                    className="text-lg font-bold flex items-center gap-2"
                    style={{ color: theme.colors.primary }}
                  >
                    {theme.name}
                    {isActive && <span className="text-xs bg-cyan-500/20 px-2 py-1 rounded-full border border-cyan-500/50 animate-pulse">Active</span>}
                  </h3>
                  <code className="text-xs text-gray-500 bg-black/30 px-2 py-1 rounded">
                    {key}
                  </code>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-400">
                  {theme.description}
                </p>

                {/* Color preview */}
                <div className="flex gap-2 pt-2">
                  <div 
                    className="w-8 h-8 rounded-full border-2 border-white/20"
                    style={{ 
                      backgroundColor: theme.colors.primary,
                      boxShadow: `0 0 10px ${theme.colors.primary}50`
                    }}
                    title="Primary"
                  />
                  <div 
                    className="w-8 h-8 rounded-full border-2 border-white/20"
                    style={{ 
                      backgroundColor: theme.colors.secondary,
                      boxShadow: `0 0 10px ${theme.colors.secondary}50`
                    }}
                    title="Secondary"
                  />
                  <div 
                    className="w-8 h-8 rounded-full border-2 border-white/20"
                    style={{ 
                      backgroundColor: theme.colors.accent,
                      boxShadow: `0 0 10px ${theme.colors.accent}50`
                    }}
                    title="Accent"
                  />
                  <div 
                    className="w-8 h-8 rounded-full border-2 border-white/20"
                    style={{ 
                      backgroundColor: theme.colors.background,
                      boxShadow: `0 0 10px ${theme.colors.border}50`
                    }}
                    title="Background"
                  />
                </div>

                {/* Click instruction */}
                <div className={`text-xs mt-2 ${isActive ? 'text-cyan-400' : 'text-gray-500'}`}>
                  {isActive ? '✓ Currently active' : '→ Click to activate'}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 p-4 bg-gray-900/50 border border-cyan-500/20 rounded-lg">
        <p className="text-sm text-gray-400">
          <span className="text-cyan-400 font-bold">💡 Pro Tip:</span> Your theme preference is saved and will persist across sessions!
        </p>
      </div>
    </div>
  );
}
