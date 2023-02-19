let scoreHome = 0;
let scoreGuest = 0;
let homeScore = document.querySelector("#homeScore");
let guestScore = document.querySelector("#guestScore");

// home score
function plusOneHome() {
	scoreHome += 1;
	homeScore.innerHTML = scoreHome;
}

function plusTwoHome() {
	scoreHome += 2;
	homeScore.innerHTML = scoreHome;
}

function plusThreeHome() {
	scoreHome += 3;
	homeScore.innerHTML = scoreHome;
}

function newGame() {
	homeScore.innerHTML = 0;
	scoreHome = 0;
}

// guest score

function plusOneGuest() {
	scoreGuest += 1;
	guestScore.innerHTML = scoreGuest;
}

function plusTwoGuest() {
	scoreGuest += 2;
	guestScore.innerHTML = scoreGuest;
}

function plusThreeGuest() {
	scoreGuest += 3;
	guestScore.innerHTML = scoreGuest;
}

function newGame() {
	guestScore.innerHTML = 0;
	scoreGuest = 0;
}
