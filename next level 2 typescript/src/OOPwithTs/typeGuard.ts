type alphaNum = string | number;
const add = (a: alphaNum, b: alphaNum) => {
  if (typeof a === 'string' && typeof b === 'string') {
    return a + b;
  }
  else {
    return a.toString() + b.toString();
  }
}
add(1, 2);
add('a', 'b');
