function merge<T extends Object>(toMerge: T) {
    return function <V extends Object>(target: V) {
        for(let prop in toMerge) {
            (target as any).prototype[prop] = toMerge[prop]
        }
    }
}

interface DemoUser {
    fname: string;
    lname: string;
    age?: number;
}


let user: Required<DemoUser> = {fname: "Alex", lname: "Urassa", age: 20}

@merge(user)
class DemoPerson {
    constructor() {}
}

const demoPerson: DemoPerson = new DemoPerson()

console.log(`fname: ${(demoPerson as DemoUser).fname}`)
console.log(`lname: ${(demoPerson as DemoUser).lname}`)

// @ts-ignore
console.log(`age: ${(demoPerson as DemoUser).age}`)
