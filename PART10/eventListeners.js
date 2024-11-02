// Select all buttons on the page
let btns = document.querySelectorAll("button");

// Loop through each button and add event listeners
for (const btn of btns) {
    // Add a click event listener to call sayHello function
    btn.addEventListener("click", sayHello);

    // Add another click event listener to call sayName function
    btn.addEventListener("click", sayName);

    // Add a double-click event listener to call sayAddress function
    btn.addEventListener("dblclick", sayAddress);

    // Add another click event listener to log "button clicked" to the console
    btn.addEventListener("click", function () {
        console.log("button clicked");
    });
}

// Function to display a greeting alert
function sayHello() {
    alert("Hello");
    alert("How are you?");
}

// Function to prompt the user to enter their name
function sayName() {
    alert("Name alert");
    prompt("Enter your name:");
}

// Function to prompt the user to enter their address
function sayAddress() {
    alert("Address alert");
    prompt("Enter your address:");
}
