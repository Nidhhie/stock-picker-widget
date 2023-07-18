import React, { ErrorInfo } from "react";

type State = {
  hasError: boolean;
};

type Props = {
  children: React.ReactNode;
  //fallbackRender: (error: any) => React.ReactNode;
};
class ErrorBoundary extends React.Component<Props, State> {
  static getDerivedStateFromError(error: any) {
    return { hasError: true, error };
  }

  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>An Error Occured !</div>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
