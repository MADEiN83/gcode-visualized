import CanvasManager from "../manager/canvas.manager";
import { IPosition, ISize } from "../canvas.interfaces";
import { incrementMovement } from "utils/movement/movement.utils";

class Bed {
  private manager: CanvasManager;
  position: IPosition = { x: 0, y: 0, z: 0 };
  size: ISize = { width: 220, height: 220 };
  color: string = "lightgrey";

  constructor(manager: CanvasManager) {
    this.manager = manager;
  }

  get computedPosition(): IPosition {
    const { x, y } = this.position;
    const { size: managerSize } = this.manager;

    return {
      x: (managerSize.width - this.size.width) / 2 + x,
      y: (managerSize.height - this.size.height) / 2 + y,
      z: 0,
    };
  }

  draw = () => {
    const { ctx } = this.manager;
    const { width, height } = this.size;
    const pos = this.computedPosition;

    ctx.fillStyle = this.color;
    ctx.fillRect(pos.x, pos.y, width, height);
  };

  moveTo = (valueToReach: number) => {
    return new Promise((onCompleted) => {
      incrementMovement({
        value: this.position.y,
        valueToReach,
        onChange: this.handleOnChange,
        onCompleted,
      });
    });
  };

  private handleOnChange = (newValue: number) => {
    this.position.y = newValue;
    this.manager.draw();
  };
}

export default Bed;
