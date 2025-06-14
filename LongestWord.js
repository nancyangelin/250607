let sentence = "orange is a fruit";
function long(sentence){
    let words= sentence.split(" ");
    let longest = "";
    for(let word of words){
        if(word.length>longest.length){
            longest = word;
        }
    }
    return longest;
}
let longestW = long(sentence);
console.log(longestW);            //-----------prints first longest*

