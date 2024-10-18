//   let todo = [];

//   let request = prompt("Please enter your request");

//   while(true){
//     if(request == "quit"){
//         console.log("quitting app");
//         break;
//     }

//     if(request == "list"){
//          for (let i=0; i<todo.length; i++){
//             console.log(i, todo[i]);
//         }
//      }
//     else if(request == "add"){
//         let task = prompt("please enter the task you want to add ");
//         console.log("task added");
//     }
//     else if (request == "delete"){
//         let index = prompt ("please  enter the task  index");
//         todo.splice(index, 1);
//         console.log("task deleted");

//     }
//     else{
//         console.log("wrong request");
//     }
//     request = prompt("Please enter your request");
//   }

let todo = [];

let request = prompt("Please enter your request");

while (true) {
    if (request === "quit") {
        console.log("quitting app");
        break;
    } else if (request === "list") {
        for (let i = 0; i < todo.length; i++) {
            console.log(i + ": " + todo[i]);
        }
    } else if (request === "add") {
        let task = prompt("Please enter the task you want to add");
        todo.push(task);
        console.log("task added:", task);
    } else if (request === "delete") {
        let index = prompt("Please enter the task index to delete");
        index = parseInt(index);
        if (index >= 0 && index < todo.length) {
            let deletedTask = todo.splice(index, 1);
            console.log("task deleted:", deletedTask);
        } else {
            console.log("Invalid index");
        }
    } else {
        console.log("wrong request");
    }
    request = prompt("Please enter your request");
}
