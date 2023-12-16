// constructs a type by excluding nullable types
type N0 = NonNullable<string | undefined | null>; // same as: type N0 = string

type N1 = NonNullable<undefined | null | string[]>; // same as: type N1 = string[]
