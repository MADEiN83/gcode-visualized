import Bed from "../bed/bed";
import { ISize, IActionDefinition, ObjectTypes } from "../canvas.interfaces";
import Nozzle from "../nozzle/nozzle";
import { parseGCode } from "utils/gcode/gcode.utils";
import { delay } from "utils/delay/delay.utils";

class CanvasManager {
  private canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;

  // Properties
  size: ISize = { width: 300, height: 300 };

  // Managers
  bed: Bed;
  nozzle: Nozzle;

  constructor() {
    this.canvas = document.getElementById("canvas") as HTMLCanvasElement;
    this.ctx = this.canvas.getContext("2d") as CanvasRenderingContext2D;

    this.bed = new Bed(this);
    this.nozzle = new Nozzle(this);

    this.init();
    this.draw();
  }

  private init = () => {
    const { width, height } = this.size;

    this.canvas.width = width;
    this.canvas.height = height;
  };

  draw = () => {
    this.clear();
    this.bed.draw();
    this.nozzle.draw();
  };

  clear = () => {
    const { width, height } = this.size;
    this.ctx.clearRect(0, 0, width, height);
  };

  run = async (gcodes: string[]) => {
    const actionsOfActions = gcodes.map(parseGCode);

    for (const actions of actionsOfActions) {
      await this.dispatchActions(actions);
      await delay(200);
    }
  };

  private dispatchActions = (actions: IActionDefinition[]) => {
    const arrayOfPromises = actions.map((anAction) => {
      const target = this.getTarget(anAction.target) as any;
      return target[anAction.action](anAction.valueToReach);
    });

    return Promise.all(arrayOfPromises);
  };

  private getTarget = (type: ObjectTypes) => {
    const mapping = {
      [ObjectTypes.Bed]: this.bed,
      [ObjectTypes.Nozzle]: this.nozzle,
    };
    return mapping[type];
  };
}

export default CanvasManager;
