import entries from "./entries";

describe("entries", () => {
  describe("called with null", () => {
    test("returns an empty array", () => {
      expect(entries(null)).toEqual([]);
    });
  });

  describe("called with undefined", () => {
    test("returns an empty array", () => {
      expect(entries(undefined)).toEqual([]);
    });
  });

  describe("called with an object with no keys", () => {
    test("returns an empty array", () => {
      expect(entries({})).toEqual([]);
    });
  });

  describe("called with an object", () => {
    test("returns its key/value pairs as items in an array", () => {
      expect(entries({ a: 4, b: "toto" })).toEqual([
        ["a", 4],
        ["b", "toto"]
      ]);
    });
  });
});
