// JavaScript Document
alert("JS attached");
var total_cost, concert, ticket_amount;
var database = firebase.database();
var orderRef = database.ref('tickets');

function setBooking() {
	ticket_amount = document.getElementById("ticket_quantity").value;
	var BOOKING_FEE = 10;
	if (ticket_amount < 1 || ticket_amount > 8 ) {
		document.getElementById("5A").innerHTML = "sorry you cant have less than 1 ticket or more than 8";
	} else {
		document.getElementById("5A").innerHTML = "";
		concert = document.getElementById("concert_select").value;
		var seat_type = document.getElementsByIdClassName("seat_type");
		var ticket_price = this.dataset.price;
		total_cost = Number(ticket_amount * ticket_price + BOOKING_FEE);
		document.getElementById("tickets").innerHTML = ticket_amount;
		document.getElementById("concert").innerHTML = concert;
		document.getElementById("ticket_indivdual_price").innerHTML = "$" + ticket_price;
		document.getElementById("total_cost").innerHTML = "$" + total_cost;
	}
}

function pushData() {
	alert("in push data function");
	var data = {
		concert:concert,
		totalCost:total_cost,
		quatitiy: ticket_price,
		pricePerTicket:ticket_price
	}
	alert("data should now be updated!");
	ticketsRef.push(data);
	setTimeout(function() {
		location.reload();
	}, 3000);
}
var seat = document.getElementsByClassName("seat_type");
for (var i = 0; i < seat.length; i ++) {
	seat[i].addEventListener('click', setBooking);
}
	
	
