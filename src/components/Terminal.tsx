'use client';

import { useState, useEffect, useRef } from 'react';
import { commands } from '@/lib/commands';
import type { OutputLine, CommandItem } from '@/types/terminal';
import { themes } from '@/types/theme';
import { COMMAND_LIST } from '@/config/data';
import Icon from '@/components/Icon';
import { useSwipe } from '@/hooks/useSwipe';
import TerminalHeader from './terminal/TerminalHeader';
import TerminalStatusBar from './terminal/TerminalStatusBar';
import TerminalInput from './terminal/TerminalInput';
import TerminalOutput from './terminal/TerminalOutput';
import MobileCommandButtons from './terminal/MobileCommandButtons';

export default function Terminal() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<OutputLine[]>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [typingText, setTypingText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [currentTheme, setCurrentTheme] = useState('cyberpunk');
  const [welcomeBanner, setWelcomeBanner] = useState<OutputLine | null>(null);
  const [suggestions, setSuggestions] = useState<CommandItem[]>([]);
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  // Load theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('terminal-theme');
    if (savedTheme && themes[savedTheme]) {
      setCurrentTheme(savedTheme);
    }
  }, []);

  // Save theme to localStorage
  const handleThemeChange = (themeName: string) => {
    if (themes[themeName]) {
      setCurrentTheme(themeName);
      localStorage.setItem('terminal-theme', themeName);
      
      // Add success message
      setOutput(prev => [...prev, {
        type: 'result',
        content: (
          <div className="text-green-400 animate-fadeIn">
            ✓ Theme changed to <span className="font-bold">{themes[themeName].name}</span>
          </div>
        ),
        id: `theme-${Date.now()}`
      }]);
    }
  };

  // Get current theme object
  const theme = themes[currentTheme];

  useEffect(() => {
    // Typing animation for welcome message
    const welcomeText = "Welcome to my terminal portfolio!";
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= welcomeText.length) {
        setTypingText(welcomeText.slice(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);

    // Show welcome message on mount
    const bannerTimeout = setTimeout(() => {
      const banner: OutputLine = {
        type: 'result',
        id: 'welcome',
        content: (
          <div className="mb-4 animate-fadeIn">
            {/* Profile Card */}
            <div 
              className="p-4 sm:p-6 rounded-lg mb-4"
              style={{
                background: `linear-gradient(135deg, ${theme.effects.cardBg}, ${theme.colors.background}80)`,
                border: `1px solid ${theme.colors.border}40`,
              }}
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                {/* Name and Role */}
                <div className="flex-1">
                  <h1 
                    className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1"
                    style={{ color: theme.colors.primary }}
                  >
                    Abhinesh Jha
                  </h1>
                  <p 
                    className="text-sm sm:text-base md:text-lg"
                    style={{ color: theme.colors.accent }}
                  >
                    Backend Developer
                  </p>
                </div>

                {/* Quick Links */}
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com/Abhineshhh"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub — opens in new tab"
                    className="w-10 h-10 rounded-lg flex items-center justify-center hover:scale-105 transition-transform"
                    style={{
                      backgroundColor: `${theme.colors.background}80`,
                      border: `1px solid ${theme.colors.border}40`,
                      color: theme.colors.text,
                    }}
                    title="GitHub"
                  >
                    <Icon name="github" size={18} />
                  </a>

                  <a
                    href="https://resume.abhineshhh.me"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Resume — opens in new tab"
                    className="px-4 py-2 rounded-full flex items-center gap-2 text-sm font-semibold hover:scale-105 transition-all"
                    style={{
                      backgroundColor: theme.colors.primary,
                      border: `1px solid ${theme.colors.primary}55`,
                      color: theme.colors.background,
                      boxShadow: `0 6px 20px ${theme.colors.primary}22`,
                    }}
                    title="Resume"
                  >
                    <Icon name="resume" size={16} />
                    <span className="hidden sm:inline">Resume</span>
                  </a>
                </div>
              </div>
            </div>

            <p className="text-gray-300 mb-2 typing-text">{typingText}</p>
            <p className="text-gray-400 text-sm">Type <span className="text-cyan-400 font-semibold">'help'</span> to see available commands.</p>
          </div>
        ),
      };
      setWelcomeBanner(banner);
      setOutput([banner]);
    }, 100);

    return () => {
      clearInterval(typingInterval);
      clearTimeout(bannerTimeout);
    };
  }, []);

  useEffect(() => {
    // Smooth scroll to bottom when output changes
    if (terminalRef.current) {
      terminalRef.current.scrollTo({
        top: terminalRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [output]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  // Update suggestions as user types
  useEffect(() => {
    const trimmedInput = input.trim().toLowerCase();
    
    if (!trimmedInput) {
      setSuggestions([]);
      setShowSuggestions(false);
      setSelectedSuggestionIndex(0);
      return;
    }

    // Use COMMAND_LIST directly (it already includes 'theme' and 'clear')
    const matchedCommands = COMMAND_LIST.filter(cmd => 
      cmd.cmd.toLowerCase().startsWith(trimmedInput)
    );

    setSuggestions(matchedCommands);
    setShowSuggestions(matchedCommands.length > 0 && matchedCommands[0].cmd !== trimmedInput);
    setSelectedSuggestionIndex(0);
  }, [input]);

  // Swipe gestures for mobile (swipe up = previous command in history)
  useSwipe({
    onSwipeUp: () => {
      if (commandHistory.length > 0 && window.innerWidth < 768) {
        const newIndex = historyIndex === -1 
          ? commandHistory.length - 1 
          : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    },
    onSwipeDown: () => {
      if (historyIndex !== -1 && window.innerWidth < 768) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setInput('');
        } else {
          setHistoryIndex(newIndex);
          setInput(commandHistory[newIndex]);
        }
      }
    },
  });

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    
    if (!trimmedCmd) return;

    // Add command to history
    setCommandHistory(prev => [...prev, cmd]);
    setHistoryIndex(-1);

    // Add command to output with animation
    setOutput(prev => [...prev, { 
      type: 'command', 
      content: `$ ${cmd}`,
      id: `cmd-${Date.now()}`
    }]);

    // Execute command
    if (trimmedCmd === 'clear') {
      // Keep only the welcome banner
      setOutput(welcomeBanner ? [welcomeBanner] : []);
      return;
    }

    // Handle theme command with argument
    if (trimmedCmd.startsWith('theme')) {
      const args = trimmedCmd.split(' ');
      if (args.length === 1) {
        // Show theme selector
        const commandFunc = commands['theme'];
        if (commandFunc) {
          const result = commandFunc({ currentTheme, onThemeChange: handleThemeChange });
          setOutput(prev => [...prev, { 
            type: 'result', 
            content: result,
            id: `result-${Date.now()}`
          }]);
        }
      } else {
        // Direct theme change
        const themeName = args[1];
        if (themes[themeName]) {
          handleThemeChange(themeName);
        } else {
          setOutput(prev => [
            ...prev,
            {
              type: 'error',
              content: `Theme not found: ${themeName}. Available themes: ${Object.keys(themes).join(', ')}`,
              id: `error-${Date.now()}`
            },
          ]);
        }
      }
      return;
    }

    const commandFunc = commands[trimmedCmd];
    if (commandFunc) {
      const result = commandFunc({ theme });
      setOutput(prev => [...prev, { 
        type: 'result', 
        content: result,
        id: `result-${Date.now()}`
      }]);
    } else {
      setOutput(prev => [
        ...prev,
        {
          type: 'error',
          content: `Command not found: ${trimmedCmd}. Type 'help' for available commands.`,
          id: `error-${Date.now()}`
        },
      ]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(input);
    setInput('');
  };

  // Tab completion
  const handleTabCompletion = () => {
    if (!input.trim()) return;

    // Include all commands including 'clear'
    const availableCommands = [...Object.keys(commands), 'clear'];
    const matches = availableCommands.filter(cmd => 
      cmd.startsWith(input.toLowerCase().trim())
    );

    if (matches.length === 1) {
      setInput(matches[0]);
    } else if (matches.length > 1) {
      // Show all matches
      setOutput(prev => [...prev, {
        type: 'result',
        content: (
          <div className="text-cyan-400 text-sm">
            Possible completions: {matches.join(', ')}
          </div>
        ),
        id: `autocomplete-${Date.now()}`
      }]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    // Ignore if event is from a form input/textarea (let form fields work normally)
    const target = e.target as HTMLElement;
    if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
      // Only handle if it's the terminal input itself
      if (!target.classList.contains('terminal-input')) {
        return;
      }
    }

    // Handle suggestions navigation
    if (showSuggestions && suggestions.length > 0) {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedSuggestionIndex(prev => 
          prev < suggestions.length - 1 ? prev + 1 : 0
        );
        return;
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedSuggestionIndex(prev => 
          prev > 0 ? prev - 1 : suggestions.length - 1
        );
        return;
      } else if (e.key === 'Enter') {
        e.preventDefault();
        setInput(suggestions[selectedSuggestionIndex].cmd);
        setShowSuggestions(false);
        return;
      } else if (e.key === 'Escape') {
        e.preventDefault();
        setShowSuggestions(false);
        return;
      }
    }

    // Original key handling
    if (e.key === 'Tab') {
      e.preventDefault();
      handleTabCompletion();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 
          ? commandHistory.length - 1 
          : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setInput('');
        } else {
          setHistoryIndex(newIndex);
          setInput(commandHistory[newIndex]);
        }
      }
    }
  };

  const handleSuggestionSelect = (command: string) => {
    setInput(command);
    setShowSuggestions(false);
    inputRef.current?.focus();
  };

  const handleMobileCommandClick = (command: string) => {
    setInput('');
    handleCommand(command);
  };

  return (
    <div 
      role="region"
      aria-labelledby="terminal-title"
      className="w-full max-w-5xl mx-auto h-[calc(100vh-2rem)] sm:h-[600px] md:h-[700px] lg:h-[750px] backdrop-blur-sm overflow-hidden relative terminal-container flex flex-col"
      style={{
        backgroundColor: theme.effects.cardBg,
      }}
    >
      {/* Terminal Header */}
      <TerminalHeader />

      {/* Terminal Body */}
      <div
        ref={terminalRef}
        className="flex-1 p-3 sm:p-4 md:p-6 overflow-y-auto font-mono text-xs sm:text-sm terminal-body custom-scrollbar relative"
        onClick={(e) => {
          // If the click happened inside a form control or a clickable element (input/textarea/select/button/label/a),
          // do not steal focus — let the element receive it. This prevents the terminal input from stealing focus
          // when interacting with the contact form or other interactive UI.
          const target = e.target as HTMLElement | null;
          if (!target) return;
          const interactive = target.closest('input, textarea, select, button, label, a, form');
          if (!interactive) {
            inputRef.current?.focus();
          }
        }}
        style={{ color: theme.colors.text }}
      >
        <TerminalOutput output={output} theme={theme} />

        {/* Inline Command Suggestions */}
        {showSuggestions && suggestions.length > 0 && (
          <div className="mb-3 animate-fadeIn">
            <div className="flex flex-wrap gap-2">
              {suggestions.map((suggestion, index) => (
                <button
                  key={`suggestion-${suggestion.cmd}-${index}`}
                  onClick={() => handleSuggestionSelect(suggestion.cmd)}
                  className="px-3 py-1.5 rounded text-sm flex items-center gap-2"
                  style={{
                    backgroundColor: index === selectedSuggestionIndex 
                      ? `${theme.colors.primary}30` 
                      : `${theme.colors.background}80`,
                    border: `1px solid ${index === selectedSuggestionIndex ? theme.colors.primary : theme.colors.border}40`,
                    color: index === selectedSuggestionIndex ? theme.colors.primary : theme.colors.text,
                  }}
                >
                  <Icon name={suggestion.icon} size={16} />
                  <span className="font-semibold">{suggestion.cmd}</span>
                  <span className="opacity-60 text-xs hidden sm:inline">— {suggestion.desc}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input Line */}
        <TerminalInput
          input={input}
          showCursor={showCursor}
          inputRef={inputRef}
          onInputChange={setInput}
          onSubmit={handleSubmit}
          onKeyDown={handleKeyDown}
          theme={theme}
        />
      </div>

      {/* Mobile Command Buttons */}
      <MobileCommandButtons onCommandClick={handleMobileCommandClick} theme={theme} />

      {/* Status bar */}
      <TerminalStatusBar outputLines={output.length} commandCount={commandHistory.length} />
    </div>
  );
}
