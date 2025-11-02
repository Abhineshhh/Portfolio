'use client';

import { Component, ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    // Update state so the next render will show the fallback UI
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error to console for debugging
    console.error('Error Boundary caught an error:', error, errorInfo);
    
    // You could also log to an error reporting service here
    // Example: logErrorToService(error, errorInfo);
  }

  resetError = () => {
    this.setState({
      hasError: false,
      error: null,
    });
  };

  render() {
    if (this.state.hasError) {
      // If custom fallback is provided, use it
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default fallback UI
      return (
        <div className="flex flex-col items-center justify-center p-8 rounded-lg border-2 border-red-500/30 bg-red-500/10">
          <div className="text-center space-y-4 max-w-md">
            <div className="text-6xl mb-4">⚠️</div>
            <h2 className="text-2xl font-bold text-red-400">
              Oops! Something went wrong
            </h2>
            <p className="text-sm text-gray-400">
              An unexpected error occurred. Don't worry, your data is safe.
            </p>
            {this.state.error && (
              <details className="text-left mt-4">
                <summary className="cursor-pointer text-sm text-gray-500 hover:text-gray-300">
                  Technical details
                </summary>
                <pre className="mt-2 p-3 bg-black/50 rounded text-xs text-red-300 overflow-auto">
                  {this.state.error.message}
                </pre>
              </details>
            )}
            <button
              onClick={this.resetError}
              className="mt-4 px-6 py-3 bg-linear-to-r from-cyan-500 to-purple-500 rounded-lg font-semibold hover:scale-105 transition-transform"
            >
              Try Again
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
