async function greet(){
    // hello.hii();
    throw "404 page not found";
    return ("hello");
}

greet()
.then( (result) =>{
    console.log("promise was resolved");
    console.log("result was : ", result);
})
.catch( (err) => {
    console.log("promise was rejected with error: ", err);
})


////ARROW FUNCTION AS async:
// let demo = async() =>{
//     return 5;
// }