import memoize from './memoize';

const double = (n: number): number => 2 * n;

describe('memoize', () => {
  describe('called with a function', () => {
    test('returns a function', () => {
      const m = memoize(double);
      expect(m).toBeInstanceOf(Function);
    });
  });

  describe('called once', () => {
    const spy: (arg: number) => number = jest.fn().mockImplementation(double);
    const m = memoize(spy);
    const result: number = m(33);

    test('calls the memoized function', () => {
      expect(spy).toHaveBeenCalledTimes(1);
    });

    test('returns the expected value', () => {
      expect(result).toBe(66);
    });
  });

  describe('called more than once with the same argument', () => {
    const spy: (arg: number) => number = jest.fn().mockImplementation(double);
    const m = memoize(spy);
    const result1: number = m(33);
    const result2: number = m(33);

    test('calls the memoized function only once', () => {
      expect(spy).toHaveBeenCalledTimes(1);
    });

    test('returns the expected value on all calls', () => {
      expect(result1).toBe(66);
      expect(result2).toBe(66);
    });
  });

  describe('called more than once with different arguments', () => {
    const spy: (arg: number) => number = jest.fn().mockImplementation(double);
    const m = memoize(spy);
    const result1: number = m(33);
    const result2: number = m(21);
    const result3: number = m(33);

    test('calls the memoized function once per argument', () => {
      expect(spy).toHaveBeenCalledTimes(2);
    });

    test('returns the expected value on all calls', () => {
      expect(result1).toBe(66);
      expect(result2).toBe(42);
      expect(result3).toBe(66);
    });
  });
});
