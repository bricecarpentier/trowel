/**
 * Creates an object from a list of tuples
 * @param items key/value pairs to create an object from
 */
const fromEntries = (items?: [string, unknown][] | null): object =>
  items ? Object.fromEntries(items) : {};

export default fromEntries;
