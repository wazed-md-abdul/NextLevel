const object = {
    id: 123,
    name: "wazed",
    courseName: "Next Level",
    batch: 7,
    major: "Software Engineering"
}


// const getObjectValue = <T, K extends keyof T>(obj: T, key: K) => {
//     return obj[key]
// }

// console.log(getObjectValue(object, "id"))




type person = {
    id: number,
    name: string,
    courseName: string,
    batch: number,
    major: string
}
type Key = keyof person;
const Keys: Key = "major"
console.log(Keys)

const getObjectValue = <T, K extends keyof T>(obj: T, key: K) => {
    return obj[key]
}
