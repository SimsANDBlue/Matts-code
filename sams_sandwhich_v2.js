// JavaScript Document
var database = firebase.database();
var orderRef = database.ref('order');

function loopForm(form) {
	alert("check your order please"); //test alert
	var sandwhichOrder = []; //defines an empty list
	for (var i = 0; i < form.elements.length; i++) { //for loop through the form
		if (form.elements[i].type == "radio") {
			if (form.elements[i].checked) {
				sandwhichOrder.push(form.elements[i].value);
				alert(sandwhichOrder); //test alert
			}
		}
		if (form.elements[i].type == 'checkbox') {
			if (form.elements[i].checked) {
				sandwhichOrder.push(form.elements[i].value + ' ');
				alert(sandwhichOrder); //test alert
			}
			document.getElementById("radioResults").innerHTML = sandwhichOrder;
		}
		
	}
	//once the for loop has gone through each element in the form
	//it will output the list using the DOM
	var customer_name = customers_name.value;
	var phone_number = customers_number.value;
	alert(customer_name + phone_number)
	var data = {
		sandwhich:sandwhichOrder,
		name:customer_name,
		cell_number:phone_number
	}
	orderRef.push(data);
	alert("data has been pushed");
}