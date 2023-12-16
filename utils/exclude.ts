type T0 = Exclude<"a" | "b" | "c", "a">; // same as: type T0 = "b" | "c"

type T1 = Exclude<"a" | "b" | "c", "a" | "b">; // same as: type T1 = "c"
