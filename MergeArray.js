let a = [1, 2, 3];
let b = [4, 5, 6];
//using spread operator
let merged = [...a, ...b];
console.log(merged);
//using concat
let merged2 = a.concat(b);
console.log(merged2);
//using loop
let merged3 = [];
for (i=0; i<a.length; i++){
    merged3.push(a[i]);
}
for (i=0;i<b.length; i++){
    merged3.push(b[i]);
}
console.log(merged3);
