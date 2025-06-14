let pal = "Madam";
let revPal = pal.split("").reverse().join("");
if (pal === revPal){
        console.log(pal, "is Palindrome");
    }
    else {
        console.log(pal, "is not a Palindrome");
    }

    //-----------------Case sensitivity - not working