const fromEntries = (items: [string, any][]): object =>
  items ? Object.fromEntries(items) : {};

export default fromEntries;
