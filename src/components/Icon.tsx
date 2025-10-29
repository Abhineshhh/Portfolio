import { icons, IconName } from '@/config/icons';
import { LucideProps } from 'lucide-react';

interface IconProps extends Omit<LucideProps, 'ref'> {
  name: string;
  className?: string;
}

export default function Icon({ name, className = '', ...props }: IconProps) {
  const IconComponent = icons[name as IconName];
  
  if (!IconComponent) {
    // Only log missing icons in development to avoid noisy production logs
    if (process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line no-console
      console.warn(`Icon "${name}" not found`);
    }
    return null;
  }
  
  return <IconComponent className={className} {...props} />;
}
