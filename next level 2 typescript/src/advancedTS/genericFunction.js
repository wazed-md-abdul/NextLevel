// // 2. Make the function using that type
const createArrayWithString = (param) => {
    return [param];
};
// 2. Make the function using the generic type
const createArrayWithGeneric = (param) => {
    return [param];
};
const result1 = createArrayWithGeneric("Hello Generic");
const result2 = createArrayWithGeneric(100);
console.log(result1, result2);
const fun = (param1, param2) => {
    return [param1, param2];
};
export {};
// const result3 = fun(100);
// const result4 = fun(100, 200)
