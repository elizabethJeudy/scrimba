let player = {
	name: "Liz",
	chips: 200,
};

// initializer
let cards = [];
let sum = 0;

// keeps track of the winner
let hasBlackjack = false;
let isAlive = false;

// displays message
let message = "";
let messageEl = document.querySelector(".message");

// retrieves the sum and card values
let sumEl = document.querySelector(".sum");
let cardsEl = document.querySelector(".cards");

// displays player (me)
playerEl = document.querySelector(".player-el");

playerEl.innerHTML = player.name + ": $" + player.chips;

// gets a random card
function getRandomCard() {
	let randomNumber = Math.floor(Math.random() * 13) + 1;
	// if card drawn is K11, Q12, J13 then 10 will be the value; if card drawn is ACE1, then 11 will be value
	if (randomNumber > 10) {
		return 10;
	} else if (randomNumber === 1) {
		return 11;
	} else {
		return randomNumber;
	}
}

// starts game
function startGame() {
	isAlive = true;
	let firstCard = getRandomCard();
	let secondCard = getRandomCard();
	cards = [firstCard, secondCard];
	sum = firstCard + secondCard;
	renderGame();
}

// displays game
function renderGame() {
	// renders sum
	sumEl.innerHTML = "Sum: " + sum;
	// renders cards drawn
	cardsEl.innerHTML = "Cards: ";
	// for loop renders out all cards
	for (i = 0; i < cards.length; i++) {
		cardsEl.innerHTML += cards[i] + " ";
	}

	if (sum <= 20) {
		message = "Do you want a new card?";
	} else if (sum === 21) {
		message = "You got Blackjack!";
		hasBlackjack = true;
	} else {
		message = "You are out!";
		isAlive = false;
	}
	// renders message
	messageEl.innerHTML = message;
}

// pulls new card only if conditions are meant
function newCard() {
	if (isAlive === true && hasBlackjack === false) {
		let card = getRandomCard();
		sum += card;
		cards.push(card); // pushes cards to card array
		console.log(cards);
		renderGame();
	}
}
