import CanvasUtils from "../canvas.utils";
import { IPosition } from "../canvas.interfaces";

const DEFAULT_ARGS: IBedArgs = {
  size: { width: 220, height: 220 },
  fillStyle: "lightgrey",
  position: { x: 0, y: 0 },
};

class BedUtils {
  private parent: CanvasUtils;
  private args: IBedArgs;

  constructor(parent: CanvasUtils) {
    this.parent = parent;
    this.args = { ...DEFAULT_ARGS, ...parent.args?.bed };
  }

  draw = () => {
    this.setFillStyle();
    this.setFillRect();
  };

  private setFillStyle = () => {
    const {
      args: { fillStyle },
    } = this;

    if (!fillStyle) {
      return;
    }

    this.parent.ctx.fillStyle = fillStyle;
  };

  private setFillRect = () => {
    const {
      args: { size, position },
    } = this;

    if (!position || !size) {
      return;
    }

    this.parent.ctx.fillRect(position.x, position.y, size.width, size.height);
  };
}

export default BedUtils;

export interface IBedArgs {
  size?: { width: number; height: number };
  fillStyle?: string;
  position?: IPosition;
}
