const tokens = {
    yellow: {
        imgUrl: "yellow.png"
    },
    red: {
        imgUrl: "red.png"
    }
};

let score;
let playerTurn = document.querySelector(".player-turn");

let zero, one, two, three, four, five, six, seven, eight, nine, ten,
eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen,
eighteen, nineteen, twenty, twentyone, twentytwo, twentythree, twentyfour,
twentyfive, twentysix, twentyseven, twentyeight, twentynine, thirty, thirtyone,
thirtytwo, thirtythree, thirtyfour, thirtyfive, thirtysix, thirtyseven,
thirtyeight, thirtynine, fourty, fourtyone;

document.getElementById("0").onclick = function() {selectSlot(0)};
document.getElementById("1").onclick = function() {selectSlot(1)};
document.getElementById("2").onclick = function() {selectSlot(2)};
document.getElementById("3").onclick = function() {selectSlot(3)};
document.getElementById("4").onclick = function() {selectSlot(4)};
document.getElementById("5").onclick = function() {selectSlot(5)};
document.getElementById("6").onclick = function() {selectSlot(6)};
document.getElementById("7").onclick = function() {selectSlot(7)};
document.getElementById("8").onclick = function() {selectSlot(8)};
document.getElementById("9").onclick = function() {selectSlot(9)};
document.getElementById("10").onclick = function() {selectSlot(10)};
document.getElementById("11").onclick = function() {selectSlot(11)};
document.getElementById("12").onclick = function() {selectSlot(12)};
document.getElementById("13").onclick = function() {selectSlot(13)};
document.getElementById("14").onclick = function() {selectSlot(14)};
document.getElementById("15").onclick = function() {selectSlot(15)};
document.getElementById("16").onclick = function() {selectSlot(16)};
document.getElementById("17").onclick = function() {selectSlot(17)};
document.getElementById("18").onclick = function() {selectSlot(18)};
document.getElementById("19").onclick = function() {selectSlot(19)};
document.getElementById("20").onclick = function() {selectSlot(20)};
document.getElementById("21").onclick = function() {selectSlot(21)};
document.getElementById("22").onclick = function() {selectSlot(22)};
document.getElementById("23").onclick = function() {selectSlot(23)};
document.getElementById("24").onclick = function() {selectSlot(24)};
document.getElementById("25").onclick = function() {selectSlot(25)};
document.getElementById("26").onclick = function() {selectSlot(26)};
document.getElementById("27").onclick = function() {selectSlot(27)};
document.getElementById("28").onclick = function() {selectSlot(28)};
document.getElementById("29").onclick = function() {selectSlot(29)};
document.getElementById("30").onclick = function() {selectSlot(30)};
document.getElementById("31").onclick = function() {selectSlot(31)};
document.getElementById("32").onclick = function() {selectSlot(32)};
document.getElementById("33").onclick = function() {selectSlot(33)};
document.getElementById("34").onclick = function() {selectSlot(34)};
document.getElementById("35").onclick = function() {selectSlot(35)};
document.getElementById("36").onclick = function() {selectSlot(36)};
document.getElementById("37").onclick = function() {selectSlot(37)};
document.getElementById("38").onclick = function() {selectSlot(38)};
document.getElementById("39").onclick = function() {selectSlot(39)};
document.getElementById("40").onclick = function() {selectSlot(40)};
document.getElementById("41").onclick = function() {selectSlot(41)};

function initialize() {
    let playerTurn = red;
    playerTurn.textContent = `${playerTurn}'s turn`
    let redArr = [];
    let yellowArr = [];
}

function selectSlot(i) {
    if(i == 0 && !zero.classList.contains("taken") && seven.classList.contains("taken")) {
        let zero = document.getElementById("0").classList.add("taken");
        dropToken(0);
        document.getElementById("0").innerHTML = "YOU CLICKED ME!";
    } else if(i == 1 && !one.classList.contains("taken") && eight.classList.contains("taken")) {
        let one = document.getElementById("1").classList.add("taken");
        dropToken(1);
        document.getElementById("1").innerHTML = "YOU CLICKED ME!";
    } else if(i == 2 && !two.classList.contains("taken") && nine.classList.contains("taken")) {
        let two = document.getElementById("2").classList.add("taken");
        dropToken(2);
        document.getElementById("2").innerHTML = "YOU CLICKED ME!";
    } else if(i == 3 && !three.classList.contains("taken") && ten.classList.contains("taken")) {
        let three = document.getElementById("3").classList.add("taken");
        dropToken(3);
        document.getElementById("3").innerHTML = "YOU CLICKED ME!";
    } else if(i == 4 && !four.classList.contains("taken") && eleven.classList.contains("taken")) {
        let four = document.getElementById("4").classList.add("taken");
        dropToken(4);
        document.getElementById("4").innerHTML = "YOU CLICKED ME!";
    } else if(i == 5 && !five.classList.contains("taken") && twelve.classList.contains("taken")) {
        let five = document.getElementById("5").classList.add("taken");
        dropToken(5);
        document.getElementById("5").innerHTML = "YOU CLICKED ME!";
    } else if(i == 6 && !six.classList.contains("taken") && thirteen.classList.contains("taken")) {
        let six = document.getElementById("6").classList.add("taken");
        dropToken(6);
        document.getElementById("6").innerHTML = "YOU CLICKED ME!";
    } else if(i == 7 && !seven.classList.contains("taken") && fourteen.classList.contains("taken")) {
        let seven = document.getElementById("7").classList.add("taken");
        dropToken(7);
        document.getElementById("7").innerHTML = "YOU CLICKED ME!";
    } else if(i == 8 && !eight.classList.contains("taken") && fifteen.classList.contains("taken")) {
        let eight = document.getElementById("8").classList.add("taken");
        dropToken(8);
        document.getElementById("8").innerHTML = "YOU CLICKED ME!";
    } else if(i == 9 && !nine.classList.contains("taken") && sixteen.classList.contains("taken")) {
        let nine = document.getElementById("9").classList.add("taken");
        dropToken(9);
        document.getElementById("9").innerHTML = "YOU CLICKED ME!";
    } else if(i == 10 && !ten.classList.contains("taken") && seventeen.classList.contains("taken")) {
        let ten = document.getElementById("10").classList.add("taken");
        dropToken(10);
        document.getElementById("10").innerHTML = "YOU CLICKED ME!";
    } else if(i == 11 && !eleven.classList.contains("taken") && eighteen.classList.contains("taken")) {
        let eleven = document.getElementById("11").classList.add("taken");
        dropToken(11);
        document.getElementById("11").innerHTML = "YOU CLICKED ME!";
    } else if(i == 12 && !twelve.classList.contains("taken") && nineteen.classList.contains("taken")) {
        let twelve = document.getElementById("12").classList.add("taken");
        dropToken(12);
        document.getElementById("12").innerHTML = "YOU CLICKED ME!";
    } else if(i == 13 && !thirteen.classList.contains("taken") && twenty.classList.contains("taken")) {
        let thirteen = document.getElementById("13").classList.add("taken");
        dropToken(13);
        document.getElementById("13").innerHTML = "YOU CLICKED ME!";
    } else if(i == 14 && !fourteen.classList.contains("taken") && twentyone.classList.contains("taken")) {
        let fourteen = document.getElementById("14").classList.add("taken");
        dropToken(14);
        document.getElementById("14").innerHTML = "YOU CLICKED ME!";
    } else if(i == 15 && !fifteen.classList.contains("taken") && twentytwo.classList.contains("taken")) {
        let fifteen = document.getElementById("15").classList.add("taken");
        dropToken(15);
        document.getElementById("15").innerHTML = "YOU CLICKED ME!";
    } else if(i == 16 && !sixteen.classList.contains("taken") && twentythree.classList.contains("taken")) {
        let sixteen = document.getElementById("16").classList.add("taken");
        dropToken(16);
        document.getElementById("16").innerHTML = "YOU CLICKED ME!";
    } else if(i == 17 && !seventeen.classList.contains("taken") && twentyfour.classList.contains("taken")) {
        let seventeen = document.getElementById("17").classList.add("taken");
        dropToken(17);
        document.getElementById("17").innerHTML = "YOU CLICKED ME!";
    } else if(i == 18 && !eighteen.classList.contains("taken") && twentyfive.classList.contains("taken")) {
        let eighteen = document.getElementById("18").classList.add("taken");
        dropToken(18);
        document.getElementById("18").innerHTML = "YOU CLICKED ME!";
    } else if(i == 19 && !ninteen.classList.contains("taken") && twentysix.classList.contains("taken")) {
        let nineteen = document.getElementById("19").classList.add("taken");
        dropToken(19);
        document.getElementById("19").innerHTML = "YOU CLICKED ME!";
    } else if(i == 20 && !twenty.classList.contains("taken") && twentyseven.classList.contains("taken")) {
        let twenty = document.getElementById("20").classList.add("taken");
        dropToken(20);
        document.getElementById("20").innerHTML = "YOU CLICKED ME!";
    } else if(i == 21 && !twentyone.classList.contains("taken") && twentyeight.classList.contains("taken")) {
        let twentyone = document.getElementById("21").classList.add("taken");
        dropToken(21);
        document.getElementById("21").innerHTML = "YOU CLICKED ME!";
    } else if(i == 22 && !twentytwo.classList.contains("taken") && twentynine.classList.contains("taken")) {
        let twentytwo = document.getElementById("22").classList.add("taken");
        dropToken(22);
        document.getElementById("22").innerHTML = "YOU CLICKED ME!";
    } else if(i == 23 && !twentythree.classList.contains("taken") && thirty.classList.contains("taken")) {
        let twentythree = document.getElementById("23").classList.add("taken");
        dropToken(23);
        document.getElementById("23").innerHTML = "YOU CLICKED ME!";
    } else if(i == 24 && !twentyfour.classList.contains("taken") && thirtyone.classList.contains("taken")) {
        let twentyfour = document.getElementById("24").classList.add("taken");
        dropToken(24);
        document.getElementById("24").innerHTML = "YOU CLICKED ME!";
    } else if(i == 25 && !twentyfive.classList.contains("taken") && thirtytwo.classList.contains("taken")) {
        let twentyfive = document.getElementById("25").classList.add("taken");
        dropToken(25);
        document.getElementById("25").innerHTML = "YOU CLICKED ME!";
    } else if(i == 26 && !twentysix.classList.contains("taken") && thirtythree.classList.contains("taken")) {
        let twentysix = document.getElementById("26").classList.add("taken");
        dropToken(26);
        document.getElementById("26").innerHTML = "YOU CLICKED ME!";
    } else if(i == 27 && !twentyseven.classList.contains("taken") && thirtyfour.classList.contains("taken")) {
        let twentyseven = document.getElementById("27").classList.add("taken");
        dropToken(27);
        document.getElementById("27").innerHTML = "YOU CLICKED ME!";
    } else if(i == 28 && !twentyeight.classList.contains("taken") && thirtyfive.classList.contains("taken")) {
        let twentyeight = document.getElementById("28").classList.add("taken");
        dropToken(28);
        document.getElementById("28").innerHTML = "YOU CLICKED ME!";
    } else if(i == 29 && !twentynine.classList.contains("taken") && thirtysix.classList.contains("taken")) {
        let twentynine = document.getElementById("29").classList.add("taken");
        dropToken(29);
        document.getElementById("29").innerHTML = "YOU CLICKED ME!";
    } else if(i == 30 && !thirty.classList.contains("taken") && thirtyseven.classList.contains("taken")) {
        let thirty = document.getElementById("30").classList.add("taken");
        dropToken(30);
        document.getElementById("30").innerHTML = "YOU CLICKED ME!";
    } else if(i == 31 && !thirtyone.classList.contains("taken") && thirtyeight.classList.contains("taken")) {
        let thirtyone = document.getElementById("31").classList.add("taken");
        dropToken(31);
        document.getElementById("31").innerHTML = "YOU CLICKED ME!";
    } else if(i == 32 && !thirtytwo.classList.contains("taken") && thirtynine.classList.contains("taken")) {
        let thirtytwo = document.getElementById("32").classList.add("taken");
        dropToken(32);
        document.getElementById("32").innerHTML = "YOU CLICKED ME!";
    } else if(i == 33 && !thirtythree.classList.contains("taken") && fourty.classList.contains("taken")) {
        let thirtythree = document.getElementById("33").classList.add("taken");
        dropToken(33);
        document.getElementById("33").innerHTML = "YOU CLICKED ME!";
    } else if(i == 34 && !thirtyfour.classList.contains("taken") && fourtyone.classList.contains("taken")) {
        let thirtyfour = document.getElementById("34").classList.add("taken");
        dropToken(34);
        document.getElementById("34").innerHTML = "YOU CLICKED ME!";
    } else if(i == 35 && !thirtyfive.classList.contains("taken")) {
        let thirtyfive = document.getElementById("35").classList.add("taken");
        dropToken(35);
        document.getElementById("35").innerHTML = "YOU CLICKED ME!";
    } else if(i == 36 && !thirtysix.classList.contains("taken")) {
        let thirtysix = document.getElementById("36").classList.add("taken");
        dropToken(36);
        document.getElementById("36").innerHTML = "YOU CLICKED ME!";
    } else if(i == 37 && !thirtyseven.classList.contains("taken")) {
        let thirtyseven = document.getElementById("37").classList.add("taken");
        dropToken(37);
        document.getElementById("37").innerHTML = "YOU CLICKED ME!";
    } else if(i == 38 && !thirtyeight.classList.contains("taken")) {
        let thirtyeight = document.getElementById("38").classList.add("taken");
        dropToken(38);
        document.getElementById("38").innerHTML = "YOU CLICKED ME!";
    } else if(i == 39 && !thirtynine.classList.contains("taken")) {
        let thirtynine = document.getElementById("39").classList.add("taken");
        dropToken(39);
        document.getElementById("39").innerHTML = "YOU CLICKED ME!";
    } else if(i == 40 && !fourty.classList.contains("taken")) {
        let fourty = document.getElementById("40").classList.add("taken");
        dropToken(40);
        document.getElementById("40").innerHTML = "YOU CLICKED ME!";
    } else if (i == 41 && !fourtyone.classList.contains("taken")){
        let fourtyone = document.getElementById("41").classList.add("taken");
        dropToken(41);
        document.getElementById("41").innerHTML = "YOU CLICKED ME!";
    } //add an else here for when the board is full
}

function dropToken(i) {
    if (i == 0) {
        if (playerTurn == red) {
            //display red token
            //call the didWin function
        }
    }
}

function didWin () {
    for (let i = 0; i < winArr.length; i++) {

    }
}

function horizWin() {

}

function vertWin() {

}

function diagWin() {

}

function backwardDiagWin() {

}