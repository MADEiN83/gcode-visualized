import {
  Actions,
  IActionDefinition,
  ObjectTypes,
  AxeTypes,
} from "utils/canvas/canvas.interfaces";

export const parseGCode = (gcode: string): IActionDefinition[] => {
  let output: any = [];

  rules.forEach((mainRule) => {
    const pass = mainRule.regexp.test(gcode);
    if (pass) {
      output = mainRule.action(gcode);
    }
  });

  return output;
};

const rules = [
  {
    regexp: /^G0[ XYZ\d]+/,
    label: "Move to",
    action: (gcode: string): IActionDefinition[] => {
      // eslint-disable-next-line
      const [_, ...axes] = gcode.split(" ");
      return axes.map((anAxe) => {
        const axe = anAxe[0].toLowerCase();
        const target = axe === "y" ? ObjectTypes.Bed : ObjectTypes.Nozzle;
        return {
          target,
          action: Actions.MoveTo,
          axe,
          valueToReach: Number(anAxe.substr(1, anAxe.length - 1)),
        } as IActionDefinition;
      });
    },
  },
  {
    regexp: /^M140 S\d+/,
    label: "Set Bed temperature",
    action: (gcode: string): IActionDefinition[] => {
      return [
        {
          target: ObjectTypes.Bed,
          action: Actions.SetTemperatureBed,
          valueToReach: Number(gcode.split(" S")[1]),
        },
      ];
    },
  },
  {
    regexp: /^M104 S\d+/,
    label: "Set Nozzle temperature",
    action: (gcode: string): IActionDefinition[] => {
      return [
        {
          target: ObjectTypes.Nozzle,
          action: Actions.SetTemperatureBed,
          valueToReach: Number(gcode.split(" S")[1]),
        },
      ];
    },
  },
  {
    regexp: /^G28/,
    label: "Homing",
    action: (): IActionDefinition[] => {
      const axes: AxeTypes[] = ["x", "y", "z"];
      return axes.map((axe) => ({
        target: axe === "y" ? ObjectTypes.Bed : ObjectTypes.Nozzle,
        action: Actions.MoveTo,
        valueToReach: 0,
        axe,
      }));
    },
  },
];
