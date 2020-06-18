import { useSelector } from "react-redux";

import { IReducers } from "core/redux";
import CanvasManager from "utils/canvas/manager/canvas.manager";

const useCanvasManager = (): CanvasManager | undefined =>
  useSelector((reducers: IReducers) => reducers.mainReducer.canvasManager);

export default useCanvasManager;
