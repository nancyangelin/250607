let num = [5, 12, 3, 25, 32, 5];
//using "sort"
num.sort(function(a, b) {
  return b-a; 
});

console.log(num); 

//with loops/swapping
for(i=0;i<num.length-1;i++){
    for (j=0;j<num.length-i-1;j++){   //*
        if (num[j]<num[j+1]){
            let dummy = num[j];
            num[j] = num[j+1];
            num[j+1] = dummy;
        }
    }
}
console.log(num);
