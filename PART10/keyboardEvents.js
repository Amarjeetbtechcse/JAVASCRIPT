// let ipt = document.querySelector("input");
// ipt.addEventListener("keydown", function(){
//     console.log("key was pressed");
// });

let ipt = document.querySelector("input");
ipt.addEventListener("keyup", function(event){
    console.log("key = ", event.key);
    console.log("code =", event.code);
    console.log(event);

    console.log("key was pressed");
});