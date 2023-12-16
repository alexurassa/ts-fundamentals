// creates type from return type of a func

type T0 = ReturnType<<T extends string>() => T> // same as: type T0 = string
