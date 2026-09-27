// const name: string = "John";
// const age: number = 30;
// const isStudent: boolean = false;
// const job: string | undefined = "Developer";

// function greet(): void {
//     console.log(`Hello, my name is ${name}. I am ${age} years old.`);
// }


// let name: [string, string] = ["John", "Doe"];
// const fame = ["hi"] as const

// fame.push("hello")
// console.log(fame);


// const fame: (string | number)[] = ["hi"]
// fame.push(12);
// console.log(fame)


// const fame: readonly [string, number, boolean] = ["hi", 12, true]

// fame.push("hello")

// console.log(fame)


// type User = {
//     name: string;
//     age: number;
//     isStudent: boolean;
//     job: string | undefined;
// }

// const user: User = {
//     name: "John",
//     age: 30,
//     isStudent: false,
//     job: "Developer"
// }

// const newUser: User = { ...user, age: 31 }

// console.log(newUser)
// type User = {
//     readonly name: string
//     age: number
//     isStudent: boolean
//     job: string | undefined
// }

// const user: User = {
//     name: "John",
//     age: 30,
//     isStudent: false,
//     job: "Developer"
// }

// user.name = "Jane"

// console.log(user)
