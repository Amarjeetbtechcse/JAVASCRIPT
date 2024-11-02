let btn = document.querySelector("button");

btn.addEventListener("click", function() {
    // Call the getRandomColor function to get a random color
    let randomColor = getRandomColor();

    // Select the h3 element and set its text to the random color value
    let h3 = document.querySelector("h3");
    h3.innerText = randomColor;

    // Select the div element and set its background color to the random color
    let div = document.querySelector("div");
    div.style.backgroundColor = randomColor;

    console.log("color updated");
});

function getRandomColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    // Use correct template literal syntax for RGB
    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}
