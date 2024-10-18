// //  QUES: Create a func that prints a poem
// function writePoem(){
//     console.log("Twinkle Twinkle little star how i wonder what your are ? ");
//  }
//  writePoem(); 




// //QUES:  Create a function to roll a dice & always display the value of dice (1 to 6)
//  function rollDice(){
//     let rand = Math.floor(Math.random()* 6) + 1;
//     console.log(rand);
//  }
// rollDice();
// rollDice();
// rollDice();
// rollDice();
// rollDice();
// rollDice();



// FUNCTION WITH PASSING ARGUMENTS 
function sum (a,b){
    console.log(a*b);

}
sum(2,8);




function printName (name){
     console.log(name);
}
 printName("amarjeet");
 printName("Raju");
 printName("Raghav");
 printName("Rajnath singh");



 function printInfo (name, age){
    console.log(name, age);
 }

 printInfo("amarjeet", 18);
 printInfo("Raju", 55);
 printInfo("rahul", 25);



 //QUES: Create a function that gives us the average of 3 numbers.
 function avgNum (a,b,c){
    console.log((a+b+c)/3);

 }

 avgNum(2,3,7);



  //QUES: Create a function that gives us the multiplication table of numbers.
  function printTable(n) {
    for (let i = 1; i <= 10; i++) {
        console.log(n * i);
    }
}

// Call the function with the desired value of n
printTable(2);
