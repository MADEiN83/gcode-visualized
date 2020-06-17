import { useEffect, useState } from "react";

const EVENT_NAME = "resize";
const BREAKPOINTS = {
  XS: 0,
  SM: 576,
  MD: 768,
  LG: 992,
  XL: 1200,
  XXL: 1600,
};

const useBreakpoints = (): {
  XS: boolean;
  SM: boolean;
  MD: boolean;
  LG: boolean;
  XL: boolean;
  XXL: boolean;
} => {
  const [currentWidth, setCurrentWidth] = useState<number>(
    document.documentElement.clientWidth
  );

  useEffect(() => {
    window.addEventListener(EVENT_NAME, handleOnChange);
    return () => window.removeEventListener(EVENT_NAME, handleOnChange);
  }, []);

  const handleOnChange = () => {
    const { clientWidth } = document.documentElement;
    setCurrentWidth(clientWidth);
  };

  return {
    XS: currentWidth < BREAKPOINTS.SM,
    SM: currentWidth >= BREAKPOINTS.SM && currentWidth < BREAKPOINTS.MD,
    MD: currentWidth >= BREAKPOINTS.MD && currentWidth < BREAKPOINTS.LG,
    LG: currentWidth >= BREAKPOINTS.LG && currentWidth < BREAKPOINTS.XL,
    XL: currentWidth >= BREAKPOINTS.XL && currentWidth < BREAKPOINTS.XXL,
    XXL: currentWidth >= BREAKPOINTS.XXL,
  };
};

export default useBreakpoints;
