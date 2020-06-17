import {
  Actions,
  IActionDefinition,
  ObjectTypes,
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
    action: (gcode: string): IActionDefinition[] => {
      // eslint-disable-next-line
      const [_, ...axes] = gcode.split(" ");
      return axes.map((axe) => {
        return {
          target: ObjectTypes.Nozzle,
          action: Actions.MoveTo,
          axe: axe[0].toLowerCase(),
          valueToReach: Number(axe.substr(1, axe.length - 1)),
        } as IActionDefinition;
      });
    },
  },
];
