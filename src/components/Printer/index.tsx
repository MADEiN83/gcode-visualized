import React, { useEffect } from "react";
import Canvas from "./components/Canvas";
import useCanvasUtils from "hooks/useCanvasUtils";

interface IProps {}

const Printer: React.FC<IProps> = (props: IProps) => {
  const utils = useCanvasUtils();

  useEffect(() => {
    if (!utils) {
      return;
    }

    utils.proceed();
  }, [utils]);
  return (
    <>
      <Canvas />
    </>
  );
};

export default Printer;
