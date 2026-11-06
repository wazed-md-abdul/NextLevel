class LivingObject {
    name;
    age;
    // name: string;
    // age: number;
    // constructor(nam: string, age: number) {
    //   this.name = nam;
    //   this.age = age;
    // }
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}
const Toha = new LivingObject("Toha", 0);
console.log(Toha.getDetails());
export {};
