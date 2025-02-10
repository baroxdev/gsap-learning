import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { BrowserRouter, Route, Routes } from "react-router";
import { AppleExample } from "./templates/scroll-trigger/apple.tsx";
import { ScrollTriggerImageComparisionTemplate } from "./templates/scroll-trigger/image-comparation.tsx";
import { ScrollTriggerTemplate } from "./templates/scrolltrigger.template.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ScrollTriggerTemplate />} />
        <Route
          path="/image-comparation"
          element={<ScrollTriggerImageComparisionTemplate />}
        />
        <Route path="/apple" element={<AppleExample />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
