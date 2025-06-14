let a = [1, 2, 3, 4, 5];
console.log(a);
//with "reverse"
a.reverse();
console.log(a);
// //with loop
let reversed = [];
for (let i = a.length - 1; i >= 0; i--) {
  reversed.push(a[i]);
}
console.log(reversed);