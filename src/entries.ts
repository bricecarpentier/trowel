const entries = (obj?: object | null): [string, unknown][] =>
  obj ? Object.entries(obj) : [];

export default entries;
