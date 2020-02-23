type PipedFunction = (value: unknown) => unknown;

const pipe = (...fns: PipedFunction[]) => (value: unknown): unknown =>
  fns.reduce((acc, next) => next(acc), value);

export default pipe;
