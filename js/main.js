let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

const tabs = [{url: "https://www.google.com"}];

if (leadsFromLocalStorage) {
	myLeads = leadsFromLocalStorage;
	render(myLeads);
}

function render (leads) {
	let listItems = "";
	for (let i = 0; i < leads.length; i++) {
		// Make the link open a new tab
		// listItems+= "<li><a target ='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>";
		listItems+= `<li>
						<a target ='_blank' href='${leads[i]}'>${leads[i]}</a>
					</li>`
		// Create element li
		// const li = document.createElement("li");
		// li.textContent = myLeads[i];
		// ulEl.append(li);

	}

	ulEl.innerHTML = listItems;
}

deleteBtn.addEventListener("dblclick", function(){
	localStorage.clear();
	myLeads = [];
	render(myLeads);
})

inputBtn.addEventListener("click", function() {
	myLeads.push(inputEl.value);
	// Clear out the input field
	inputEl.value = "";
	localStorage.setItem("myLeads", JSON.stringify(myLeads));
	render(myLeads);
});

tabBtn.addEventListener("click", function(){
	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
	
	// since only one tab should be active and in the current window at once
  	// the return variable should only have one entry
  	let activeTab = tabs[0];
  	let activeTabId = activeTab.id; // or do whatever you need
});
	myLeads.push(tabs[0].url);
	localStorage.setItem("myLeads", JSON.stringify(myLeads));
	render(myLeads);
})



