"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type UseExamFocusGuardOptions = {
  enabled: boolean;
};

export function useExamFocusGuard({ enabled }: UseExamFocusGuardOptions) {
  const [isWarningOpen, setIsWarningOpen] = useState(false);
  const [leaveCount, setLeaveCount] = useState(0);
  const leftExamRef = useRef(false);

  const dismissWarning = useCallback(() => {
    setIsWarningOpen(false);
  }, []);

  useEffect(() => {
    if (!enabled) {
      leftExamRef.current = false;
      setIsWarningOpen(false);
      return;
    }

    const handleVisibilityChange = () => {
      if (document.hidden) {
        leftExamRef.current = true;
        return;
      }

      if (leftExamRef.current) {
        leftExamRef.current = false;
        setLeaveCount((count) => count + 1);
        setIsWarningOpen(true);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [enabled]);

  useEffect(() => {
    if (!enabled) return;

    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      event.preventDefault();
      event.returnValue = "";
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [enabled]);

  return {
    isWarningOpen,
    dismissWarning,
    leaveCount,
  };
}
