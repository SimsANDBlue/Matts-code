// JavaScript Document
var database = firebase.database();
var orderRef = database.ref('order');

function loopForm(form) {
	submit_button.enable;
	alert("check your order please"); //test alert
	var sandwhichOrder = []; //defines an empty list
	for (var i = 0; i < form.elements.length; i++) { //for loop through the form
		if (form.elements[i].type == "radio") {
			if (form.elements[i].checked) {
				sandwhichOrder.push(form.elements[i].value);
				alert(sandwhichOrder); //test alert
			}
		}
		if (form.elements[ i ].type == 'checkbox') {
			if (form.elements[i].checked) {
				sandwhichOrder.push(form.elements[i].value + ' ');
				alert(sandwhichOrder); //test alert
			}
		}
		
	}
	checkInputs(sandwhichOrder);
}
	//once the for loop has gone through each element in the form
	//it will output the list using the DOM
function checkInputs(sandhwichOrder){
	var customer_name = customers_name.value;
	var phone_number = customers_number.value;
	alert("In check name function");
	if(document.getElementById("customers_name").validity.patternMismatch){
		alert("please enter a valid name")
		return;
	}
	if(document.getElementById("customers_number").validity.patternMismatch){
		alert("Please enter a valid number");
		return;
	}else{
		alert(customer_name + phone_number);
		document.getElementById("radioResults").innerHTML = "name: " + customer_name + " " + "phone_number: " + phone_number;
		document.getElementById("radioResults").innerHTML = "sandwhich order:" + sandhwichOrder;
		sendData(customer_name,phone_number,sandhwichOrder);
		}
	}
	
function sendData(customer_name,phone_number,sandwhichOrder){
	var data = {
		sandwhich:sandwhichOrder,
		name:customer_name,
		cell_number:phone_number
	}
	orderRef.push( data );
	alert("data has been pushed");
	document.getElementById('confirmOverlay').style.height = "100%";
	setTimeout(function() {
				location.reload();
		},		3000);
	submit_button.disable;
}











