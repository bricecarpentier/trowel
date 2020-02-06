import pipe from "./pipe";

describe("pipe", () => {
  test("returns a function", () => {
    expect(pipe()).toBeInstanceOf(Function);
  });

  describe("called with no function", () => {
    test("returns the value", () => {
      const f = pipe();
      const UNTOUCHED = Symbol("UNTOUCHED");
      expect(f(UNTOUCHED)).toBe(UNTOUCHED);
    });
  });

  describe("called with one function", () => {
    test("calls that function on the value", () => {
      const square = n => n * n;
      const f = pipe(square);
      expect(f(3)).toBe(9);
    });
  });

  describe("called with many functions", () => {
    test("calls those function in reading order", () => {
      const square = n => n * n;
      const plusOne = n => n + 1;
      const double = n => n * 2;

      const f = pipe(square, plusOne, double);
      expect(f(3)).toBe(20);
    });
  });
});
