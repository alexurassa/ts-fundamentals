interface DemoPerson {
    fname: string;
    lname: string;
    bio: string;
    city: string;
}

type PersonName = Omit<DemoPerson, "bio" | "city">

const personName: PersonName = {fname: "", lname: ""}
