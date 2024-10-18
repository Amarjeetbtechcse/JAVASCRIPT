//  console.log("hello");
//  console.log("hello");
 
// //  let a = 8;
//  try{
//     console.log(a);
//  }

//  catch(err) {
//     console.log("caught an error... ");
//     console.log(err);
//  }
//  console.log("INDIA");
//  console.log("India");






// const sum=(a,b) => {
//    console.log(a+b);
// }
// console.log(sum(2,8));


// const cube=(a) => {
//    console.log(a*a*a);
// }
// console.log(cube(5));


// const square=(a) => {
//    return a*a;
// }
// console.log(square(8));




//  const mul = (a,b) => (a*b);
//  console.log(mul(2,8));


// console.log("hi there");

// setTimeout( ()  => {
//    console.log("apna college");
// },  4000);
// console.log("Welcome to");


// console.log("Hi there!");
//  let id = setInterval(() => {
//    console.log("apna college")
// }, 2000);
// console.log("apna gaon");







// const student = {
//    name: "aman",
//    marks: 90,
//    prop: this,  //global scope
//    getName: function(){
//       console.log(this);
//       return this.name;
//    },


// getMarks: () => {
//    console.log(this); //parent's scope  ->window
//    return this.marks;
// },
// getInfo1: function () {
//    setTimeout(() => {
//       console.log(this); //student 
//    }, 2000);
// },

// getInfo2: function () {
//    setTimeout(() => {
//       console.log(this);//window
//    }, 2000);
//   },
// };






//PRACTICE QUES: write a function that prints "Hello World" 5 times at intervals of 2s each.

let id = setInterval (()  => {
   console.log("Hello World");
}, 2000);


setTimeout(() => {
   clearInterval(id);
}, 10000);