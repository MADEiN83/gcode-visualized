import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { SET_CANVAS_UTILS } from "core/redux/reducer/main/main.reducer";
import CanvasUtils from "utils/canvas/canvas.utils";

interface IProps {}

const Canvas: React.FC<IProps> = (props: IProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: SET_CANVAS_UTILS, payload: new CanvasUtils() });
  }, [dispatch]);

  return <canvas id="canvas" />;
};

export default Canvas;
