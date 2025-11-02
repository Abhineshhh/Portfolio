'use client';

import { Component, ReactNode } from 'react';
import type { Theme } from '@/types/theme';
import { Mail, RefreshCw, AlertTriangle } from 'lucide-react';

interface ContactErrorBoundaryProps {
  children: ReactNode;
  theme: Theme;
}

interface ContactErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ContactErrorBoundary extends Component<ContactErrorBoundaryProps, ContactErrorBoundaryState> {
  constructor(props: ContactErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error): ContactErrorBoundaryState {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Contact form error:', error, errorInfo);
  }

  resetError = () => {
    this.setState({
      hasError: false,
      error: null,
    });
  };

  render() {
    const { theme } = this.props;

    if (this.state.hasError) {
      return (
        <div className="space-y-4 animate-fadeIn">
          <div 
            className="p-6 rounded-lg border-2"
            style={{
              backgroundColor: `${theme.colors.error}10`,
              borderColor: `${theme.colors.error}40`,
            }}
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{
                  backgroundColor: `${theme.colors.error}20`,
                }}
              >
                <AlertTriangle size={32} style={{ color: theme.colors.error }} />
              </div>
              
              <div>
                <h3 
                  className="text-xl font-bold mb-2"
                  style={{ color: theme.colors.error }}
                >
                  Contact Form Error
                </h3>
                <p className="text-sm opacity-80" style={{ color: theme.colors.text }}>
                  The contact form encountered an unexpected error. Please try again or contact me directly.
                </p>
              </div>

              {/* Alternative contact methods */}
              <div 
                className="w-full p-4 rounded-lg text-sm"
                style={{
                  backgroundColor: `${theme.colors.background}80`,
                  border: `1px solid ${theme.colors.border}40`,
                }}
              >
                <p className="font-semibold mb-2" style={{ color: theme.colors.accent }}>
                  📧 Alternative: Email me directly
                </p>
                <a
                  href="mailto:jhaabhinesh977@gmail.com"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg hover:scale-105 transition-transform"
                  style={{
                    backgroundColor: theme.colors.primary,
                    color: theme.colors.background,
                  }}
                >
                  <Mail size={16} />
                  jhaabhinesh977@gmail.com
                </a>
              </div>

              {/* Retry button */}
              <button
                onClick={this.resetError}
                className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform"
                style={{
                  backgroundColor: `${theme.colors.accent}`,
                  color: theme.colors.background,
                }}
              >
                <RefreshCw size={16} />
                Try Again
              </button>

              {/* Technical details (collapsed) */}
              {this.state.error && process.env.NODE_ENV === 'development' && (
                <details className="w-full text-left">
                  <summary 
                    className="cursor-pointer text-xs font-semibold mb-2"
                    style={{ color: theme.colors.accent }}
                  >
                    Technical Details (Dev Mode)
                  </summary>
                  <pre 
                    className="p-3 rounded text-xs overflow-auto"
                    style={{
                      backgroundColor: `${theme.colors.background}60`,
                      border: `1px solid ${theme.colors.border}40`,
                      color: theme.colors.error,
                    }}
                  >
                    {this.state.error.message}
                  </pre>
                </details>
              )}
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ContactErrorBoundary;
