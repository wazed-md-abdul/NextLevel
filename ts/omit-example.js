const users = [];
let lastId = 0;
function addUser(newUser) {
    const user = {
        id: ++lastId,
        ...newUser
    };
    users.push(user);
}
addUser({ username: "saima", email: "[EMAIL_ADDRESS]", age: 20 });
addUser({ username: "wazed", email: "[EMAIL_ADDRESS]", age: 30 });
console.log(users);
export {};
// function removeUser(id: number) {
//     const index = users.findIndex(user => user.id === id)
//     if (index !== -1) {
//         users.splice(index, 1)
//     }
// }
