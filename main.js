//calculates spaces needed per line (i) based on height
function printSpaces(treeHeight, i) {
	return " ".repeat(treeHeight - (i + 1));
}

//calculates amount of character to be printed per line (i) based on height
function printCharacters(myTree, i) {
	return myTree.treeCharacter.repeat((2 * i) + 1);
}

//for loop that creates tree lines in console, based on height (i)
function growTree(myTree) {
	for (var i = 0; i < myTree.treeHeight; i++) {
	console.log(printSpaces(myTree.treeHeight, i) + printCharacters(myTree, i));
	}
}

//gets values entered by user, arranges into object, and alerts if a field is left empty
function tree() {
	var treeHeightInput = document.getElementById("treeHeight");
	var treeCharacterInput = document.getElementById("treeCharacter");
	var myTree = {treeHeight : treeHeightInput.value, treeCharacter : treeCharacterInput.value};
	growTree(myTree);
	if (treeHeightInput.value === "" || treeCharacterInput.value === "") {
		alert("Both fields must have a value!");
	}
}
//key event for pressing enter to run function
function enterKeyPress(keypress) {
	if (keypress.which === 13) {
		tree();
	}
}

//event listeners for submitting tree growth
var button = document.getElementById("grow");
button.addEventListener("click", tree);
document.addEventListener("keypress", enterKeyPress);