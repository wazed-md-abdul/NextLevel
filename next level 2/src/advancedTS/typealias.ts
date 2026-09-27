// const user1: {
//     id: number;
//     name: {
//         firstName: string;
//         lastName: string;
//     };
//     address: {
//         street: string;
//         city: string;
//         state: string;
//         zip: string;
//     };
//     gender: "male" | "female";

// } = {
//     id: 1,
//     name: {
//         firstName: "John",
//         lastName: "Doe"
//     },
//     address: {
//         street: "123 Main St",
//         city: "New York",
//         state: "NY",
//         zip: "10001"
//     },
//     gender: "male"
// }
// type User2 = {
//     name: string;
//     age: number;
//     email: string;
//     phone: number;
//     address: {
//         street: string;
//         city: string;
//         state: string;
//         zip: string;
//     };
//     gender: "male" | "female";
// }

// const user2: User2 = {
//     name: "John",
//     age: 30,
//     email: "[EMAIL_ADDRESS]",
//     phone: 1234567890,
//     address: {
//         street: "123 Main St",
//         city: "New York",
//         state: "NY",
//         zip: "10001"
//     },
//     gender: "male"
// }
// const user3: User2 = {
//     name: "John",
//     age: 30,
//     email: "[EMAIL_ADDRESS]",
//     phone: 1234567890,
//     address: {
//         street: "123 Main St",
//         city: "New York",
//         state: "NY",
//         zip: "10001"
//     },
//     gender: "male"
// }

// type User3 = (firstName: string, lastName: string) => {
//     firstName: string;
//     lastName: string;
// }

// const user3: User3 = (firstName, lastName) => {
//     return {
//         firstName,
//         lastName
//     }
// }

// console.log(user3("John", "Doe"))
