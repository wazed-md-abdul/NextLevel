type Generic<T> = Array<T>
// const friends: Generic<number> = [1, 2, 3]
// console.log(friends)


type User = {
    name: string;
    age: number;
};

const userList: Generic<User> = [
    {
        name: "Mr. X",
        age: 22,
    },
    {
        name: "Wazed",
        age: 22,
    },
];

for (const element of userList) {
    for (const key2 in element) {
        if (!Object.hasOwn(element, key2)) continue;

        const element2 = element[key2 as keyof User];
        console.log(key2, element2);
    }
}