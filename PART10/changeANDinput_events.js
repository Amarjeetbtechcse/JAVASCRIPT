let form = document.querySelector("form"); // Select the form element
let user = document.querySelector("#user"); // Select the username input by its ID

form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents form submission
});

user.addEventListener("change", function() {
    console.log("change event");
    console.log("final value= ", this.value);
});

user.addEventListener("input", function() {
    console.log("input event");
    console.log("final value= ", this.value);
});
