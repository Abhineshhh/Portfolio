import Icon from '@/components/Icon';
import type { Theme } from '@/types/theme';

interface MobileCommandButtonsProps {
  onCommandClick: (command: string) => void;
  theme: Theme;
}

const QUICK_COMMANDS = [
  { cmd: 'help', icon: 'help', label: 'Help' },
  { cmd: 'about', icon: 'about', label: 'About' },
  { cmd: 'skills', icon: 'skills', label: 'Skills' },
  { cmd: 'projects', icon: 'projects', label: 'Projects' },
  { cmd: 'experience', icon: 'experience', label: 'Work' },
  { cmd: 'contact', icon: 'contact', label: 'Contact' },
  { cmd: 'theme', icon: 'theme', label: 'Theme' },
  { cmd: 'clear', icon: 'clear', label: 'Clear' },
];

export default function MobileCommandButtons({ onCommandClick, theme }: MobileCommandButtonsProps) {
  return (
    <div className="md:hidden border-t shrink-0" style={{ borderColor: `${theme.colors.border}40` }}>
      <div className="p-2 overflow-x-auto">
        <div className="flex gap-2 min-w-max">
          {QUICK_COMMANDS.map((cmd) => (
            <button
              key={cmd.cmd}
              onClick={() => onCommandClick(cmd.cmd)}
              className="px-2 py-1 rounded-lg flex flex-col items-center gap-1 min-w-16 active:scale-95"
              style={{
                backgroundColor: `${theme.colors.background}80`,
                border: `1px solid ${theme.colors.border}40`,
                color: theme.colors.text,
              }}
            >
              <div className="w-11 h-11 flex items-center justify-center rounded-md">
                <Icon name={cmd.icon} size={18} />
              </div>
              <span className="text-[10px] font-semibold" style={{ color: theme.colors.accent }}>
                {cmd.label}
              </span>
            </button>
          ))}
        </div>
      </div>
      <div 
        className="px-3 py-1.5 text-center text-[10px] border-t"
        style={{ 
          color: `${theme.colors.text}60`,
          borderColor: `${theme.colors.border}30`,
          backgroundColor: `${theme.colors.background}40`
        }}
      >
        Tap a command • Swipe ↑↓ for history
      </div>
    </div>
  );
}
