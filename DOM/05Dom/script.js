const red = document.querySelector(".red");
const orange = document.querySelector(".orange");
const yellow = document.querySelector(".yellow");

const center = document.querySelector(".center");

// console.log(window.getComputedStyle(red).backgroundColor); //Red color rgb number er jonno short cut

const getBGColor = (selectedElement) => {
    return window.getComputedStyle(selectedElement).backgroundColor;
}
// console.log(getBGColor(orange));


// var color = getBGColor(orange);  //mouse event is working
// orange.addEventListener("mouseenter", () => {
//     center.style.background = color;
// });

const magicColorChanger = (element,color) =>{ //it is working
    return element.addEventListener("mouseenter",()=>{
        center.style.background = color;
    });
};

magicColorChanger(red,getBGColor(red));
magicColorChanger(orange,getBGColor(orange));
magicColorChanger(yellow,getBGColor(yellow));










