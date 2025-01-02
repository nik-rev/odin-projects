const typeSafeObjectFromEntries = <
  const T extends ReadonlyArray<readonly [PropertyKey, unknown]>,
>(
  entries: T,
): { readonly [K in T[number] as K[0]]: K[1] } => {
  return Object.fromEntries(entries) as {
    readonly [K in T[number] as K[0]]: K[1];
  };
};

export default typeSafeObjectFromEntries;
