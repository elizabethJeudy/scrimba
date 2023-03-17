// assign myLeads to empty array
// assign inputEl to input field
let myLeads = [];

const inputEl = document.querySelector("#input-el");
const inputBtn = document.querySelector("#input-btn");
const deleteBtn = document.querySelector("#delete-btn");
const ulEl = document.querySelector("#ul-el");

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalStorage) {
	myLeads = leadsFromLocalStorage;
	renderLeads();
}

// clears saved input from storage, leads, and DOM
deleteBtn.addEventListener("dblclick", function () {
	localStorage.clear();
	myLeads = [];
	renderLeads();
});

inputBtn.addEventListener("click", function () {
	myLeads.push(inputEl.value);
	inputEl.value = "";
	// Save the myLeads array to localStorage
	localStorage.setItem("myLeads", JSON.stringify(myLeads));
	renderLeads();

	// To verify that it works:
	console.log(localStorage.getItem("myLeads"));
});

function renderLeads() {
	// create variable to hold all html, set to empty string
	listItems = "";
	// log out each item in myLeads
	for (i = 0; i < myLeads.length; i++) {
		// add items to variable
		listItems += `<li>
<a target='_blank' href = ${myLeads[i]}> 
${myLeads[i]} </a>
</li>`;
	}
	ulEl.innerHTML = listItems;
}
