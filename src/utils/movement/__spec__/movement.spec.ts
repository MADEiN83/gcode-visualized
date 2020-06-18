import { incrementMovement } from "../movement.utils";

describe("Movement tests", () => {
  it("should call callback 50 times and onCompleted once where diff is +50", async () => {
    const callback = jest.fn();
    const onCompleted = jest.fn();
    let i = 0;

    await incrementMovement({
      value: 0,
      valueToReach: 50,
      callback: (v) => {
        expect(v).toBe(i++);
        callback();
      },
      timeInMs: 0,
      onCompleted,
    });

    expect(callback).toBeCalledTimes(50);
    expect(onCompleted).toBeCalledTimes(1);
  });

  it("should call callback 50 times and onCompleted once where diff is -50", async () => {
    const callback = jest.fn();
    const onCompleted = jest.fn();
    const value = 50;
    let i = 0;

    await incrementMovement({
      value,
      valueToReach: 0,
      callback: (v) => {
        expect(v).toBe(value - i++);
        callback();
      },
      timeInMs: 0,
      onCompleted,
    });

    expect(callback).toBeCalledTimes(50);
    expect(onCompleted).toBeCalledTimes(1);
  });
});
