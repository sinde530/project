import { useEffect, useRef } from "react";

export default function useInterval(
  callback: () => void,
  delay: number | null
) {
  const savedCallback = useRef<null | (() => void)>(null);
  // Remeber the latest callback.

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.

  useEffect(() => {
    function tick(): void {
      if (savedCallback.current) savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => {
        clearInterval(id);
      };
    }
  }, [delay]);
}
