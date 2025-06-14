let a=1, b=2;
let op = '*+/-';
let result;
switch(op){
    case '+': result = a+b;
    break;
    case '-': result = a-b;
    break;
    case '/': result = a/b;
    break;
    case '*': result = a*b;
    break;
    default: result = 'Invalid';
}
console.log(result);