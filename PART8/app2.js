// let num = [1,2,3,4,5];

// let double = num.map((el)  =>  {
//     return el*2;
// });
// console.log(double);
// console.log(num);









// let students = [
//     {
//         name:"aman", 
//         marks: 99
//     },
//     {
//         name:"honey", 
//         marks: 93.45
//     },
//     {
//         name:"raju", 
//         marks: 92
//     },
// ];
// let gpa = students.map((el)  => {
//     return el.marks / 10;
// })

// console.log(gpa) 








// let nums =[1,2,3,4,5,6,7,8,9,0];
// let ans = nums.filter ((el)  => {
//     return el % 2 == 0;//even -> tue, odd ->false
// });
// console.log(ans);
 










// let nums =[1,2,3,4,5,6,7,8,9,0];
// let ans = nums.filter ((el)  => {
//     return el % 2 != 0;//odd -> tue, even ->false
// });
// console.log(ans);
 







// let arr = [2,4,9];
// let ans = arr.every((el)  => {
//     return el%2 == 0;
// })
// console.log(ans);







// let arr = [2,3,9];
// let ans = arr.some((el)  => {
//     return el%2 == 0;
// })
// console.log(ans);








// //REDUCE
// let arr = [1,2,3,4,5];
// let answer = arr.reduce((result, el)  =>{
//     console.log(result);
//     return result + el;
// },);
// console.log(answer);






// //MAXIMUM USING REDUCE AMONG SOME NUMBER
// let nums = [2,3,4,5,3,4,7,8,1,2];

// let result = nums.reduce((max, el)  =>{
//     if (el > max){
//         return el;
//     }else{
//         return max;
//     }
// })
// console.log(result);










// //Check if all numbers in our array are multiples of 10 or not 
// let nums = [10,20,30,45];

// let ans = nums.every ((el) => el % 10 ==0);
// console.log(ans);




// // DEFAULT PARAMETERS
// function sum(a,b=2) {
//     return a+b;
// }
// console.log(sum(18,1));
// console.log(sum(8));








// console.log(..."apnacollege");

// let arr = [1,2,3,4,5];

// console.log(Math.min(...arr));
// console.log(...arr);






// //SPREAD WITH ARRAY LITERAL

// let arr = [1,2,3,4,5];
// let newArr = [8,...arr,6,5];

// console.log(newArr);






// let data = {
//     email: "ironman@gmail.com",
//     password: "abcd",
// };
// dataCopy = {
//     ...data, id : 123
// };

// console.log(dataCopy);






// function sum(...args) {
//     return args.reduce((sum, el) => sum + el);
// }

// console.log(sum(3,3,3,3,2,5,9));





const student = {
    name: " karan", 
    age : 14, 
    class: 8, 
    subjects: ["hindi","english", "math","science"],
    username: "karan@123",
    password:"abcd",
};

let {"username:user,  password:secret, city:place =  mumbai } = student;


// // console.log(username);
// console.log(user);
// // console.log(password);
// console.log(secret);
