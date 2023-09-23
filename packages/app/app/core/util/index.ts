export const isObjectEmpty = (obj: Record<string, unknown>) =>
  Object.keys(obj).length > 0 ? false : true;

export const areValuesValid = (obj: Record<string, unknown>) => {
  for (const key in obj) {
    const value = obj[key];
    if (
      value === null ||
      value === undefined ||
      (typeof value === 'string' && value.trim() === '')
    ) {
      return false;
    }
  }
  return true;
};
