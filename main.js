
// print spaces: 
// treeHeight - (i +1)

// print characters:
// (2 * i) + 1 

var button = document.getElementById("grow");
var treeHeight = document.getElementById("treeHeight");
var treeCharacter = document.getElementById("treeCharacter");
var myTree = {treeHeight, treeCharacter};

function printSpaces(myTree) {
	var height = treeHeight.value;
	return treeHeight - (treeHeight + 1);
}

function printCharacters(myTree) {
	var character = treeCharacter.value;
	return (2 * treeHeight) + 1;
}

function growTree(clickEvent) {
		return printSpaces(); printCharacters();
	}


function enterKeyPress(keypress) {
	if (keypress.which === 13) {
		growTree();
	}
}

console.log(growTree);
button.addEventListener("click", growTree);
document.addEventListener("keypress", enterKeyPress);