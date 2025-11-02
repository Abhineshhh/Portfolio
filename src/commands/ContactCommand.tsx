import type { Theme } from '@/types/theme';
import ContactCommandClient from './ContactCommandClient';
import ContactErrorBoundary from '@/components/ContactErrorBoundary';

export default function ContactCommand({ theme }: { theme: Theme }) {
  return (
    <ContactErrorBoundary theme={theme}>
      <ContactCommandClient theme={theme} />
    </ContactErrorBoundary>
  );
}
