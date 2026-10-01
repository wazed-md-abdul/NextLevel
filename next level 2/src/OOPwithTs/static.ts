class Counter {
static count: number = 0;
static  increment() {
   return Counter.count++;
  }
  static decrement() {
    return Counter.count--;
  }
 static get getCount() {
    return Counter.count;
  }
static set setCount(value: number) {
    Counter.count = value;
  }
}

console.log(Counter.getCount)
console.log(Counter.setCount = 10)
console.log(Counter.getCount)



// const instance1 = new Counter();
// console.log(instance1.increment())
// console.log(instance1.increment())
// // console.log(instance1.increment())
// // console.log(instance1.decrement());
// // console.log(instance1.getCount);

// const instance2 = new Counter();

// console.log(instance2.getCount);
