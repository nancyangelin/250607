function prime(num){
    if (num <=1 ) return false;
    if (num === 2) return true;

    for (let i=2; i<=Math.sqrt(num); i++){
        if (num%i === 0) return false;
            };
            return true;
        }
    for (i=1;i<=20;i++){
        if(prime(i)){
            console.log(i)
        }
}