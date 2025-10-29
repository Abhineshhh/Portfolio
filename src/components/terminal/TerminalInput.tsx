import type { Theme } from '@/types/theme';

interface TerminalInputProps {
  input: string;
  showCursor: boolean;
  inputRef: React.RefObject<HTMLInputElement | null>;
  onInputChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
  theme: Theme;
}

export default function TerminalInput({ 
  input, 
  showCursor, 
  inputRef, 
  onInputChange, 
  onSubmit, 
  onKeyDown,
  theme
}: TerminalInputProps) {
  return (
    <form onSubmit={onSubmit} className="flex items-center mt-2 relative">
      <span className="mr-2 animate-pulse" style={{ color: theme.colors.primary }}>➜</span>
      <span className="mr-2" style={{ color: theme.colors.success }}>~</span>
      <span className="mr-2 opacity-50" style={{ color: theme.colors.text }}>$</span>
      <span style={{ color: theme.colors.text }}>{input}</span>
      {showCursor && <span className="animate-blink ml-0.5" style={{ color: theme.effects.cursorColor }}>▎</span>}
      <input
        ref={inputRef}
        type="text"
        value={input}
        onChange={(e) => onInputChange(e.target.value)}
        onKeyDown={onKeyDown}
        className="absolute left-0 top-0 w-full h-full opacity-0 terminal-input"
        style={{ 
          color: theme.colors.text,
          caretColor: 'transparent',
          border: 'none',
          boxShadow: 'none',
          background: 'transparent'
        }}
        autoFocus
        spellCheck={false}
      />
    </form>
  );
}
