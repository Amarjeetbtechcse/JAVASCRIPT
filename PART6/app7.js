

////FUNCTION SCOPE
// let sum = 38;//global scope 

// function calSum(a,b){
//     let sum = a+b;//function scope 
//     console.log(sum);

// }
// calSum(1,3);
// console.log(sum);





// //BLOCK SCOPE
// let age = 25;
// if (age >= 18){
//     let str = "adult";
//     console.log(str);
// }





//LEXICAL SCOPE
function outerFunc(){
    let x = 5;
    let y = 6; 
    function innerFunc(){
        let a = 10;
        console.log(x);
        console.log(y);
        console.log(a);
    }
        console.log(x);
        console.log(y);
        console.log(a);
        innerFunc();
}









