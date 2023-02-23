# Learn Javascript with Scrimba

These 4 projects were completed while working on the Learn Javascript course with Scrimba. Below you'll see each project, view it live, and read about any challenges I faced. All of these projects were created with vanilla javascript. View the entire collection on my codepen https://codepen.io/collection/bNLRak

## Table of Contents:

1. [Stitch Counter](#stitch-counter)
2. [Scoreboard](#scoreboard)
3. [BlackJack Game](#blackjack-game)
4. [Random Password Generator](#random-password-generator)
5. [Chrome Extension](#chrome-extension)

<a name="stitch-counter"></a>

### Stitch Counter

###### Live: https://codepen.io/elizabethJeudy/pen/JjBpxXv

###### Snippet: ![image](https://github.com/elizabethJeudy/scrimba/blob/main/images/stitch-counter.png?raw=true)

#### What I Learned:

##### \* _onclick_ - similar to an **addEventListener** the onclick event executes a specific function when a button is clicked. Unlike event listeners, onclick only works one time, when the user clicks on a button, and does not attach itself to any other elements. If the code has multiple events, onclick will overwrite them all and render the final one.

<a name="scoreboard"></a>

### Scoreboard

###### Live: https://codepen.io/elizabethJeudy/pen/QWBQeMR

#### Challenges:

##### 1. My first challenge was figuring out how to increment both home and guest scoreboards. At first, my code looked like this:

```js
<div class="increments">
	<button class="plusOne" onclick="plusOne()">
		+1
	</button>
	<button class="plusTwo" onclick="plusTwo()">
		+2
	</button>
	<button class="plusThree" onclick="plusThree()">
		+3
	</button>
</div>
```

##### With this, all 6 buttons worked however, only the home scoreboard was incrementing. Since this project was about working with onclick, using addEventListeners was not an option. The most logical solution for me (maybe not the most optimized) was the create functions for both home and guest boards.

<a name="blackjack-game"></a>

### Blackjack Game

###### Live: https://codepen.io/elizabethJeudy/pen/vYajxeZ

<a name="random-password-generator">

### Random Password Generator

###### Live: https://codepen.io/elizabethJeudy/pen/LYBgrBN

<a name="chrome-extension">

### Chrome Extension

###### Live: https://codepen.io/elizabethJeudy/pen/rNZeQwp
