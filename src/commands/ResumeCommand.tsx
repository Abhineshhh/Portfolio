import { RESUME_LINKS, QUICK_STATS } from '@/config/data';
import type { Theme } from '@/types/theme';
import Icon from '@/components/Icon';
import { FileText, Clipboard, Zap } from 'lucide-react';

export default function ResumeCommand({ theme }: { theme?: Theme }) {
  return (
    <div className="space-y-4 animate-fadeIn">
      <p className="text-cyan-400 font-semibold text-lg flex items-center gap-2">
        <FileText size={24} />
        Resume & Professional Links
      </p>
      <div className="ml-4 space-y-4">
        <div className="p-6 bg-linear-to-br from-blue-900/20 to-purple-900/20 border-2 border-blue-500/30 rounded-xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-16 h-16 rounded-full bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/50 animate-pulse-slow">
              <Clipboard size={32} className="text-white" />
            </div>
            <div>
              <p className="text-yellow-400 font-bold text-lg">Quick Access</p>
              <p className="text-gray-400 text-sm">Professional profiles and portfolio</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {RESUME_LINKS.map((link, idx) => (
              <a
                key={link.name}
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 rounded-lg bg-gray-800/60 border border-${link.color}-500/30`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <Icon name={link.icon} size={24} />
                  <p className={`text-${link.color}-400 font-semibold`}>
                    {link.name}
                  </p>
                </div>
                <p className="text-gray-400 text-xs">
                  {link.desc}
                </p>
              </a>
            ))}
          </div>
        </div>

        <div className="p-5 bg-linear-to-r from-gray-800/40 to-gray-900/40 border border-yellow-500/30 rounded-lg">
          <div className="flex items-start gap-3">
            <Zap size={32} className="text-yellow-400" />
            <div>
              <p className="text-yellow-400 font-semibold mb-2">Quick Stats</p>
              <div className="grid grid-cols-3 gap-4 text-center">
                {QUICK_STATS.map((stat) => (
                  <div key={stat.label}>
                    <p className={`text-${stat.color}-400 text-2xl font-bold`}>{stat.value}</p>
                    <p className="text-gray-400 text-xs">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 bg-gray-800/30 border border-gray-700 rounded-lg text-center">
          <p className="text-gray-400 text-sm">
            📥 <span className="text-gray-500">PDF resume available upon request via email</span>
          </p>
        </div>
      </div>
    </div>
  );
}
