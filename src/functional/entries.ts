const entries = (obj: object): [string, unknown][] =>
  obj ? Object.entries(obj) : [];

export default entries;
