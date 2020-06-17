export interface IPosition {
  x: number;
  y: number;
}

export type AxeTypes = "x" | "y";

export enum Actions {
  MoveTo = "moveTo",
}

export interface IActionDefinition {
  target: ObjectTypes;
  action: Actions;
  axe: AxeTypes;
  valueToReach: number;
}

export enum ObjectTypes {
  Bed = "bed",
  Nozzle = "nozzle",
}
