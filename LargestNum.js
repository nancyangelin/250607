let num = [1, 2, 3, 4, 5, 6];
//Math.max
let largest1 = Math.max(...num);
console.log(largest1);
//with loop
let largest2 = num[0];
for (i=1; i<num.length; i++){
    if (num[i]>largest2){
        largest2 = num [i]
    }
}
console.log(largest2);