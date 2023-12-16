// makes props into a readonly state

interface UserComment {
	user: string;
	text: string;
}

const mycomment: Readonly<UserComment> = {user: "alex", text: "awesome comment"}

// mycomment.user = "me" 	// raises error

