let str = "Apple";
let vowels = "aeiouAEIOU";
let vowelsInString = [];
let consonantsInString = [];
for (char of str){
    if (vowels.includes(char)){
        vowelsInString.push(char);
    }
    else {
        consonantsInString.push(char);
    }
}
console.log(vowelsInString);
console.log(consonantsInString);
