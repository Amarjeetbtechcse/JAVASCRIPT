h1 = document.querySelector("h1");

function changeColor(color, delay , nextColorChange){
    setTimeout(() => {
    h1.style.color = color;
    if(nextColorChange) nextColorChange();
    }, delay);
}

changeColor("red", 2000, () =>{
    changeColor("blue", 2000, () =>{
        changeColor("orange", 2000, () => {
            changeColor("green", 2000);
        });
    });
});