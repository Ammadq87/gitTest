let rows = 1;
let itemNumber = 1;

function addItem(){
	let table = document.getElementById('table');
	let row = table.insertRow(rows++);
	table.style.background = 'red';
	
	let itemNumberCell = row.insertCell(0);
	itemNumberCell.innerText = itemNumber;
	
	let nameCell = row.insertCell(1);
	let name = document.createElement('INPUT');
	name.setAttribute('type', 'text');
	name.placeholder = 'Item ' + itemNumber;
	nameCell.append(name);
	
	let priorityCell = row.insertCell(2);
	priorityCell.append(priorityFunction('Low', 'Medium', 'High'));

	let statusCell = row.insertCell(3);
	statusCell.append(priorityFunction('Not Started', 'In-process', 'Completed'));

	itemNumber++;
}

function priorityFunction(){
	let table = document.getElementById('table');
	let options = document.createElement('select');
	options.name = 'priorityLevel';
	options.id = 'priorityLevel'+(rows-1);

	let values = [0.1, 0.5, 1];
	for(let i=0; i<arguments.length; i++){
		let option = document.createElement('option');
		option.value = values[i]
		option.innerText = arguments[i];
		options.append(option);
	}
	
	options.addEventListener('change', function(){
		let rowNumber = rows-1;
			if (options.value == 0.1){
				toggle('red', rowNumber);
				console.log('Not Started');
			} else if (options.value == 0.5){
				toggle('orange', rowNumber);
				console.log('In-Process');
			} else {
				toggle('green', rowNumber);
				console.log('Completed');
			}
		})

	return options;
}

function toggle(color, rowNumber){
	let table = document.getElementById('table');
	for(let i=0; i<4; i++){
		table.rows[rowNumber].cells[i].style.background = color;
	}
}
