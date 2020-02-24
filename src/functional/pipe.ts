/* eslint-disable @typescript-eslint/no-explicit-any */
type PipedFunction = (value: any) => any;

const pipe = (...fns: PipedFunction[]) => (value: any): any =>
  fns.reduce((acc, next) => next(acc), value);

export default pipe;
