// The Required<Type> utility makes all fields required (the opposite of partial)

type GenderType = "M" | "F"

interface DemoPerson {
    gender?: GenderType;
    address?: string;
}

const student: Required<DemoPerson> = {gender: "M", address: "address"}
