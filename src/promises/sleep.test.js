import sleep from "./sleep";

describe("sleep", () => {
  test("returns a promise", () => {
    expect(sleep()).toBeInstanceOf(Promise);
  });

  test("resolves", async () => {
    await sleep(20);
    expect(true);
  });

  test("sleeps the right amount of time", async () => {
    const sleepTime = 20;
    const beginning = Date.now();
    await sleep(sleepTime);
    // because of the event loop model, we can only guarantee an "at least" amount of time
    expect(Date.now()).toBeGreaterThanOrEqual(beginning + sleepTime);
  });
});
