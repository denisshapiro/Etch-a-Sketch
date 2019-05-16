let resetButton = document.getElementById("reset");
let numberBox = document.getElementById("width");
let gridContainer = document.getElementById("gridContainer");
let numBoxes = 16;

createGridDiv();

function createGridDiv(){
    for(let i = 0; i < numBoxes*numBoxes; i++){
        let div = document.createElement('div');
        div.style.backgroundColor = 'white';
        div.classList.add('box');
        div.addEventListener("mouseover", chooseColor);
        gridContainer.appendChild(div);
  }
}

function chooseColor(){
    if(this.style.backgroundColor == "white"){
        this.style.backgroundColor = randomColor();
    }
}

function randomColor(){
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}

resetButton.addEventListener('click', () => {
    const divs = document.querySelectorAll(".box");
    divs.forEach(box => {
        box.style.backgroundColor = 'white';
    });
});

numberBox.addEventListener('input', (e) => {
    console.log(numberBox.value);
    numBoxes = numberBox.value;
    gridContainer.innerHTML = "";
    createGridDiv();
    gridContainer.style.gridTemplateColumns = `repeat(${numBoxes}, ${1}fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${numBoxes}, ${1}fr)`;
});

//style.gridTemplateColumns = `repeat(${newGrid}, ${800/newGrid}px)`
//repeat(numboxes, 1fr);


