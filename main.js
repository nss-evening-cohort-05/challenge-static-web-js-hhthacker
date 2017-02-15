
// print spaces: 
// treeHeight - (i +1)

// print characters:
// (2 * i) + 1 

var button = document.getElementById("grow");

function printSpaces(treeHeight, i) {
	return " ".repeat(treeHeight - (i + 1));
}

function printCharacters(myTree, i) {
	return myTree.treeCharacter.repeat((2 * i) + 1);
}

function growTree(myTree) {
		for (var i = 0; i < myTree.treeHeight; i++) {
			console.log(printSpaces(myTree.treeHeight, i) + printCharacters(myTree, i))
		}
	}

function validateTree() {
	var treeHeightInput = document.getElementById("treeHeight");
	var treeCharacterInput = document.getElementById("treeCharacter");
	var myTree = {treeHeight: treeHeightInput.value, treeCharacter: treeCharacterInput.value};
	growTree(myTree);
	if (treeHeightInput.value === "" || treeCharacterInput.value === "") {
		alert("Values are invalid!");
	}

}

function enterKeyPress(keypress) {
	if (keypress.which === 13) {
		validateTree();
	}
}

button.addEventListener("click", validateTree);
document.addEventListener("keypress", enterKeyPress);