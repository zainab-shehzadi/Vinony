import * as React from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const { pathname, search, hash } = useLocation();

  React.useEffect(() => {
    // If you use hash links (#section), let the browser handle it
    if (hash) return;

    // Jump to top on every route change
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, search, hash]);

  return null;
}
