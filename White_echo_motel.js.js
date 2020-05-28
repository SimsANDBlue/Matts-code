// JavaScript Document
alert("js is attached");
var dailyPrice , dailyPrice=0, room=0, totalCost; //global variables

function updateRoom() {
    // function called when a vehicle card div is clicked on
    dailyPrice=this.dataset.price; //price per night
    room = this .dataset.name; //selected room
    alert(room);
    alert(dailyPrice); //test alerts
    window.scrollTo(0, document.getElementById("roomInformation").offsetTop - 40);
    document.getElementById("roomOutput").innerHTML=room; //ouput to the divs in your html
    document.getElementById("priceOutput").innerHTML= "$"+dailyPrice;
	updateBooking();
}
   
function updateBooking(){
    var addItems = document.getElementsByClassName('addCheck');
    // this collects all my additional items checkboxes and stores them in an object array
    var checkedAddItems = [];  //empty list to add the selected additional items to
    var addCost = 0; //holds the cost of the checkboxes
    for (var i = 0; i < addItems.length; i++) {
        if (addItems[i].checked) {
            checkedAddItems.push(' ' + addItems[i].value);//finds the value
            alert(checkedAddItems);
            addCost += Number(addItems[i].dataset.price);
            alert(addCost);
        }
    }
    var checkIn = document.getElementById("checkInDate").value;
    var numberNights = document.getElementById("numberNights").value;
    alert("number nights" + numberNights);
    alert("check in" + checkIn);
    totalCost = addCost + dailyPrice*numberNights;
    alert("total cost"+ totalCost);
    document.getElementById("dateOutput").innerHTML= checkIn;
    document.getElementById("totalOutput").innerHTML="$"+totalCost;
    document.getElementById("nightsOutput").innerHTML=numberNights;
    document.getElementById("extrasOutput").innerHTML=checkedAddItems;  
}

function checkInputs() {
	alert("Inside check inputs");

}


// event listener for when a user selects nights/date/extras is clicked
var allInputs = document.getElementsByClassName('addCheck');
for (var i = 0; i < allInputs.length; i++) {
    allInputs[i].addEventListener('input', updateBooking);
}

//event listener that will call the update room function if a card is clicked
var roomInputs = document.getElementsByClassName('roomCard');
for (i = 0; i < roomInputs.length; i++) {
    roomInputs[i].addEventListener('click', updateRoom);
}