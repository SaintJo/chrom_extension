let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalStorage) {
	myLeads = leadsFromLocalStorage;
	renderLeads();
}


inputBtn.addEventListener("click", function() {
	myLeads.push(inputEl.value);
	// Clear out the input field
	inputEl.value = "";
	localStorage.setItem("myLeads", JSON.stringify(myLeads));
	renderLeads();
});


function renderLeads () {
	let listItems = "";
	for (let i = 0; i < myLeads.length; i++) {
		// Make the link open a new tab
		// listItems+= "<li><a target ='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>";
		listItems+= `<li>
						<a target ='_blank' href='${myLeads[i]}'>${myLeads[i]}</a>
					</li>`
		// Create element li
		// const li = document.createElement("li");
		// li.textContent = myLeads[i];
		// ulEl.append(li);

	}

	ulEl.innerHTML = listItems;
}
