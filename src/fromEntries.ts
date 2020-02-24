const fromEntries = (items?: [string, unknown][] | null): object =>
  items ? Object.fromEntries(items) : {};

export default fromEntries;
