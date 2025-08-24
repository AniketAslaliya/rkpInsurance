import * as React from "react";

export function useHotkeys(keys: string[], handler: (e: KeyboardEvent) => void) {
  React.useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      const combo = [e.ctrlKey || e.metaKey ? "mod" : "", key].filter(Boolean).join("+");
      if (keys.includes(combo)) {
        handler(e);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [keys, handler]);
}


