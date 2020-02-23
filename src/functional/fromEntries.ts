const fromEntries = (items: [string, unknown][]): object =>
  items ? Object.fromEntries(items) : {};

export default fromEntries;
