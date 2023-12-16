type P0 = Parameters<() => void>; // []

type P1 = Parameters<
  (s: string, n: number, obj: { func: () => void; val: never }) => void
>;

declare function func(p1: number, p2: string): void;

type P2 = Parameters<typeof func>;

type P3 = Parameters<(val: never, val1: unknown) => void>;
