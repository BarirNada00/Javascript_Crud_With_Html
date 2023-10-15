var selectedRow = null

var client = document.getElementsByClassName("btn btn-primary");
client.addEventListener("click",add);

function add() {
	event.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewClient(formData);
		}
        else{
            updateClient(formData);
		}
        resetForm();    
}

//Retrieve the data
function readFormData() {
    var formData = {};
    formData["name"] = document.getElementById("name").value;
    formData["email"] = document.getElementById("email").value;
    formData["phone"] = document.getElementById("phone").value;
    formData["address"] = document.getElementById("address").value;
    return formData;
}

//Insert the data
function insertNewClient(data) {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    if(!name || !email || !phone || ! address){
        alert("all fileds are required !");
        return;
    }
    var table = document.getElementById("table").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.name;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.email;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.phone;
    cell4 = newRow.insertCell(3);
		cell4.innerHTML = data.address;
    cell4 = newRow.insertCell(4);
        cell4.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
      
}

//Edit the data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("name").value = selectedRow.cells[0].innerHTML;
    document.getElementById("email").value = selectedRow.cells[1].innerHTML;
    document.getElementById("phone").value = selectedRow.cells[2].innerHTML;
    document.getElementById("address").value = selectedRow.cells[3].innerHTML;
}
function updateClient(formData) {
    selectedRow.cells[0].innerHTML = formData.name;
    selectedRow.cells[1].innerHTML = formData.email;
    selectedRow.cells[2].innerHTML = formData.phone;
    selectedRow.cells[3].innerHTML = formData.address;
}

//Delete the data
function onDelete(td) {
    if (confirm('Do you want to delete this client?')) {
        row = td.parentElement.parentElement;
        document.getElementById('table').deleteRow(row.rowIndex);
        resetForm();
    }
}

//Reset the data
function resetForm() {
    document.getElementById("name").value = '';
    document.getElementById("email").value = '';
    document.getElementById("phone").value = '';
    document.getElementById("address").value = '';
    selectedRow = null;
}
