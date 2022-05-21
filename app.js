let rows = 1;
let itemNumber = 1;

let sort = document.getElementById('sortTable');
sort.addEventListener('change', function(){
	sortTable(sort.value);
})

function sortTable(value){

}

function addItem(){
	let table = document.getElementById('table');
	let row = table.insertRow(rows);
	row.id = `row_${rows}`;
	table.style.background = `red`;
	
	let itemNumberCell = row.insertCell(0);
	itemNumberCell.innerText = itemNumber;
	
	let nameCell = row.insertCell(1);
	let name = document.createElement('INPUT');
	name.setAttribute('type', 'text');
	name.placeholder = `Item ${itemNumber}`;
	nameCell.append(name);
	
	let priorityCell = row.insertCell(2);
	priorityCell.append(priorityFunction('Low', 'Medium', 'High', 'priorityCell'));

	let statusCell = row.insertCell(3);
	statusCell.append(priorityFunction('Not Started', 'In-process', 'Completed', 'statusCell'));

	rows++;
	itemNumber++;
}

function priorityFunction(){
	let options = document.createElement('select');
	let values = [0.1, 0.5, 1];
	for(let i=0; i<arguments.length-1; i++){
		let option = document.createElement('option');
		option.value = values[i]
		option.innerText = arguments[i];
		options.append(option);
	}
	
	if (arguments[arguments.length-1] === 'statusCell'){
		options.id = `statusCell_${rows}`;
		options.addEventListener('change', function(){
			let currentRowNum = options.id.split('_')[options.id.split('_').length-1];
			let currentRow = document.getElementById(`row_${currentRowNum}`);
			toggle(currentRow, options);
		})
	} else {
		options.id = `priorityCell_${rows}`;
	}

	return options;
}

function toggle(currentRow, options){
	if (options.value == 0.1){
		currentRow.style.background = 'red';
	} else if (options.value == 0.5){
		currentRow.style.background = 'orange';
	} else {
		currentRow.style.background = 'green';
	}
}
