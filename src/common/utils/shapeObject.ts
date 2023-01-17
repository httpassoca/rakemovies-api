export function shapeObject<T>(object: T): T {
  // @ts-ignore
  Object.keys(object).forEach(key => {
    if (
      // @ts-ignore
      object[key] === undefined ||
      // @ts-ignore
      object[key] === null ||
      // @ts-ignore
      object[key] === ''
    ) {
      // @ts-ignore
      delete object[key];
    }
  });

  return object;
}

export default shapeObject;
