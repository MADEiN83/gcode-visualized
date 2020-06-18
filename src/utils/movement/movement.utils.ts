import { delay } from "utils/delay/delay.utils";

export const incrementMovement = async (args: {
  value: number;
  valueToReach: number;
  timeInMs?: number;
  onChange: (newValue: number) => void;
  onCompleted: () => void;
}) => {
  const { value, valueToReach, timeInMs, onChange, onCompleted } = args;
  const diff = valueToReach - value;
  const diffAbs = Math.abs(diff);
  const multiplier = diff < 0 ? -1 : 1;

  for (let i = 0; i < diffAbs; i++) {
    const newValue = value + i * multiplier;
    onChange(newValue);
    await delay(timeInMs);
  }

  onCompleted();
};
