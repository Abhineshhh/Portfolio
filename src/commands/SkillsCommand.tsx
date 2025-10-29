import { SKILLS } from '@/config/data';
import type { Theme } from '@/types/theme';
import Icon from '@/components/Icon';
import { Zap } from 'lucide-react';

export default function SkillsCommand({ theme }: { theme: Theme }) {
  return (
    <div className="space-y-4 animate-fadeIn">
      <p className="font-semibold text-lg flex items-center gap-2" style={{ color: theme.colors.primary }}>
        <Zap size={24} />
        Technical Arsenal
      </p>
      <div className="ml-4 space-y-4">
        {SKILLS.map((skillSet, idx) => (
          <div 
            key={skillSet.category}
            className="skill-category"
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            <div className="flex items-center gap-2 mb-2">
              <Icon name={skillSet.icon} size={24} />
              <p className="font-semibold text-lg" style={{ color: theme.colors.accent }}>
                {skillSet.category}
              </p>
            </div>
            <div className="ml-8 flex flex-wrap gap-2">
              {skillSet.items.map((skill, skillIdx) => (
                <span 
                  key={skill}
                  className="skill-tag px-3 py-2 rounded-lg text-sm"
                  style={{ 
                    animationDelay: `${(idx * 0.1) + (skillIdx * 0.05)}s`,
                    backgroundColor: `${theme.colors.background}60`,
                    border: `1px solid ${theme.colors.border}30`,
                    color: theme.colors.text,
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div 
        className="mt-6 p-4 rounded-lg"
        style={{
          background: `linear-gradient(90deg, ${theme.colors.primary}10, ${theme.colors.secondary}10, ${theme.colors.accent}10)`,
          border: `1px solid ${theme.colors.border}30`
        }}
      >
        <p className="text-sm flex items-center gap-2" style={{ color: theme.colors.text }}>
          <span className="text-xl">💡</span>
          <span>Constantly learning and exploring cutting-edge backend technologies!</span>
        </p>
      </div>
    </div>
  );
}
