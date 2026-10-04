// type User<T, Y> = [T, Y]
// type RollNo = number;

// const user1: User<string, RollNo> = ["Mr. X", 100]

// console.log(user1[0])



// interface Person<T, Y> {
//     name: T,
//     age: Y
// }

// const person1: Person<string, number> = {
//     name: "Mr. X",
//     age: 100
// }

// console.log(person1.name)




interface Developer<T, Y, X> {
    name: T,
    age: Y,
    skill: string,
    isProgrammer: boolean
    device: X
}


const juniorDev = {
    name: "Mr. X",
    age: 22,
    skill: "JavaScript",
    isProgrammer: true,
    device: {
        name: "MacBook Pro",
        model: "M1",
        isMechanical: true
    }
}


const SeinorDev: Developer<string, number, { name: string, model: string, isMechanical: boolean }> = {
    name: "Mr. X",
    age: 100,
    skill: "JavaScript",
    isProgrammer: true,
    device: {
        name: "MacBook Pro",
        model: "M1",
        isMechanical: true

    }
}