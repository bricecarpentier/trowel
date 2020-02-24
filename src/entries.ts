/**
 * converts an object in a list of keys and values
 * @returns an array of tupples
 */
const entries = (obj?: object | null): [string, unknown][] =>
  obj ? Object.entries(obj) : [];

export default entries;
