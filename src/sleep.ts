/**
 * returns a promise that will resolve in `ms` milliseconds
 * @param ms delay to sleep for, in milliseconds
 */
const sleep = (ms: number): Promise<unknown> =>
  new Promise(resolve => setTimeout(resolve, ms));

export default sleep;
