var hondas = ["Civic", "CRV", "Accord", "Fit"];
var audis = ["A4", "A3", "A6"];
var chevys = ["Silverado", "Equinox", "Traverse", "Malibu", "Cruze"];
var fords = ["Focus", "Mustang", "Fiesta", "Explorer"];

function changeMake() {
	var makeSelect = document.getElementById("make"); // get the car make menu
	var make = makeSelect.options[makeSelect.selectedIndex].value; // get the current value of car make
	
	// clear out the models menu
	var modelMenu = document.getElementById("model"); // get the car model menu
	while (modelMenu.childElementCount > 0) {
		modelMenu.removeChild(modelMenu.childNodes[0]); // remove all the child nodes (aka the select options)
	}

	// add the "Model" text to label the model dropdown menu
	var modelText = document.createElement("option");
	modelText.innerHTML = "Model";
	modelText.disabled = true;
	modelText.selected = true;
	modelMenu.appendChild(modelText);

	// get the appropriate list of models depending on the selected make
	var models;
	if (make == "honda") {
		models = hondas;
	} else if (make == "audi") {
		models = audis;
	} else if (make == "chevy") {
		models = chevys;
	} else if (make == "ford") {
		models = fords;
	}

	// add all the models for the selected make
	for (var i = 0; i < models.length; i++) {
		var newModel = document.createElement("option");
		newModel.innerHTML = models[i];

		modelMenu.appendChild(newModel);
	}
}