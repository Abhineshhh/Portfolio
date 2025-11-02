'use client';

import Terminal from '@/components/Terminal';
import MatrixBackground from '@/components/MatrixBackground';
import ErrorBoundary from '@/components/ErrorBoundary';

export default function Home() {
  return (
    <main className="min-h-screen relative flex items-center justify-center p-2 sm:p-4 md:p-6 lg:p-8 overflow-hidden">
      {/* Matrix background effect */}
      <MatrixBackground />

      {/* Main terminal - positioned above background */}
      <div className="relative z-10 w-full">
        <ErrorBoundary>
          <Terminal />
        </ErrorBoundary>
      </div>
    </main>
  );
}
