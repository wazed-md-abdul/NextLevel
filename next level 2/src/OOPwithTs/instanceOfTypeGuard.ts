// type Universal = {
//    name: string,
//    age: number,
// }
// class Person {
//     name: string;
//     age: number;

//     constructor(universal: Universal) {
//         this.name = universal.name;
//         this.age = universal.age;
//   }
//   getDetails() {
//     return `Name: ${this.name}, Age: ${this.age}`;
//   }
// }

// class Student extends Person {
//     study: number;
//   constructor(universal: Universal, study: number) {

//     super(universal);
//     this.study = study;
//     }

//     takeLession() {
//         console.log(`${this.name} is taking ${this.study} lessions.`);
//     }
// }

// class Teacher extends Person {
//     teach: number;
//     constructor(universal: Universal, teach: number) {
//         super(universal);
//         this.teach = teach;
//     }

//     takeClass() {
//         console.log(`${this.name} is taking ${this.teach} classes.`);
//     }
// }
// const getUserInfo = (person: Student | Teacher) => {
//     if (person instanceof Student) {
//         person.takeLession();
//     } else if (person instanceof Teacher) {
//         person.takeClass();
//     }
// };

// const student = new Student({ name: "wazed", age: 25 }, 5);
// const teacher = new Teacher({ name: "teacher", age: 30 }, 10);
// getUserInfo(student);
// getUserInfo(teacher);
