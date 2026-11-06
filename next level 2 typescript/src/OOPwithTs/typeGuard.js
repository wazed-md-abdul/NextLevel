const add = (a, b) => {
    if (typeof a === 'string' && typeof b === 'string') {
        return a + b;
    }
    else {
        return a.toString() + b.toString();
    }
};
add(1, 2);
add('a', 'b');
export {};
