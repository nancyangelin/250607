//set, get, has, delete, clear, size  
let myMap = new Map([
    ["name", "abc"],
    ["age", 20],
    ["address", "TN"]
]);
console.log(myMap);
myMap.set("Work", "IR"); 
console.log(myMap);
console.log(myMap.get("age"));
console.log(myMap.has("Work"));
console.log(myMap.delete("Work"));
console.log(myMap);
console.log(myMap.size);
myMap.clear();
console.log(myMap);

//double numbers
let num = [1, 2, 3, 4, 5]
let doubleNum = num.map(function(n){ //*
    return n*2
})
console.log(`Numbers: ${num} \n Doubled: ${doubleNum}`);

//to Upper Case
let fruits = ["apple", "orange", "banana"]
let upperCase = fruits.map(val=>val.toUpperCase());
console.log(`Fruits: ${fruits} \n Upper_Case: ${upperCase}`);

// //With objects:
// let users = [
//     {name: "abc", age: 25},
//     {name: "def", age: 35},
//     {name: "ghi", age: 45}
// ];
// let names = users.map(val=>val.name);
// console.log(names);                         //extract name

// let userUpdate = users.map(val=>({...val, city: "Chennai"}));
// console.log(userUpdate);    //------------------------------------------------------CODE NOT WORKING


