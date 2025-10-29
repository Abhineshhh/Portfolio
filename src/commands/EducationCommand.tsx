import { EDUCATION } from '@/config/data';
import type { Theme } from '@/types/theme';
import { GraduationCap } from 'lucide-react';

export default function EducationCommand({ theme }: { theme: Theme }) {
  return (
    <div className="space-y-4 animate-fadeIn">
      <p className="text-cyan-400 font-semibold text-lg flex items-center gap-2">
        <GraduationCap size={24} />
        Education
      </p>
      <div className="ml-4">
        <div className="relative p-6 rounded-xl bg-linear-to-br from-cyan-900/20 via-blue-900/20 to-purple-900/20 border-2 border-cyan-500/30">
          <div className="relative z-10">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-yellow-400 font-bold text-xl mb-2">{EDUCATION.institution}</p>
                <p className="text-cyan-400 font-semibold">{EDUCATION.degree}</p>
              </div>
              <div className="text-right">
                <div className="px-4 py-2 bg-green-500/20 border-2 border-green-500/50 rounded-lg">
                  <p className="text-green-400 font-bold text-2xl">{EDUCATION.cgpa}</p>
                  <p className="text-gray-400 text-xs">CGPA / {EDUCATION.maxCgpa}</p>
                </div>
              </div>
            </div>
            
            <div className="mb-4">
              <p className="text-gray-400 font-semibold mb-2 flex items-center gap-2">
                <span>📚</span>
                Core Subjects:
              </p>
              <div className="flex flex-wrap gap-2">
                {EDUCATION.courses.map((course, idx) => (
                  <span 
                    key={course}
                    className="px-3 py-1 bg-blue-500/20 border border-blue-500/40 rounded-full text-blue-300 text-sm"
                    style={{ animationDelay: `${idx * 0.05}s` }}
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-gray-700">
              <div className="flex items-center gap-2 text-sm">
                <span className="text-xl">📖</span>
                <div>
                  <p className="text-gray-400">Focus Area</p>
                  <p className="text-gray-300 font-semibold">{EDUCATION.focusArea}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-xl">🏅</span>
                <div>
                  <p className="text-gray-400">Achievement</p>
                  <p className="text-gray-300 font-semibold">{EDUCATION.achievement}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
