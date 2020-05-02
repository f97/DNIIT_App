export const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
export const truncate = (source, size) =>
  source.length > size ? `${source.slice(0, size - 1)}…` : source;
