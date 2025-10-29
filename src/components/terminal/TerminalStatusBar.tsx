interface TerminalStatusBarProps {
  outputLines: number;
  commandCount: number;
}

export default function TerminalStatusBar({ outputLines, commandCount }: TerminalStatusBarProps) {
  return (
    <div className="bg-gray-800/80 backdrop-blur-sm px-4 py-1 text-xs text-gray-400 flex justify-between border-t border-cyan-500/20 shrink-0">
      <span className="flex items-center gap-2">
        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
        Terminal Ready
      </span>
      <span>Lines: {outputLines} | Commands: {commandCount}</span>
      <span className="text-cyan-400">Press ↑/↓ for history</span>
    </div>
  );
}
