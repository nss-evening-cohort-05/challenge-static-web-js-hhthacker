var button = document.getElementById("grow");

function printSpaces(treeHeight, i) {
	return " ".repeat(treeHeight - (i + 1));
}

function printCharacters(myTree, i) {
	return myTree.treeCharacter.repeat((2 * i) + 1);
}

function growTree(myTree) {
	for (var i = 0; i < myTree.treeHeight; i++) {
	console.log(printSpaces(myTree.treeHeight, i) + printCharacters(myTree, i));
	}
}

function tree() {
	var treeHeightInput = document.getElementById("treeHeight");
	var treeCharacterInput = document.getElementById("treeCharacter");
	var myTree = {treeHeight : treeHeightInput.value, treeCharacter : treeCharacterInput.value};
	growTree(myTree);
	if (treeHeightInput.value === "" || treeCharacterInput.value === "") {
		alert("Both fields must have a value!");
	}
}

function enterKeyPress(keypress) {
	if (keypress.which === 13) {
		tree();
	}
}

button.addEventListener("click", tree);
document.addEventListener("keypress", enterKeyPress);