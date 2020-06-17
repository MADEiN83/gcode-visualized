export const delay = async (timeInMs: number = 10) => {
  return new Promise((resolve) => setTimeout(resolve, timeInMs));
};
