let rows = 1;
let itemNumber = 1;

function addItem(){
	let table = document.getElementById('table');
	let row = table.insertRow(rows++);
	
	let itemNumberCell = row.insertCell(0);
	itemNumberCell.innerText = itemNumber;
	
	let nameCell = row.insertCell(1);
	let name = document.createElement('INPUT');
	name.setAttribute('type', 'text');
	name.placeholder = 'Item ' + itemNumber;
	nameCell.append(name);
	
	let priorityCell = row.insertCell(2);
	priorityCell.append(priorityFunction());

	itemNumber++;

}

function priorityFunction(){
	let priority = document.createElement('select');
	priority.name = 'priorityLevel';
	priority.id = 'priorityLevel';

	let op1 = document.createElement('option');
	op1.value = 1; op1.innerText = 'Low';

	let op2 = document.createElement('option');
	op2.value = 5; op2.innerText = 'Medium';
	
	let op3 = document.createElement('option');
	op3.value = 10; op3.innerText = 'High';

	priority.append(op1);
	priority.append(op2);
	priority.append(op3);

	return priority;
}

function deleteItem(itemNumberToBeDeleted){
	
}