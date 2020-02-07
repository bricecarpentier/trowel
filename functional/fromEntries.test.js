import fromEntries from "./fromEntries";

describe("fromEntries", () => {
  describe("called with null", () => {
    test("returns an object without keys", () => {
      expect(fromEntries(null)).toEqual({});
    });
  });

  describe("called with undefined", () => {
    test("returns an object without keys", () => {
      expect(fromEntries(undefined)).toEqual({});
    });
  });

  describe("called with an empty array", () => {
    test("returns an object without keys", () => {
      expect(fromEntries([])).toEqual({});
    });
  });

  describe("called with an object of keys/value pairs", () => {
    test("returns an adequately furnished object", () => {
      expect(
        fromEntries([
          ["a", 1],
          ["b", "toto"]
        ])
      ).toEqual({ a: 1, b: "toto" });
    });
  });
});
