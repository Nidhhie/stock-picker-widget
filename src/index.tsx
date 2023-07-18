import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const widgetDivs = document.querySelectorAll(".stock_picker");

widgetDivs.forEach((div, idx) => {
  const root = createRoot(div);
  root.render(
    <React.StrictMode>
      <App widgetId={`widget-${idx}`} />
    </React.StrictMode>
  );
});
