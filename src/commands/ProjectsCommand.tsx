import { PROJECTS } from '@/config/data';
import type { Theme } from '@/types/theme';
import Icon from '@/components/Icon';
import { Rocket } from 'lucide-react';

export default function ProjectsCommand({ theme }: { theme: Theme }) {
  return (
    <div className="space-y-4 animate-fadeIn">
      <p className="text-cyan-400 font-semibold text-lg flex items-center gap-2">
        <Rocket size={24} />
        Featured Projects
      </p>
      <div className="ml-4 space-y-4">
        {PROJECTS.map((project) => (
          <div 
            key={project.name}
            className={`project-card relative p-5 rounded-xl bg-linear-to-br from-gray-800/80 via-gray-900/80 to-black/80 border-2 border-${project.color}-500/30 overflow-hidden`}
          >
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Icon name={project.icon} size={32} />
                  <p className="text-yellow-400 font-bold text-xl">{project.name}</p>
                </div>
                <span className={`px-3 py-1 bg-${project.color}-500/20 border border-${project.color}-500/50 rounded-full text-${project.color}-400 text-xs font-semibold`}>
                  {project.badge}
                </span>
              </div>
              
              <p className="text-gray-300 mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="space-y-2 mb-4">
                <p className={`text-${project.color}-400 font-semibold text-sm flex items-center gap-2`}>
                  <span>✨</span> Key Features:
                </p>
                <ul className="space-y-1 text-sm text-gray-400">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className={`text-${project.color}-400 mt-1`}>▸</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span key={tech} className={`px-2 py-1 bg-${project.color}-500/20 border border-${project.color}-500/40 rounded text-${project.color}-300 text-xs font-mono`}>
                    {tech}
                  </span>
                ))}
              </div>
              
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-4 py-2 bg-${project.color}-500/20 border border-${project.color}-500/50 rounded-lg text-${project.color}-400`}
              >
                <span>🔗</span>
                View on GitHub
                <span>→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
