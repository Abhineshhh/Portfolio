import type { OutputLine } from '@/types/terminal';
import type { Theme } from '@/types/theme';

interface TerminalOutputProps {
  output: OutputLine[];
  theme: Theme;
}

export default function TerminalOutput({ output, theme }: TerminalOutputProps) {
  return (
    <>
      {output.map((line, index) => (
        <div key={line.id} className="mb-3 animate-slideIn" style={{ animationDelay: `${index * 0.05}s` }}>
          {line.type === 'command' && (
            <div className="font-semibold flex items-center gap-2" style={{ color: theme.colors.success }}>
              <span style={{ color: theme.colors.primary }}>➜</span>
              {line.content}
            </div>
          )}
          {line.type === 'result' && (
            <div className="mt-2" style={{ color: theme.colors.text }}>{line.content}</div>
          )}
          {line.type === 'error' && (
            <div className="flex items-center gap-2 p-2 rounded animate-shake" style={{ 
              color: theme.colors.error,
              backgroundColor: theme.colors.error + '20',
              border: `1px solid ${theme.colors.error}30`
            }}>
              <span className="text-xl">⚠</span>
              {line.content}
            </div>
          )}
        </div>
      ))}
    </>
  );
}
