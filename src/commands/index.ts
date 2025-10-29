import HelpCommand from './HelpCommand';
import AboutCommand from './AboutCommand';
import SkillsCommand from './SkillsCommand';
import ExperienceCommand from './ExperienceCommand';
import ProjectsCommand from './ProjectsCommand';
import ContactCommand from './ContactCommand';
import ThemeCommand from './ThemeCommand';

import type { Commands } from '@/types/terminal';

export const commands: Commands = {
  help: HelpCommand,
  about: AboutCommand,
  skills: SkillsCommand,
  experience: ExperienceCommand,
  projects: ProjectsCommand,
  contact: ContactCommand,
  theme: ThemeCommand,
};
