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
        <div className="w-1.5 h-10 bg-linear-to-b from-cyan-400 via-purple-500 to-pink-500 rounded-full shadow-lg shadow-cyan-500/50 animate-pulse"></div>
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold bg-linear-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradientShift flex items-center gap-2">
            <Palette size={32} className="text-cyan-400" /> Terminal Themes
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">{themeEntries.length} carefully crafted color schemes</p>
        </div>
      </div>

      <div className="text-gray-300 mb-6 p-4 rounded-lg bg-linear-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div>
            <p className="text-sm">
              Active: <span className="text-cyan-400 font-bold">{themes[currentTheme]?.name || "Cyberpunk"}</span>
            </p>
            <p className="text-xs text-gray-500 mt-1">
              <span className="hidden sm:inline">Type <kbd className="px-1.5 py-0.5 bg-gray-700/70 rounded text-cyan-300 border border-cyan-500/30 text-xs">theme &lt;name&gt;</kbd> or click below</span>
              <span className="sm:hidden">Tap a theme to switch</span>
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <span className="hidden sm:inline">Saved automatically</span>
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {themeEntries.map(([key, theme], index) => {
          const isActive = key === currentTheme;
          return (
            <div
              key={key}
              className={`group relative overflow-hidden rounded-xl border-2 cursor-pointer transition-all duration-300
                ${isActive 
                  ? 'border-cyan-400 shadow-lg shadow-cyan-500/30 scale-[1.02]' 
                  : 'border-gray-700/50 hover:border-gray-600 hover:shadow-lg hover:shadow-purple-500/20 hover:scale-[1.01]'
                }
                bg-linear-to-br from-gray-900/70 to-gray-800/50 backdrop-blur-sm animate-slideIn`}
              style={{ animationDelay: `${index * 0.05}s` }}
              onClick={() => onThemeChange(key)}
            >
              {/* Theme preview gradient */}
              <div 
                className={`absolute inset-0 transition-opacity duration-300 ${isActive ? 'opacity-15' : 'opacity-10 group-hover:opacity-15'}`}
                style={{
                  background: `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary}, ${theme.colors.accent})`
                }}
              />
              
              {/* Glow effect on hover */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                style={{
                  background: `radial-gradient(circle at 50% 50%, ${theme.colors.primary}20, transparent 70%)`
                }}
              />

              <div className="relative p-5 space-y-3">
                {/* Header */}
                <div className="flex items-center justify-between gap-2">
                  <h3 
                    className="text-lg sm:text-xl font-bold flex items-center gap-2 transition-all group-hover:scale-105"
                    style={{ color: theme.colors.primary }}
                  >
                    {theme.name}
                  </h3>
                  {isActive && (
                    <span className="text-[0.65rem] bg-cyan-500/20 px-2 py-1 rounded-full border border-cyan-500/50 animate-pulse flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                      Active
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-gray-400 line-clamp-2">
                  {theme.description}
                </p>

                {/* Color preview with labels */}
                <div className="flex gap-2 pt-2">
                  <div className="flex flex-col items-center gap-1">
                    <div 
                      className="w-9 h-9 rounded-lg border-2 border-white/20 transition-transform group-hover:scale-110"
                      style={{ 
                        backgroundColor: theme.colors.primary,
                        boxShadow: `0 4px 12px ${theme.colors.primary}50`
                      }}
                      title="Primary"
                    />
                    <span className="text-[0.6rem] text-gray-500">Primary</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <div 
                      className="w-9 h-9 rounded-lg border-2 border-white/20 transition-transform group-hover:scale-110"
                      style={{ 
                        backgroundColor: theme.colors.secondary,
                        boxShadow: `0 4px 12px ${theme.colors.secondary}50`
                      }}
                      title="Secondary"
                    />
                    <span className="text-[0.6rem] text-gray-500">Secondary</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <div 
                      className="w-9 h-9 rounded-lg border-2 border-white/20 transition-transform group-hover:scale-110"
                      style={{ 
                        backgroundColor: theme.colors.accent,
                        boxShadow: `0 4px 12px ${theme.colors.accent}50`
                      }}
                      title="Accent"
                    />
                    <span className="text-[0.6rem] text-gray-500">Accent</span>
                  </div>
                </div>

                {/* Command hint */}
                <div className="pt-2 border-t border-gray-700/50">
                  <code className="text-[0.65rem] text-gray-500 bg-black/30 px-2 py-1 rounded">
                    theme {key}
                  </code>
                </div>

                {/* Click instruction */}
                <div className={`text-xs font-medium transition-colors ${isActive ? 'text-cyan-400' : 'text-gray-500 group-hover:text-gray-400'}`}>
                  {isActive ? '✓ Currently active' : '→ Click to activate'}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 p-5 bg-linear-to-r from-gray-900/70 via-gray-800/50 to-gray-900/70 border border-cyan-500/20 rounded-xl">
        <div className="flex items-start gap-3">
          <span className="text-2xl">💡</span>
          <div className="space-y-1">
            <p className="text-sm font-semibold text-cyan-400">Pro Tips</p>
            <ul className="text-xs sm:text-sm text-gray-400 space-y-1 list-disc list-inside">
              <li>Your theme preference is saved automatically</li>
              <li>Try different themes to find your perfect vibe</li>
              <li>Each theme is optimized for readability</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
