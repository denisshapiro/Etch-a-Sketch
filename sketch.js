//const div = document.createElement('div');
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
        this.style.backgroundColor = "red";
    }
}
