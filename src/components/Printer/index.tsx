import React, { useEffect } from "react";

import Canvas from "./components/Canvas";
import { useCanvasManager } from "hooks";

interface IProps {}

const Printer: React.FC<IProps> = (props: IProps) => {
  const utils = useCanvasManager();

  useEffect(() => {
    if (!utils) {
      return;
    }

    utils.run(["G0 Y110 X110", "G28"]);
  }, [utils]);

  return (
    <>
      <Canvas />
    </>
  );
};

export default Printer;
