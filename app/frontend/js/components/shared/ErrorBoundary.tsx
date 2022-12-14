import * as React from 'react';
import { ErrorInfo } from 'react';

export interface Props {
  children: React.ReactNode;
}

export interface State {
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends React.Component<Props, State> {
  state: State = { error: null, errorInfo: null };

  componentDidCatch(error: Error | null, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo,
    });
  }

  render() {
    if (this.state.errorInfo) {
      return (
        <>
          <h2>エラーが発生しました。</h2>
          <details>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
