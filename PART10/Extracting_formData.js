let form = document.querySelector("form");
form.addEventListener("submit", function(event){
    event.preventDefault();
    let user = document.querySelector("#user");
    let pass = document.querySelector("#pass");
    //OR (remover line number 4 & 5 and write line 7, 8, & 9)
    // console.dir(form);
    // let user = this.elements[0];
    // let pass = this.elements[1];
    
    console.log(user.value);
    console.log(pass.value);

    alert(`Hi ${user.value}, your password is set to ${pass.value}`);
}); 