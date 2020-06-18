import BedUtils, { IBedArgs } from "./bed/bed.utils";
import NozzleUtils, { INozzleArgs } from "./nozzle/nozzle.utils";
import { parseGCode } from "utils/gcode/gcode.utils";
import { IActionDefinition, ObjectTypes } from "./canvas.interfaces";

class CanvasUtils {
  private size = { width: 300, height: 300 };
  private canvas: HTMLCanvasElement;
  args?: ICanvasArgs;
  ctx: CanvasRenderingContext2D;

  // Utilities.
  private bed: BedUtils;
  private nozzle: NozzleUtils;

  constructor(args?: ICanvasArgs) {
    this.canvas = document.getElementById("canvas") as HTMLCanvasElement;
    this.ctx = this.canvas.getContext("2d") as CanvasRenderingContext2D;
    this.args = args;

    this.bed = new BedUtils(this);
    this.nozzle = new NozzleUtils(this);

    this.init();
    this.draw();
  }

  private init = async () => {
    this.canvas.width = this.size.width;
    this.canvas.height = this.size.height;
  };

  draw = () => {
    this.bed.draw();
    this.nozzle.draw();
  };

  refresh = () => {
    this.ctx.clearRect(0, 0, this.size.width, this.size.height);
    this.draw();
  };

  run = async (gcodes: string[]) => {
    const arrayOfActions: IActionDefinition[][] = gcodes.map(parseGCode);
    console.log("firstAction", arrayOfActions);

    for await (const firstAction of arrayOfActions) {
      await this.dispatchActions(firstAction);
    }
  };

  // private

  private getObjectByTarget = (target: ObjectTypes) => {
    const mapping = {
      [ObjectTypes.Bed]: this.bed,
      [ObjectTypes.Nozzle]: this.nozzle,
    };

    return mapping[target];
  };

  private dispatchActions = async (actions: IActionDefinition[]) => {
    const arrayOfPromises = actions.map((action) => {
      const target: any = this.getObjectByTarget(action.target);
      return target[action.action](action.valueToReach, action.axe);
    });

    await Promise.all(arrayOfPromises);
  };
}

export default CanvasUtils;

export interface ICanvasArgs {
  bed?: IBedArgs;
  nozzle?: INozzleArgs;
}
