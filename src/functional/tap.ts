type TapCallback = (value: unknown) => void;

const tap = (fn: TapCallback) => (value: unknown): unknown => {
  fn(value);
  return value;
};

export default tap;
