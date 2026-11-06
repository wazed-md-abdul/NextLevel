const userList = [
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
        if (!Object.hasOwn(element, key2))
            continue;
        const element2 = element[key2];
        console.log(key2, element2);
    }
}
export {};
