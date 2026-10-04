type StringArray = string[];
type NumberArray = number[];

// // 1. Declare a type for the function
type CreateArrayWithString = (param: string) => StringArray;

// // 2. Make the function using that type
const createArrayWithString: CreateArrayWithString = (param) => {
    return [param];
};

// --- Generic Version ---
// 1. Declare a generic function type
type CreateArrayWithGeneric = <T>(param: T) => T[];

// 2. Make the function using the generic type
const createArrayWithGeneric: CreateArrayWithGeneric = (param) => {
    return [param];
};

const result1 = createArrayWithGeneric<string>("Hello Generic");
const result2 = createArrayWithGeneric(100);
console.log(result1, result2);
const fun = <T, U>(param1: T, param2: U) => {
    return [param1, param2];
}
// const result3 = fun(100);
// const result4 = fun(100, 200)
