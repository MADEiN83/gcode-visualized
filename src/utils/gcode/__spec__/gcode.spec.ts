import { ObjectTypes } from "utils/canvas/canvas.interfaces";
import { parseGCode } from "../gcode.utils";

describe("GCode tests", () => {
  it("should returns two actions `moveTo` when 'G0 X30 Y30' is provided", () => {
    expect(parseGCode("G0 X30 Y30")).toEqual([
      {
        target: ObjectTypes.Nozzle,
        action: "moveTo",
        axe: "x",
        valueToReach: 30,
      },
      {
        target: ObjectTypes.Nozzle,
        action: "moveTo",
        axe: "y",
        valueToReach: 30,
      },
    ]);
  });
});
