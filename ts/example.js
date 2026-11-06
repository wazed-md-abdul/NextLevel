function divide(a, b) {
    if (b == 0)
        throw new Error('division by zero is not allowed');
    return a / b;
}
console.log(divide(100, 20));
const result = divide(20, 30);
export {};
