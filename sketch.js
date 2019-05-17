let resetButton = document.getElementById("reset");
let numberBox = document.getElementById("width");
let gridContainer = document.getElementById("gridContainer");
let radioBlack = document.getElementById("black");
let radioRandom = document.getElementById("random");
let numBoxes = 16;

createGridDiv();

function createGridDiv(){
    for(let i = 0; i < numBoxes*numBoxes; i++){
        let div = document.createElement('div');
        div.style.backgroundColor = 'white';
        div.classList.add('box');
        div.style.filter = "brightness(100%)";
        div.addEventListener("mouseover", chooseColor);
        gridContainer.appendChild(div);
  }
}

function chooseColor(){
    if(radioBlack.checked){
        if(this.style.backgroundColor != "black"){
            let brightness = parseFloat(this.style.filter.match(/\d+/));
            this.style.filter = `brightness(${brightness-10}%)`;
        }
    }
    else if(radioRandom.checked){
        if(this.style.backgroundColor == "white"){
            this.style.backgroundColor = randomColor();
        }
    }
}

function randomColor(){
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}

radioBlack.addEventListener('input', (e) =>{
    gridContainer.innerHTML = "";
    createGridDiv();
});

radioRandom.addEventListener('input', (e) =>{
    gridContainer.innerHTML = "";
    createGridDiv();
});

resetButton.addEventListener('click', () => {
    const divs = document.querySelectorAll(".box");
    divs.forEach(box => {
        box.style.backgroundColor = 'white';
        box.style.filter = "brightness(100%)";
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


