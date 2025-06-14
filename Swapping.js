let a = 5;
let b = 6;

let dummy = a;
a = b;
b = dummy;

console.log(`a = ${a}`);
console.log(`b = ${b}`);