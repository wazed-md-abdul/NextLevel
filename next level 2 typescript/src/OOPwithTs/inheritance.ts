// class Student {
//   constructor(public name: string, public age: number, public address?: string) {
//   }

//   getSleep() {
//     console.log(`${this.name} is ${this.age} years old and lives at ${this.address}`)
//   }
// }
// const student1 = new Student("John", 20, "123 Main St");
// student1.getSleep();



// class newStudent extends Student {

// }

// const student2 = new newStudent("John", 20, "123 Main St");

class Parent {
  constructor(public name: string, public age: number, public address?: string) {
  }
  getSleep() {
      console.log(`${this.name} is ${this.age} years old and lives at ${this.address}`)
     }
}

class Teacher extends Parent {
  designation: string;


  constructor(des: string, name: string, age: number, address?: string) {
    super(name, age, address);

    this.getSleep()
    this.designation = des;


  }
}


class Student extends Parent {

}


const student3 = new Teacher("Teacher", "John", 20, "123 Main St");
