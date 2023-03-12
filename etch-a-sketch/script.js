const mainContainer = document.getElementById("sketchpad");
const resizeButton = document.getElementById("resize");
const clearButton = document.getElementById("clear");


function createSketchpad (size, defaultSize = false) {

    if (defaultSize == false) {

        const parentContainer = document.getElementsByClassName("subContainer");
        const lenParentContainer = parentContainer.length;

        for (let i = 0; i < lenParentContainer; i++) {

            while (parentContainer[0].firstChild) {
                parentContainer[0].removeChild(parentContainer[0].firstChild);
            }
            parentContainer[0].remove();
        }
        
        size = prompt("What square area do you want?");

        while (size >= 100) {
            alert("The value is greater than or equal to 100.")
            size = prompt("What square area do you want?");
        }
    }

    const containerSize = mainContainer.clientWidth;
    let counter = 0;

    for (let y = 0; y < size; y++) {
        const subContainer = document.createElement('div')
    
        subContainer.style.flex = '1';
        subContainer.style.display = 'flex';
        subContainer.style.flexDirection = 'row';
        subContainer.classList.add('subContainer');
    
        mainContainer.appendChild(subContainer);
        
        for (let x = 0; x < size; x++) {
            const lastContainer = document.createElement('canvas');
            const canvasSize = Math.floor(containerSize / size);
            counter++;
    
            lastContainer.classList.add('lastContainer');
            lastContainer.setAttribute('id', counter.toString());
            lastContainer.style.flex = '1';
            lastContainer.style.width = canvasSize + "px";
            lastContainer.style.height = canvasSize + "px";
            lastContainer.style.margin = "0";
            lastContainer.style.padding = "0";
            lastContainer.onmousemove = draw;
    
            subContainer.appendChild(lastContainer);
        }
    }
}

function draw(event) {

    if (event.buttons == 1) {
        
        let canvasId = event.target.id.toString();
        let selectedCanvas = document.getElementById(canvasId);
        const ctx = selectedCanvas.getContext('2d');

        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, selectedCanvas.width, selectedCanvas.height);
    }
}

resizeButton.addEventListener('click', createSketchpad);
clearButton.addEventListener('click', () => {
    window.location.reload();
});

window.addEventListener('load', () => {
    createSketchpad(16, true);
  });