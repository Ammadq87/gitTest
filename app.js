let rows = 1;
let itemNumber = 1;

function addItem(){
	let table = document.getElementById('table');
	let row = table.insertRow(rows++);
	let itemNumberCell = row.insertCell(0);
	itemNumberCell.innerText = itemNumber++;
	let nameCell = row.insertCell(1);
	nameCell.innerText = "Item "+(itemNumber-1);
	let priorityCell = row.insertCell(2);
	priorityCell.innerText = "1 - Low";

	let del = document.createElement('button');
	del.innerText = "Delete";
	let delCell = row.insertCell(3);
	
	delCell.append(del);
	
	// table.insertRow(rows++);
}