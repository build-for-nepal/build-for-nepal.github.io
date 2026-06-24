import { Component } from "react";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-4 p-8 text-center">
          <h1 className="text-2xl font-bold text-dark">Something went wrong</h1>
          <p className="text-muted">
            Try refreshing the page. If the problem persists, please contact us.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-accent-hover"
          >
            Refresh
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
