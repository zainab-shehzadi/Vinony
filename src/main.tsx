import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import App from "./App";
import "./App.css";
import { ThemeProvider } from "./theme/ThemeProvider";
import RouteChangeLoader from "./components/RouteChangeLoader";

// ✅ add this
import { TooltipProvider } from "@/components/ui/tooltip";

export const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 1, refetchOnWindowFocus: false } },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          {/* ✅ required for Radix Tooltip */}
          <TooltipProvider delayDuration={120}>
            <RouteChangeLoader>
              <App />
            </RouteChangeLoader>
          </TooltipProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>
);
