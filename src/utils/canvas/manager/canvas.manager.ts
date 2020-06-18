import Bed from "../bed/bed";
import { ISize } from "../canvas.interfaces";

class CanvasManager {
  private canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;

  // Properties
  size: ISize = { width: 300, height: 300 };

  // Managers
  private bed: Bed;

  constructor() {
    this.canvas = document.getElementById("canvas") as HTMLCanvasElement;
    this.ctx = this.canvas.getContext("2d") as CanvasRenderingContext2D;

    this.bed = new Bed(this);

    this.init();
    this.draw();
    this.demo();
  }

  private init = () => {
    const { width, height } = this.size;

    this.canvas.width = width;
    this.canvas.height = height;
  };

  draw = () => {
    this.clear();
    this.bed.draw();
  };

  clear = () => {
    const { width, height } = this.size;
    this.ctx.clearRect(0, 0, width, height);
  };

  // TODO: remove it
  demo = async () => {
    await this.bed.moveTo(100);
    await this.bed.moveTo(0);
  };
}

export default CanvasManager;
