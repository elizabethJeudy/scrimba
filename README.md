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

###### Snippet: ![image](https://raw.githubusercontent.com/elizabethJeudy/scrimba/7fff3d520457027efcdd46abd5a64175bed8e6d1/images/counter.png)

#### What I Learned:

##### \* _onclick_ - similar to an **addEventListener** the onclick event executes a specific function when a button is clicked. Unlike event listeners, onclick only works one time, when the user clicks on a button, and does not attach itself to any other elements. If the code has multiple events, onclick will overwrite them all and render the final one.

<a name="scoreboard"></a>

### Scoreboard

###### Live: https://codepen.io/elizabethJeudy/pen/QWBQeMR

###### Snippet: ![image](https://raw.githubusercontent.com/elizabethJeudy/scrimba/7fff3d520457027efcdd46abd5a64175bed8e6d1/images/scoreboard.png)

#### Challenges:

##### My challenge with this project was figuring out how to increment both home and guest scoreboards. At first, my code looked like this:

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

##### With this, all 6 buttons worked however, only the home scoreboard was incrementing. Since this project was about working with onclick, using addEventListeners was not an option. The most logical solution for me (maybe not the most optimized) was to create functions for both home and guest boards which allowed them both to be manipulated.

<a name="blackjack-game"></a>

### Blackjack Game

###### Live: https://codepen.io/elizabethJeudy/pen/vYajxeZ

###### Snippet: ![image](https://raw.githubusercontent.com/elizabethJeudy/scrimba/7fff3d520457027efcdd46abd5a64175bed8e6d1/images/blackjack.png)

#### What I Re-learned:

##### \* _for loops_ - This project helped for loops click for me with remembering START; FINISH; ITERATE;

#### Challenges:

##### 1. My first challenge with this project was having a way to track the winner.

<!-->
<a name="random-password-generator">

### Random Password Generator (in process)

###### Live: https://codepen.io/elizabethJeudy/pen/LYBgrBN

###### Snippet: ![image](https://raw.githubusercontent.com/elizabethJeudy/scrimba/7fff3d520457027efcdd46abd5a64175bed8e6d1/images/password.png)

<!-->

<a name="chrome-extension">

### Chrome Extension

<!--relearned template strings, add event listeners, localStorage, typeof, json.parse and json.stringify, truthy and falsy-->

###### Live: https://codepen.io/elizabethJeudy/pen/rNZeQwp

###### Snippet: ![image](https://raw.githubusercontent.com/elizabethJeudy/scrimba/7fff3d520457027efcdd46abd5a64175bed8e6d1/images/extension.png)
