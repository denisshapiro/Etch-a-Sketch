let resetButton = document.getElementById("reset");
let numBoxes = 16;

createGridDiv(numBoxes);

function createGridDiv(boxesPerSide){
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





