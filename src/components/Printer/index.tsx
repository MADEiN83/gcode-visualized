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

    // utils.run(["M140 S60", "G0 X30 Y30", "G0 X200 Y30", "G0 X200 Y200"]);
    utils.run(["G0 X0"]);
  }, [utils]);

  return (
    <>
      <Canvas />
    </>
  );
};

export default Printer;
