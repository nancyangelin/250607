let arr = [12, 54, 53, 47, 89, 84, 75, 24, 58];
let evenNos = [];
let oddNos = [];
for (i=1; i<arr.length; i++) {
    if (arr[i] % 2 === 0){
        evenNos.push(arr[i]);
    }
    else {
        oddNos.push(arr[i]);
    }

}
console.log(evenNos);
console.log(oddNos);