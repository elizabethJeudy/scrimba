let myLeads = [];
const inputEl = document.querySelector("#input-el");
const inputBtn = document.querySelector("#input-btn");
const deleteBtn = document.querySelector("#delete-btn");
const tabBtn = document.querySelector("#tab-btn");
const ulEl = document.querySelector("#ul-el");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalStorage) {
	myLeads = leadsFromLocalStorage;
	render(myLeads);
}
// grabs url of current tab and saves input
tabBtn.addEventListener("click", function () {
	// passes object to say which tab we want
	chrome.tabs.query({
		active: true,
		currentWindow: true,
		function(tabs) {
			myLeads.push(tabs[0].url);
			localStorage.setItem("myLeads", JSON.stringify(myLeads));
			render(myLeads);
		},
	});
});

function render(leads) {
	// create variable to hold all html, set to empty string
	listItems = "";
	// log out each item in myLeads
	for (i = 0; i < leads.length; i++) {
		// add items to variable
		listItems += `<li>
<a target='_blank' href = ${leads[i]}> 
${leads[i]} </a>
</li>`;
	}
	ulEl.innerHTML = listItems;
}

// clears saved input from storage, leads, and DOM
deleteBtn.addEventListener("dblclick", function () {
	localStorage.clear();
	myLeads = [];
	render(myLeads);
});

inputBtn.addEventListener("click", function () {
	myLeads.push(inputEl.value);
	inputEl.value = "";
	// Save the myLeads array to localStorage
	localStorage.setItem("myLeads", JSON.stringify(myLeads));
	render(myLeads);
});
