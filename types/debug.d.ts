/* eslint "@typescript-eslint/ban-types": "off" -- Would otherwise error and flag the two types below */

// These types are for debugging purposes only.

// Expands a type by one level
type $<T> = T extends (...args: infer A) => infer R
  ? (...args: $<A>) => $<R>
  : T extends infer O
    ? { [K in keyof O]: O[K] }
    : never;

// Expands a type by an infinite number of levels
type $$<T> = T extends (...args: infer A) => infer R
  ? (...args: $$<A>) => $$<R>
  : T extends object
    ? T extends infer O
      ? { [K in keyof O]: $$<O[K]> }
      : never
    : T;
