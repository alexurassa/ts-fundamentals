type E0 = Extract<"a" | "b" | "c" | "d", "b" | "c">; // same as: type E0 = "b" | "c"

type E1 = Extract<(() => void) | string | number, Function | string>; // same as: type E1 = (() => void) | string

// Examples
const myFunc: E1 = (): string => "how are you?>";

const myFunc1: E1 = () => {};
