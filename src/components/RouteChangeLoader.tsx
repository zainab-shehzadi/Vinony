import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import RouteChangeOverlay from "./RouteChangeOverlay";

type Props = {
  children: React.ReactNode;
  minDurationMs?: number; // prevents flicker
};

export default function RouteChangeLoader({
  children,
  minDurationMs = 500,
}: Props) {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    setLoading(true);

    if (timerRef.current) window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => {
      setLoading(false);
    }, minDurationMs);

    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, [location.key, minDurationMs]);

  return (
    <>
      <RouteChangeOverlay open={loading} />
      {children}
    </>
  );
}
