import React from "react";
import PropTypes from "prop-types";

export class ErrorBoundary extends React.PureComponent {
  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch() {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, info);
  }

  render() {
    const { hasError } = this.state;
    const { erroMessage, children } = this.props;
    if (hasError) {
      // You can render any custom fallback UI
      return <h1>{erroMessage}</h1>;
    }

    return children;
  }
}

ErrorBoundary.propTypes = {
  erroMessage: PropTypes.string,
  children: PropTypes.element,
};
