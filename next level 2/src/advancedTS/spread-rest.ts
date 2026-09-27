// const user = {
//     id: 1,
//     name: "John",
//     email: "[EMAIL_ADDRESS]",
//     password: "[PASSWORD]",
//     role: "admin",
//     createdAt: new Date(),
//     updatedAt: new Date()
// }

// const { id, name, email, ...rest } = user
// console.log(rest)
// console.log({ ...user, name: "new name" })



type Userrole = "admin" | "user" | "editor" | "viewer";
const getDashboard = (role: Userrole) => {
    return role;
}

console.log(getDashboard("admin"))