import React from "react";
import Home from "./pages/Home";
import ErrorBoundary from "./components/ErrorBoundary";
import { ConfigContext } from "./context/configContext";

export default function App({ widgetId }: { widgetId: string }) {
  return (
    <ConfigContext widgetId={widgetId}>
      <ErrorBoundary>
        <Home />
      </ErrorBoundary>
    </ConfigContext>
  );
}
