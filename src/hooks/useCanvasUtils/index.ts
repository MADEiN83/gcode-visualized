import { useSelector } from "react-redux";

import { IReducers } from "core/redux";
import CanvasUtils from "utils/canvas/canvas.utils";

const useCanvasUtils = (): CanvasUtils | undefined =>
  useSelector((reducers: IReducers) => reducers.mainReducer.canvasUtils);

export default useCanvasUtils;
