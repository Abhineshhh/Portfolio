import { CommandItem } from '@/types/terminal';
import Icon from '@/components/Icon';
import type { Theme } from '@/types/theme';

interface CommandSuggestionsProps {
  suggestions: CommandItem[];
  selectedIndex: number;
  onSelect: (command: string) => void;
  theme: Theme;
}

export default function CommandSuggestions({ 
  suggestions, 
  selectedIndex, 
  onSelect,
  theme 
}: CommandSuggestionsProps) {
  if (suggestions.length === 0) return null;

  return (
    <div 
      className="absolute bottom-full left-0 mb-2 w-full max-w-md rounded-lg overflow-hidden"
      style={{
        backgroundColor: `${theme.colors.background}f5`,
        border: `1px solid ${theme.colors.border}60`,
        backdropFilter: 'blur(10px)',
        boxShadow: `0 -4px 20px ${theme.colors.glow}20`
      }}
    >
      <div 
        className="px-3 py-2 text-xs font-semibold border-b"
        style={{ 
          color: theme.colors.accent,
          borderColor: `${theme.colors.border}40`
        }}
      >
        Suggestions ({suggestions.length})
      </div>
      <div className="max-h-60 overflow-y-auto">
        {suggestions.map((suggestion, index) => (
          <div
            key={suggestion.cmd}
            onClick={() => onSelect(suggestion.cmd)}
            className="px-4 py-2.5 cursor-pointer flex items-center gap-3"
            style={{
              backgroundColor: index === selectedIndex 
                ? `${theme.colors.primary}20` 
                : 'transparent',
              borderLeft: index === selectedIndex 
                ? `3px solid ${theme.colors.primary}` 
                : '3px solid transparent',
            }}
          >
            <Icon name={suggestion.icon} size={18} className="shrink-0" />
            <div className="flex-1 min-w-0">
              <div 
                className="font-mono font-semibold text-sm"
                style={{ color: theme.colors.primary }}
              >
                {suggestion.cmd}
              </div>
              <div 
                className="text-xs opacity-70 truncate"
                style={{ color: theme.colors.text }}
              >
                {suggestion.desc}
              </div>
            </div>
            {index === selectedIndex && (
              <div 
                className="text-xs px-2 py-0.5 rounded-full"
                style={{ 
                  backgroundColor: `${theme.colors.primary}30`,
                  color: theme.colors.primary 
                }}
              >
                ↵
              </div>
            )}
          </div>
        ))}
      </div>
      <div 
        className="px-3 py-1.5 text-xs border-t flex items-center justify-between"
        style={{ 
          color: `${theme.colors.text}70`,
          borderColor: `${theme.colors.border}40`,
          backgroundColor: `${theme.colors.background}80`
        }}
      >
        <span>↑↓ Navigate</span>
        <span>↵ Select</span>
        <span>Esc Close</span>
      </div>
    </div>
  );
}
