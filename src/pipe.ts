/* eslint-disable @typescript-eslint/no-explicit-any */
type PipedFunction = (value: any) => any;

/**
 * Creates a function chain where each function is called with the value
 * returned by the previous one
 * @param fns the functions to pipe
 */
const pipe = (...fns: PipedFunction[]) => (value: any): any =>
  fns.reduce((acc, next) => next(acc), value);

export default pipe;
