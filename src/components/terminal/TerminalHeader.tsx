export default function TerminalHeader() {
  return (
    <>
      <h2 id="terminal-title" className="sr-only">Interactive terminal</h2>
      <div className="bg-linear-to-r from-gray-800 via-gray-900 to-gray-800 px-2 sm:px-4 py-2 sm:py-3 flex items-center gap-2 border-b-2 border-cyan-500/20 relative">
        <div className="flex gap-1 sm:gap-2">
          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500 animate-pulse-slow shadow-lg shadow-red-500/50"></div>
          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500 animate-pulse-slow shadow-lg shadow-yellow-500/50" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500 animate-pulse-slow shadow-lg shadow-green-500/50" style={{ animationDelay: '0.4s' }}></div>
        </div>
        <div className="text-cyan-400 text-[0.65rem] sm:text-sm ml-2 sm:ml-4 font-mono tracking-wider hidden sm:block">
          <span className="text-green-400">abhinesh@portfolio</span>
          <span className="text-gray-500">:</span>
          <span className="text-blue-400">~</span>
          <span className="text-gray-500">$</span>
          <span className="animate-pulse ml-2 text-yellow-400">⚡ ONLINE</span>
        </div>
        <div className="text-cyan-400 text-[0.6rem] ml-2 font-mono block sm:hidden">
          <span className="text-yellow-400">⚡ ONLINE</span>
        </div>
        <div className="ml-auto hidden md:flex gap-2 text-gray-500 text-xs">
          <span className="px-2 py-1 bg-gray-700/50 rounded border border-gray-600">TAB</span>
          <span className="px-2 py-1 bg-gray-700/50 rounded border border-gray-600">ESC</span>
          <span className="px-2 py-1 bg-gray-700/50 rounded border border-gray-600">CTRL+C</span>
        </div>
      </div>
      <div className="bg-gray-900/50 px-2 sm:px-4 py-1.5 sm:py-2 border-b border-cyan-500/10">
        <p className="text-[0.65rem] sm:text-xs text-cyan-400/70 font-mono">
          💡 <span className="text-yellow-400">Tip:</span> <span className="hidden sm:inline">Use <kbd className="px-1.5 py-0.5 bg-gray-700/50 rounded text-cyan-300 border border-cyan-500/30">Tab</kbd> for command completion (e.g., type <span className="text-green-400">"proj"</span> and press Tab → <span className="text-green-400">"projects"</span>)</span><span className="sm:hidden">Press Tab for auto-complete</span>
        </p>
      </div>
    </>
  );
}
