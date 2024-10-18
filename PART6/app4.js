function sum(a,b,){
    return a+b;
}
 console.log(sum(83.8,83));
 







 function isAdult(age) {
    if (age >= 18){
        return "adult";
    }
    else {
        return "not adult";
    }
 }    

 console.log(isAdult(19));









function getSum(n){
    let sum = 0;

    for (let i=1; i<=n; i++){
        sum = sum + i ;
    }
    return sum;
}
console.log(getSum(9));







let str = ["hi", "hello", "bye", "!"];

function concat(str) {
    let result = "";  // Initialize result to an empty string

    for (let i = 0; i < str.length; i++) {
        result += str[i];
    }
    return result;
}

console.log(concat(str));  // Output: "hihellobye!"
