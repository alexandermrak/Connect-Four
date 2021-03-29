const tableRow = document.getElementsByTagName('tr');
const tableData = document.getElementsByTagName('td');
const player1 = 'Red';
const player2 = 'Yellow';

let score;
let currentPlayer = 1;
let playerTurn = document.querySelector(".player-turn");
let takenSlots = [];

function restart() {
    let currentPlayer = player1;
    playerTurn.textContent = `${currentPlayer}'s turn`;
    takenSlots.splice(0, takenSlots.length);
    for(i = 0; i < 42; i++){
        document.getElementById(i).style.backgroundColor = "gainsboro";
        if(document.getElementById(i).classList == 'red'){
            document.getElementById(i).classList.remove('red');
        } else if (document.getElementById(i).classList == "yellow") {
            document.getElementById(i).classList.remove('yellow');
        }
    }
}

for (i = 0; i < tableData.length; i ++){
    tableData[i].addEventListener('click', (slotClick) =>{
        let r = slotClick.target.parentElement.rowIndex
        let c = slotClick.target.cellIndex;
        dropToken(r, c);
    });
};

function dropToken(r, c) {
    const fullIdx = r*7+c;
    const noFLoat = fullIdx+7;
    const tableEl = fullIdx.toString();
    const isTaken = takenSlots.some((num) => { return num === fullIdx;});
    const isTaken2 = takenSlots.some((num) => { return num === noFLoat;});
    if (currentPlayer === 1) {
        if (isTaken == true) {
            return;
        } else if (isTaken === false) {
            if (isTaken2 == true || noFLoat > 41) {
               document.getElementById(tableEl).style.backgroundColor = "red";
               document.getElementById(tableEl).classList.add('red');
               takenSlots.push(fullIdx);
               if (redHorizWin() || redVertWin() || redDiagWin() || redReverseDiagWin()) {
                playerTurn.textContent = `${player1} WINS! Press the restart button for a new game`;
            } else {
               playerTurn.textContent = `${player2}'s turn`
               return currentPlayer = 2;
            }
            }
            } else {
                return;
            }
        }
     else if (currentPlayer === 2) {
        if (isTaken == true) {
            return;
        } else if (isTaken === false) {
            if (isTaken2 == true || noFLoat > 41) {
               document.getElementById(tableEl).style.backgroundColor = "yellow";
               document.getElementById(tableEl).classList.add('yellow');
               takenSlots.push(fullIdx);
               if (yellowHorizWin() || yellowVertWin() || yellowDiagWin() || yellowReverseDiagWin()) {
                   playerTurn.textContent = `${player2} WINS! Press the restart button for a new game`
               } else {
               playerTurn.textContent = `${player1}'s turn`
               return currentPlayer = 1;
               }
            } else {
                return;
            }
        }
    }
}

function redHorizWin(){
    for (let row = 0; row < tableRow.length; row++){
        for (let column = 0; column < 4; column++){
           if (tableRow[row].children[column].classList.contains('red') && tableRow[row].children[column+1].classList.contains('red') && tableRow[row].children[column+2].classList.contains('red') && tableRow[row].children[column+3].classList.contains('red')){
                return true;        
            }
        }
    }
}

function redVertWin(){
    for (let column = 0; column < 7; column++){
        for (let row = 0; row < 3; row++){
            if (tableRow[row].children[column].classList.contains('red') && tableRow[row+1].children[column].classList.contains('red') && tableRow[row+2].children[column].classList.contains('red') && tableRow[row+3].children[column].classList.contains('red') ){
                return true;
            }
        }   
    }
}

function redDiagWin(){
    for(let column = 0; column < 4; column++){
        for (let row = 0; row < 3; row++){
            if (tableRow[row].children[column].classList.contains('red') && tableRow[row+1].children[column+1].classList.contains('red') && tableRow[row+2].children[column+2].classList.contains('red') && tableRow[row+3].children[column+3].classList.contains('red')){
                    return true;
            }
        }
    }
}

function redReverseDiagWin(){
    for(let column = 0; column < 4; column++){
        for (let row = 5; row > 2; row--){
            if (tableRow[row].children[column].classList.contains('red') && tableRow[row-1].children[column+1].classList.contains('red') && tableRow[row-2].children[column+2].classList.contains('red') && tableRow[row-3].children[column+3].classList.contains('red')){
                    return true;
            }
        }
    }
}

function yellowHorizWin(){
    for (let row = 0; row < tableRow.length; row++){
        for (let column = 0; column < 4; column++){
           if (tableRow[row].children[column].classList.contains('yellow') && tableRow[row].children[column+1].classList.contains('yellow') && tableRow[row].children[column+2].classList.contains('yellow') && tableRow[row].children[column+3].classList.contains('yellow')){
                return true;        
            }
        }
    }
}

function yellowVertWin(){
    for (let column = 0; column < 7; column++){
        for (let row = 0; row < 3; row++){
            if (tableRow[row].children[column].classList.contains('yellow') && tableRow[row+1].children[column].classList.contains('yellow') && tableRow[row+2].children[column].classList.contains('yellow') && tableRow[row+3].children[column].classList.contains('yellow') ){
                return true;
            }
        }   
    }
}

function yellowDiagWin(){
    for(let column = 0; column < 4; column++){
        for (let row = 0; row < 3; row++){
            if (tableRow[row].children[column].classList.contains('yellow') && tableRow[row+1].children[column+1].classList.contains('yellow') && tableRow[row+2].children[column+2].classList.contains('yellow') && tableRow[row+3].children[column+3].classList.contains('yellow')){
                    return true;
            }
        }
    }
}

function yellowReverseDiagWin(){
    for(let column = 0; column < 4; column++){
        for (let row = 5; row > 2; row--){
            if (tableRow[row].children[column].classList.contains('yellow') && tableRow[row-1].children[column+1].classList.contains('yellow') && tableRow[row-2].children[column+2].classList.contains('yellow') && tableRow[row-3].children[column+3].classList.contains('yellow')){
                    return true;
            }
        }
    }
}