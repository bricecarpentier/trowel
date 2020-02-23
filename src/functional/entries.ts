const entries = (obj: object): [string, any][] =>
  obj ? Object.entries(obj) : [];

export default entries;
