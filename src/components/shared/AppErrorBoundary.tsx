import React, { Component, ErrorInfo } from 'react';

interface State { hasError: boolean; error: Error | null }

export class AppErrorBoundary extends Component<{ children: React.ReactNode }, State> {
  state: State = { hasError: false, error: null };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('[AppErrorBoundary]', error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: "'DM Sans', sans-serif", background: '#FAFAF8', padding: 32,
        }}>
          <div style={{ textAlign: 'center', maxWidth: 480 }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>⚠</div>
            <h1 style={{ fontSize: 24, fontWeight: 700, color: '#111110', marginBottom: 12, fontFamily: "'Fraunces', serif" }}>
              Something went wrong
            </h1>
            <p style={{ fontSize: 15, color: '#666', lineHeight: 1.6, marginBottom: 24 }}>
              We hit an unexpected error. Your data is safe — try refreshing the page.
            </p>
            <p style={{ fontSize: 12, color: '#999', marginBottom: 24, fontFamily: 'monospace' }}>
              {this.state.error?.message}
            </p>
            <button
              onClick={() => window.location.reload()}
              style={{
                background: '#0066FF', color: '#fff', border: 'none', borderRadius: 10,
                padding: '12px 28px', fontSize: 15, fontWeight: 600, cursor: 'pointer',
              }}
            >
              Refresh page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
