class LivingObject {
    name;
    age;
    constructor(nam, age) {
        this.name = nam;
        this.age = age;
    }
    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}
const Toha = new LivingObject("Toha", 0);
console.log(Toha.getDetails());
export {};
