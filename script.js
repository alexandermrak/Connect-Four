//constants
// things that will not change
const winArr = [ 
    [0, 1, 2, 3], [1, 2, 3, 4], [5, 4, 3, 2], [41, 40, 39, 38], 
    [7, 8, 9, 10], [34, 33, 32, 31], [14, 15, 16, 17], [27, 26, 25, 24], 
    [21, 22, 23, 24], [20, 19, 18, 17], [28, 29, 30, 31], 
    [13, 12, 11, 10], [35, 36, 37, 38], [6, 5, 4, 3], 
    [0, 7, 14, 21], [41, 34, 27, 20], [1, 8, 15, 22], 
    [40, 33, 26, 19], [2, 9, 16, 23], [39, 32, 25, 18], 
    [3, 10, 17, 24], [38, 31, 24, 17], [4, 11, 18, 25], 
    [37, 30, 23, 16], [5, 12, 19, 26], [36, 29, 22, 15], 
    [6, 13, 20, 27], [35, 28, 21, 14], [0, 8, 16, 24], 
    [41, 33, 25, 17], [7, 15, 23, 31], [34, 26, 18, 10], 
    [14, 22, 30, 38], [27, 19, 11, 3], [35, 29, 23, 17], 
    [6, 12, 18, 24], [28, 22, 16, 10], [13, 19, 25, 31], 
    [21, 15, 9, 3], [20, 26, 32, 38], [36, 30, 24, 18], 
    [5, 11, 17, 23], [37, 31, 25, 19], [4, 10, 16, 22], 
    [2, 10, 18, 26], [39, 31, 23, 15], [1, 9, 17, 25], 
    [40, 32, 24, 16], [9, 7, 25, 33], [8, 16, 24, 32], 
    [11, 7, 23, 29], [12, 18, 24, 30], , [8, 9, 10, 11], [12, 11, 10, 9],
    [15, 16, 17, 18], [19, 18, 17, 16], [22, 23, 24, 25], 
    [26, 25, 24, 23], [29, 30, 31, 32], [33, 32, 31, 30], 
    [36, 37, 38, 39], [40, 39, 38, 37], [7, 14, 21, 28], 
    [8, 15, 22, 29], [9, 16, 23, 30], [10, 17, 24, 31], 
    [11, 18, 25, 32], [12, 19, 26, 33], [13, 20, 27, 34] 
]; 

const tokens = {
    yellow: {
        imgUrl: "yellow.png"
    },
    red: {
        imgUrl: "red.png"
    }
};


//variables
// things that will change
let score, playerTurn, redArr, yellowArr;

//cached element references
// manipulate html
document.getElementById("c0").onclick = function() {selectColumn(0)};
document.getElementById("c1").onclick = function() {selectColumn(1)};
document.getElementById("c2").onclick = function() {selectColumn(2)};
document.getElementById("c3").onclick = function() {selectColumn(3)};
document.getElementById("c4").onclick = function() {selectColumn(4)};
document.getElementById("c5").onclick = function() {selectColumn(5)};
document.getElementById("c6").onclick = function() {selectColumn(6)};

//event listeners
// this will be each column button to drop the token into


//functions

// function initialize() {
//     let playerTurn = red;
//     let redArr = [];
//     let yellowArr = [];
// }

function selectColumn(i) {
    if(i == 0) {
        dropToken(0);
        document.getElementById("c0").innerHTML = "YOU CLICKED ME!";
    } else if(i == 1) {
        dropToken(1);
        document.getElementById("c1").innerHTML = "YOU CLICKED ME!";
    } else if(i == 2) {
        dropToken(2);
        document.getElementById("c2").innerHTML = "YOU CLICKED ME!";
    } else if(i == 3) {
        dropToken(3);
        document.getElementById("c3").innerHTML = "YOU CLICKED ME!";
    } else if(i == 4) {
        dropToken(4);
        document.getElementById("c4").innerHTML = "YOU CLICKED ME!";
    } else if(i == 5) {
        dropToken(5);
        document.getElementById("c5").innerHTML = "YOU CLICKED ME!";
    } else {
        dropToken(6);
        document.getElementById("c6").innerHTML = "YOU CLICKED ME!";
    }
}

function hoverColumn(i) {
    if(i == 0) {
        document.getElementById("c0").style.color = "red";
    } else if (i == 1) {
        document.getElementById("c1").style.color = "red";
    } else if (i == 2) {
        document.getElementById("c2").style.color = "red";
    } else if (i == 3) {
        document.getElementById("c3").style.color = "red";
    } else if (i == 4) {
        document.getElementById("c4").style.color = "red";
    } else if (i == 5) {
        document.getElementById("c5").style.color = "red";
    } else {
        document.getElementById("c6").style.color = "red";
    }
}

function unhoverColumn (i) {
    if(i == 0) {
        document.getElementById("c0").style.color = "black";
    } else if (i == 1) {
        document.getElementById("c1").style.color = "black";
    } else if (i == 2) {
        document.getElementById("c2").style.color = "black";
    } else if (i == 3) {
        document.getElementById("c3").style.color = "black";
    } else if (i == 4) {
        document.getElementById("c4").style.color = "black";
    } else if (i == 5) {
        document.getElementById("c5").style.color = "black";
    } else {
        document.getElementById("c6").style.color = "black";
    }
}

function dropToken(c) {
    if (c == 0) {
        if (r)
    }
}

// function didWin () {
//     for (let i = 0; i < winArr.length; i++)
// }

function render() {

}
