// components/ErrorBoundary.tsx
import { Component } from "react";
import type { ErrorInfo, ReactNode } from "react";
import Topic from "./Topic";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-sky-100">
          <div className="max-w-md w-full bg-white shadow-lg rounded-[50px] p-10">
            <div className="flex items-center mb-4">
              <Topic topic="Something went wrong" desc="" />
            </div>
            <p className="text-gray-500 mb-4">
              We're sorry, but something unexpected happened. Please try
              refreshing the page.
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => window.location.reload()}
                className="px-6 py-3 bg-sky-600 text-white rounded-full hover:bg-sky-700 transition"
              >
                Refresh Page
              </button>
              <button
                onClick={() => this.setState({ hasError: false })}
                className="px-6 py-3 border border-gray-300 rounded-full hover:bg-gray-100 transition"
              >
                Try Again
              </button>
            </div>
            {process.env.NODE_ENV === "development" && this.state.error && (
              <details className="mt-4 p-3 bg-gray-100 rounded-xl text-sm">
                <summary className="cursor-pointer font-medium">
                  Error Details (Development)
                </summary>
                <pre className="mt-2 text-xs overflow-auto">
                  {this.state.error.stack}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
