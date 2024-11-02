// let btn = document.querySelector("button");
// console.dir(btn);
// btn.onclick = function(){
//     alert("button was clicked");
// };



// let btn = document.querySelector("button");
// console.dir(btn);
// function sayHello(){
//     alert("Hello");
// }
// btn.onclick= sayHello;




let btn = document.querySelectorAll("button");

for(btn of btn){
    btn.onclick = sayHello;//don't write like sayHello();
}
function sayHello(){
    alert("Hello");
}






// let btn = document.querySelectorAll("button");
// for(btn of btn){
//     btn.onmouseenter = function(){
//         console.log("you entered a button");
//     }
// }


