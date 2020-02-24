/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Caches the result of any function that only accepts one parameter
 */
const memoize = (fn: (arg: any) => any): Function => {
  const memoized = (arg: any): any => {
    const key: unknown = arg;
    const { cache } = memoized;

    if (cache.has(key)) return cache.get(key);

    const result = fn(arg);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new Map();

  return memoized;
};

export default memoize;
