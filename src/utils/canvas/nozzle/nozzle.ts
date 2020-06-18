import CanvasManager from "../manager/canvas.manager";
import { IPosition } from "../canvas.interfaces";
import { incrementMovement } from "utils/movement/movement.utils";

class Nozzle {
  private manager: CanvasManager;
  position: IPosition = { x: 0, y: 0, z: 0 };
  size: number = 5;
  color: string = "red";

  constructor(manager: CanvasManager) {
    this.manager = manager;
  }

  get computedPosition(): IPosition {
    const { x, y } = this.position;
    const { size: managerSize } = this.manager;
    const { size: bedSize } = this.manager.bed;

    const halfManagerWidth = (managerSize.width - this.size) / 2;
    const halfManagerHeight = (managerSize.height - this.size) / 2;
    const halfBedWidth = bedSize.width / 2;
    const halfBedHeight = bedSize.height / 2;

    return {
      x: halfManagerWidth + x - halfBedWidth,
      y: halfManagerHeight + y + halfBedHeight,
      z: 0,
    };
  }

  draw = () => {
    const { ctx } = this.manager;
    const pos = this.computedPosition;

    ctx.beginPath();
    ctx.arc(pos.x, pos.y, this.size, 0, 2 * Math.PI, false);
    ctx.fillStyle = this.color;
    ctx.fill();
  };

  moveTo = (valueToReach: number) => {
    return new Promise((onCompleted) => {
      incrementMovement({
        value: this.position.x,
        valueToReach,
        onChange: this.handleOnChange,
        onCompleted,
      });
    });
  };

  private handleOnChange = (newValue: number) => {
    this.position.x = newValue;
    this.manager.draw();
  };
}

export default Nozzle;
