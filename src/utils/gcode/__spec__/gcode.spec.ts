import { ObjectTypes, Actions, AxeTypes } from "utils/canvas/canvas.interfaces";
import { parseGCode } from "../gcode.utils";

describe("GCode tests", () => {
  it("should returns one action `moveTo` when 'G0 X20' is provided", () => {
    expect(parseGCode("G0 X20")).toEqual([
      {
        target: ObjectTypes.Nozzle,
        action: Actions.MoveTo,
        axe: "x",
        valueToReach: 20,
      },
    ]);
  });

  it("should returns one action `moveTo` when 'G0 Y30' is provided", () => {
    expect(parseGCode("G0 Y30")).toEqual([
      {
        target: ObjectTypes.Bed,
        action: Actions.MoveTo,
        axe: "y",
        valueToReach: 30,
      },
    ]);
  });

  it("should returns one action `moveTo` when 'G0 Z40' is provided", () => {
    expect(parseGCode("G0 Z40")).toEqual([
      {
        target: ObjectTypes.Nozzle,
        action: Actions.MoveTo,
        axe: "z",
        valueToReach: 40,
      },
    ]);
  });

  it("should set the Bed temperature to 60 when `M140 S60` is provided", () => {
    expect(parseGCode("M140 S60")).toEqual([
      {
        target: ObjectTypes.Bed,
        action: Actions.SetTemperatureBed,
        valueToReach: 60,
      },
    ]);
  });

  it("should set the Nozzle temperature to 200 when `M104 S200` is provided", () => {
    expect(parseGCode("M104 S200")).toEqual([
      {
        target: ObjectTypes.Nozzle,
        action: Actions.SetTemperatureBed,
        valueToReach: 200,
      },
    ]);
  });

  it("should perform Homing of all axes when `G28` is provided", () => {
    const output = parseGCode("G28");
    const axes: AxeTypes[] = ["x", "y", "z"];

    expect(output).toBeDefined();
    expect(output.length).toBe(3);
    expect(output.map((p) => p.axe)).toEqual(axes);

    axes.forEach((axe, index) => {
      expect(output[index]).toEqual({
        target: axe === "y" ? ObjectTypes.Bed : ObjectTypes.Nozzle,
        action: Actions.MoveTo,
        valueToReach: 0,
        axe,
      });
    });
  });

  it("should perform Homing and moveTo when `G28` and `G0 Y30` are provided", () => {
    const gcodes = ["G28", "G0 Y30"];
    const output = gcodes.map(parseGCode);
    const axes: AxeTypes[] = ["x", "y", "z"];

    expect(output).toBeDefined();
    expect(output.length).toBe(2);
    expect(output[0].length).toBe(3);
    expect(output[0].map((p) => p.axe)).toEqual(axes);
    expect(output[0][0]).toEqual({
      target: ObjectTypes.Nozzle,
      action: Actions.MoveTo,
      valueToReach: 0,
      axe: "x",
    });
    expect(output[0][1]).toEqual({
      target: ObjectTypes.Bed,
      action: Actions.MoveTo,
      valueToReach: 0,
      axe: "y",
    });
    expect(output[0][2]).toEqual({
      target: ObjectTypes.Nozzle,
      action: Actions.MoveTo,
      valueToReach: 0,
      axe: "z",
    });
    expect(output[1].length).toBe(1);
    expect(output[1]).toEqual([
      {
        target: ObjectTypes.Bed,
        action: Actions.MoveTo,
        valueToReach: 30,
        axe: "y",
      },
    ]);
  });
});
