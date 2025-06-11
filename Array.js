// Initial list of colors
let colors = ["red", "green"];

// Add new colors at the end
colors.push("blue");
colors.push("yellow", "purple");

// Print the updated array
console.log("Updated color list:", colors);

let num1 = [1, 2, 3, 4, 5];   //array literal
let num2 = new Array (6, 7, 8, 9, 10)   //array constructor

console.log("1. Array elements:", num1); 

console.log("2. Element 0:", num1[0]);

console.log("3. Last element:", num1[num1.length-1]);

num1[0] = 11;
console.log("4. 1 modified to 11:", num1);

num1.push(6); //add element at last
console.log("5. 6 pushed:", num1.push()); //check - console.log("5. 6 pushed:", num1.push(8));

num1.unshift(8); //add element at begining
console.log("6. Unshift 8:", num1);

num1.pop() //removes last element
console.log("7. Pop:", num1);

num1.shift() //removes first element
console.log("7. Shift:", num1); 

num1.length = 5; //set array length to 5
console.log("8. Assigned length:", num1);

for (i=0; i<num1.length; i++) { //acess array elements with for loop
    console.log(num1[i])
}

num1.forEach(function numEach(x) { //acess array elements with forEach
    console.log(x);
    })

num1.toString(); //to String
console.log("9 toString:", num1);

console.log("Seperator: ", num1.join('|')); //seperator |

delete num1[2]; //delete array[index]
console.log("Deleted Index 2:", num1);

num3=num1.concat(num2); 
console.log("Concatenation:", num3);

let num4 = [[1, 2], [3, 4, [5, 6]], 7]; //flatten nested arrays
console.log("Flat with Infinity:", num4.flat(Infinity));

let num5 = [1, 2, 3, 4, 5, 6, 7, 8]
num5.splice(0, 2); //Splice 
console.log("Splice:", num5);    //check slice

console.log("Some:", num5.some((val)=>val>+4)); //some - boolean
console.log("Filter:", num5.filter((val)=>val>+4)); //filter

let num6 = (num5.map(Math.sqrt)); //map
console.log("Mapping:", num6);

console.log("Reverse", num5.reverse()) //reverse

