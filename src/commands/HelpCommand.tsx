import { COMMAND_LIST } from '@/config/data';
import type { Theme } from '@/types/theme';
import Icon from '@/components/Icon';
import { FileText } from 'lucide-react';

export default function HelpCommand({ theme }: { theme: Theme }) {
  return (
    <div className="space-y-3 animate-fadeIn">
      <p className="font-semibold text-lg flex items-center gap-2" style={{ color: theme.colors.primary }}>
        <FileText size={24} />
        Available Commands
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 ml-4">
        {COMMAND_LIST.map((item, idx) => (
          <div 
            key={item.cmd}
            className="command-card p-3 rounded-lg"
            style={{ 
              animationDelay: `${idx * 0.05}s`,
              background: `linear-gradient(135deg, ${theme.effects.cardBg}, ${theme.colors.background}80)`,
              border: `1px solid ${theme.colors.border}30`,
            }}
          >
            <Icon name={item.icon} size={20} className="inline mr-2" />
            <span className="font-mono font-bold" style={{ color: theme.colors.accent }}>{item.cmd}</span>
            <span className="opacity-50" style={{ color: theme.colors.text }}> - </span>
            <span className="text-sm" style={{ color: theme.colors.text }}>{item.desc}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
