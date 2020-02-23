type PipedFunction = (value: any) => any;

const pipe = (...fns: PipedFunction[]) => (value: any) =>
  fns.reduce((acc, next) => next(acc), value);

export default pipe;
