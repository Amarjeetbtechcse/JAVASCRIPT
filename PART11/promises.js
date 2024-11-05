////BY USING CALLBACKS
// function savetoDb(data , success, failure) {
//     let internetSpeed = Math.floor(Math.random() *10) + 1;
//     if(internetSpeed >4) {
//         success();
//     }else {
//         failure();
//     }
// }
// savetoDb(
//     "Bhagat singh", 
//     () => {
//     console.log("Data was saved");
//     savetoDb(
//         "hello world",
//         () => {
//             console.log("success 2: data 2 saved");
//             savetoDb("amarjeet", () => {
//                 console.log("success 3: data 3 saved");
//             }, () => {
//                 console.log("failure 3: weak connection");
//             })
//         },
//         () => {
//             console.log("failure 2: weak connection");
//         }
//     )
// },
//     () => {
//         console.log("weak connection, data wasn't saved");
//     }
// );








// //ABOVE CODE IS CALLBACKS HELL CASE NOW SEE THE PROMISES OPTIMIZATION
// function savetoDb(data) {
//     return new Promise((resolve, reject) => {
//         let internetSpeed = Math.floor(Math.random() * 10) + 1;
//         if(internetSpeed > 4){
//             resolve("success: data was saved");
//         }else {
//             reject("failure : weak connection");
//         }
//     });
// }
// console.log(savetoDb("bhagat singh"));






// //PROMISES .then() & .catch() property
// function savetoDb(data) {
//     return new Promise((resolve, reject) => {
//         let internetSpeed = Math.floor(Math.random() * 10) + 1;
//         if (internetSpeed > 4) {
//             resolve("success: data was saved");
//         } else {
//             reject("failure : weak connection");
//         }
//     });
// }

// let request = savetoDb("bhagat singh")
//     .then((message) => {
//         console.log("promise resolved");
//         console.log(message);
//     })
//     .catch((error) => {
//         console.log("promise rejected");
//         console.log(error);
//     });









// // PROMISES CHAINING
// function savetoDb(data) {
//     return new Promise((resolve, reject) => {
//         let internetSpeed = Math.floor(Math.random() * 10) + 1;
//         if (internetSpeed > 4) {
//             resolve("success: data was saved");
//         } else {
//             reject("failure : weak connection");
//         }
//     });
// }

// savetoDb("bhagat singh")
// .then(() =>{
//     console.log("data 1 saved");
//     return savetoDb("hello world");
// })
// .then(() =>{
//     console.log("data 2 saved");
//     return savetoDb("amarjeet");
// })
// .then(() =>{
//     console.log("data 3 saved");
// })
// .catch(() =>{
//     console.log("promises were rejected");
// });

