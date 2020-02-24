type TapCallback = (value: unknown) => void;

/**
 * Creates sort of a spy function. Useful in a pipe construction.
 * @param fn the function to call
 */
const tap = (fn: TapCallback) => (value: unknown): unknown => {
  fn(value);
  return value;
};

export default tap;
