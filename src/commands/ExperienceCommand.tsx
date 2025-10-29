import { EXPERIENCE } from '@/config/data';
import type { Theme } from '@/types/theme';
import Icon from '@/components/Icon';
import { Briefcase } from 'lucide-react';

export default function ExperienceCommand({ theme }: { theme?: Theme }) {
  return (
    <div className="space-y-4 animate-fadeIn">
      <p className="text-cyan-400 font-semibold text-lg flex items-center gap-2">
        <Briefcase size={24} />
        Volunteer & Open-Source Contributions
      </p>
      <div className="ml-4 space-y-4">
        {EXPERIENCE.map((exp, idx) => (
          <div 
            key={exp.org}
            className={`group relative p-5 rounded-xl bg-linear-to-br from-gray-800/60 to-gray-900/60 border-l-4 border-${exp.color}-500`}
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <Icon name={exp.icon} size={32} />
                <div>
                  <p className="text-yellow-400 font-bold text-lg">{exp.org}</p>
                  <p className="text-gray-400 text-sm">{exp.role}</p>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                <span className={`px-3 py-1 bg-${exp.color}-500/20 border border-${exp.color}-500/50 rounded-full text-${exp.color}-400 text-xs font-semibold`}>
                  {exp.badge}
                </span>
                <span className="text-gray-500 text-sm">{exp.year}</span>
              </div>
            </div>
            
            <p className="text-gray-300 text-sm leading-relaxed mb-3">
              {exp.desc}
            </p>
            
            <div className="flex flex-wrap items-center gap-3">
              {exp.url && (
                <a 
                  href={exp.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 text-${exp.color}-400 text-sm`}
                >
                  <span>View Repository</span>
                  <span>→</span>
                </a>
              )}
              
              {exp.linkedinPost && (
                <a 
                  href={exp.linkedinPost} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 text-blue-400 text-sm`}
                >
                  <span>💼</span>
                  <span>LinkedIn Post</span>
                  <span>→</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
