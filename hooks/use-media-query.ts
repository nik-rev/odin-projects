import { useEffect, useState } from "react";

export function useMediaQuery() {
  const [device, setDevice] = useState<
    "desktop" | "mobile" | "tablet" | "sm" | null
  >(null);
  const [dimensions, setDimensions] = useState<{
    height: number;
    width: number;
  } | null>(null);

  useEffect(() => {
    const checkDevice = () => {
      if (window.matchMedia("(max-width: 640px)").matches) {
        setDevice("mobile");
      } else if (window.matchMedia("(max-width: 768px)").matches) {
        setDevice("sm");
      } else if (
        window.matchMedia("(min-width: 641px) and (max-width: 1024px)").matches
      ) {
        setDevice("tablet");
      } else {
        setDevice("desktop");
      }
      setDimensions({ height: window.innerHeight, width: window.innerWidth });
    };

    // Initial detection
    checkDevice();

    // Listener for windows resize
    window.addEventListener("resize", checkDevice);

    // Cleanup listener
    return () => {
      window.removeEventListener("resize", checkDevice);
    };
  }, []);

  return {
    isDesktop: device === "desktop",
    isMobile: device === "mobile",
    isTablet: device === "tablet",
    height: dimensions?.height,
    width: dimensions?.width,
    isSm: device === "sm",
    device,
  };
}
