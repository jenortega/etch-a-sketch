const container = document.querySelector('#container');
const resetContainer = document.querySelector('#reset-container');

const header = document.querySelector('#header');
const createButton = document.querySelector('.createBtn');

const resetButton = document.createElement('button');

const containerArea = 500
let number = 0;
let newNumber = 0;
let sizeOfCell = 0;

createButton.addEventListener('click', () => {

    number = parseInt(prompt("Please enter a number from 1 to 100"));
    if (number > 0 && number < 101) {
        number = number;
    } else {
        number = parseInt(prompt("Please enter a number from 1 to 100"));
    }

    createSketch(number);

    container.removeChild(createButton);
    container.setAttribute('style', 'border: 5px solid black; margin-bottom: -10px;')

    paint();

    resetButton.classList.add('resetBtn')
    resetButton.textContent = 'Reset'

    resetContainer.appendChild(resetButton);    
})

resetButton.addEventListener('click', () => {
    let i = 0;

    while(i<number){
        document.getElementById('row').remove();
        i++;
    }

    number = parseInt(prompt("Please enter a number from 1 to 100"));
    if (number > 0 && number < 101) {
        number = number;
    } else {
        number = parseInt(prompt("Please enter a number from 1 to 100"));
    }

    createSketch(number);

    container.setAttribute('style', 'border: 5px solid black; margin-bottom: -10px;')

    paint();

    resetContainer.appendChild(resetButton); 
})


function createSketch(number) {
    let i = 0;
    while (i < number) {
        container.appendChild(createRow());
        i++;
    }
}

function createRow() {
    const row = document.createElement('div');
    row.setAttribute('id', 'row');

    newNumber = containerArea - (number * 2);
    sizeOfCell = newNumber/number;

    for (i=0; i < number; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.setAttribute('style', 'width: ' + sizeOfCell + 'px ; height: ' + sizeOfCell + 'px')

        row.appendChild(cell);
    }
    return row;
}

function paint() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
        cell.addEventListener('mouseover', () => {
            cell.classList.add('cellColor');        
        })
    })
}



