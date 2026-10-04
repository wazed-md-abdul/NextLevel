class Person {
  getSleep() {
    console.log("Sleeping...");
  }

}

class Student extends Person {
  getSleep() {
    console.log("Sleeping...Dreaming...");
  }
}

class NextDev extends Person {
  getSleep() {
    console.log("Sleeping...Dreaming...Coding...");
  }
}
const getSleepingHours = (person: Person): void => {
 person.getSleep()
};

const person1 = new Person();
const person2 = new Student();
const person3 = new NextDev();
getSleepingHours(person1);
getSleepingHours(person2);
getSleepingHours(person3);
