import { PERSONAL_INFO, STATS } from '@/config/data';
import type { Theme } from '@/types/theme';
import Icon from '@/components/Icon';
import { Globe } from 'lucide-react';

export default function AboutCommand({ theme }: { theme: Theme }) {
  return (
    <div className="space-y-4 animate-fadeIn">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-4">
        <div 
          className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-2xl sm:text-3xl font-bold text-white shadow-lg animate-pulse-slow"
          style={{ 
            background: `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary})`,
            boxShadow: `0 0 20px ${theme.colors.glow}50`
          }}
        >
          {PERSONAL_INFO.initials}
        </div>
        <div>
          <p className="font-semibold text-xl sm:text-2xl flex flex-wrap items-center gap-2" style={{ color: theme.colors.primary }}>
            {PERSONAL_INFO.name}
            <span 
              className="text-xs sm:text-sm px-2 py-1 rounded-full animate-pulse"
              style={{ 
                backgroundColor: `${theme.colors.success}20`,
                border: `1px solid ${theme.colors.success}50`,
                color: theme.colors.success
              }}
            >
              Available
            </span>
          </p>
          <p className="text-sm" style={{ color: theme.colors.accent }}>
            {PERSONAL_INFO.role} | {PERSONAL_INFO.specialization}
          </p>
        </div>
      </div>
      
      <div className="ml-4 space-y-3" style={{ color: theme.colors.text }}>
        <div 
          className="p-4 rounded-lg space-y-3"
          style={{
            background: `linear-gradient(90deg, ${theme.colors.primary}10, ${theme.colors.secondary}10)`,
            borderLeft: `4px solid ${theme.colors.primary}`
          }}
        >
          <p className="leading-relaxed">
            I'm a backend developer specializing in <span className="font-semibold" style={{ color: theme.colors.accent }}>Java</span> and <span className="font-semibold" style={{ color: theme.colors.accent }}>Spring Boot</span>, focused on building scalable, production-grade distributed systems. I design architectures that balance performance, reliability, and maintainability. My approach emphasizes writing clean, modular, and efficient code.
          </p>
          
          <p className="leading-relaxed">
            I have strong expertise in RESTful API design, database optimization, and security implementation. My background includes network programming, concurrency patterns, and asynchronous processing. I'm experienced in crafting services that perform efficiently under heavy workloads.
          </p>
          
          <p className="leading-relaxed">
            I'm passionate about clean architecture, performance tuning, and scalable design principles. I enjoy tackling complex backend challenges with elegant, data-driven solutions. My goal is to engineer systems that stay stable, efficient, and adaptable over time.
          </p>
        </div>
      </div>
    </div>
  );
}
