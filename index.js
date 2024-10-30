import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import YearCalculator from "./YearCalculator";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <YearCalculator />
  </StrictMode>
);
