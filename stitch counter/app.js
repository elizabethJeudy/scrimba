// initialize the count as 0
// listen for amount of clicks on the increment button
// increment the count variable when increment button is clicked
// render count by manipulating #count in html

let count = 0;
let stitchCount = document.querySelector("#count");
let stitchSaved = document.querySelector("#saved");

function increment() {
	count += 1;
	stitchCount.innerHTML = count;
}

// grab the saved paragraph and store it in variable
// create variable that contains both count and dash separated
// render the variable in save using innerHTML
function save() {
	let countStr = " " + count + " - ";

	stitchSaved.innerHTML += countStr;
	stitchCount.innerHTML = 0;
	count = 0;
}
