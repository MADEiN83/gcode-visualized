import CanvasUtils from "utils/canvas/canvas.utils";
import { IPosition, AxeTypes } from "../canvas.interfaces";
import { incrementMovement } from "utils/movement/movement.utils";

const DEFAULT_ARGS: INozzleArgs = {
  radius: 10,
  fillStyle: "red",
  position: { x: 0, y: 0, z: 0 },
};

class NozzleUtils {
  private parent: CanvasUtils;
  private args: INozzleArgs;

  constructor(parent: CanvasUtils) {
    this.parent = parent;
    this.args = { ...DEFAULT_ARGS, ...parent?.args?.nozzle };
  }

  draw = () => {
    this.setBeginPath();
  };

  moveTo = (valueToReach: number, axe: AxeTypes): Promise<void> => {
    return new Promise((resolve) => {
      incrementMovement({
        value: this.args.position[axe] || 0,
        valueToReach: valueToReach,
        callback: this.handleOnMove(axe),
        onCompleted: resolve,
      });
    });
  };

  private handleOnMove = (axe: AxeTypes) => {
    return (newAxeValue: number) => {
      this.args.position[axe] = newAxeValue;
      this.parent.refresh();
    };
  };

  private setBeginPath = () => {
    const ctx = this.parent.ctx;
    const {
      args: { radius, position, fillStyle },
    } = this;

    if (!position) {
      return;
    }

    ctx.beginPath();
    ctx.arc(position.x, position.z, radius, 0, 2 * Math.PI, false);
    if (fillStyle) {
      ctx.fillStyle = fillStyle;
    }
    ctx.fill();
  };
}

export default NozzleUtils;

export interface INozzleArgs {
  radius: number;
  fillStyle: string;
  position: IPosition;
}
