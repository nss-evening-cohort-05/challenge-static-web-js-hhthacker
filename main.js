
// print spaces: 
// treeHeight - (i +1)

// print characters:
// (2 * 1) + 1 

var button = document.getElementById("grow");
var treeHeight = document.getElementById("treeHeight");
var treeCharacter = document.getElementById("treeCharacter");
var i = {treeHeight, treeCharacter};

// Once the user enters in a number, 
// and a character, the user can either then just press the enter key 
// (as long as the cursor is in one of the input fields), 
// or click a button that is labeled "Grow your tree" 
// and the tree should be shown in the console. 
// This requires you to add an event listener to the button, 
// as well as an event listener for the enter/return key.


function growTree(i) {
	for (var i = 0; i < treeCharacter; i ++) {
		return (treeHeight - (i +1)) + (treeCharacter (2 * 1) + 1);
	}
	console.log(growTree); 
}



function button() {
console.log(treeHeight, treeCharacter);
}

function enterKeyPress(keypress) {
	if (keypress.which === 13) {
		growTree();
	}
}

button.addEventListener("click", growTree);

console.log(tree);