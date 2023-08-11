import { useState, useEffect } from "react";

export const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const handleMatchChange = (event: MediaQueryListEvent) =>
      setMatches(event.matches);

    mediaQuery.addEventListener("change", handleMatchChange);

    return () => mediaQuery.removeEventListener("change", handleMatchChange);
  }, [query]);

  return matches;
};

export default useMediaQuery;
