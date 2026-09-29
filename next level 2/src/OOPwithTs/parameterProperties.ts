 class LivingObject {
   // name: string;
   // age: number;

   // constructor(nam: string, age: number) {
   //   this.name = nam;
   //   this.age = age;
   // }

   constructor(public name: string, public age: number) {
   }

   getDetails(): string {
     return `Name: ${this.name}, Age: ${this.age}`;
   }

 }


 const Toha = new LivingObject("Toha", 0);
 console.log(Toha.getDetails());
