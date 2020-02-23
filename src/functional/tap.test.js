import tap from "./tap";

const square = n => n * n;
const plusOne = n => n + 1;
const double = n => n * 2;

describe("tap", () => {
  test("returns the value", () => {
    const spy = jest.fn();
    expect(tap(spy)(3)).toBe(3);
  });

  test("calls the function on the value", () => {
    const spy = jest.fn();
    tap(spy)(3);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenNthCalledWith(1, 3);
  });
});
