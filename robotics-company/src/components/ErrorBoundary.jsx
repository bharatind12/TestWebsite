import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error("Caught by ErrorBoundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ background: "#002845", color: "#67e8f9", padding: "40px", fontFamily: "monospace", minHeight: "100vh" }}>
          <h1 style={{ color: "#fff" }}>Something broke 🌊</h1>
          <pre style={{ whiteSpace: "pre-wrap" }}>{this.state.error?.toString()}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}