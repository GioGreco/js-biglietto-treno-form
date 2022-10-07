"use strict";

let app = document.getElementById('app-js');

const inputWrapper = document.createElement('div');
inputWrapper.className = 'inputWrapper';
app.appendChild(inputWrapper);

//append first input box - distance
inputWrapper.innerHTML += `<label for="distance">Quanti km vuoi percorrere?</label>`;
const inputDistance = document.createElement('input');
inputDistance.type = 'text';
inputDistance.id = 'distance';
inputDistance.name = 'trip-distance';
inputDistance.placeholder = '- -';
inputWrapper.appendChild(inputDistance);
//append second input box - age
inputWrapper.innerHTML += `<label for="age">Quanti hanni hai?</label>`;
const inputAge = document.createElement('input');
inputAge.type = 'text';
inputAge.id = 'age';
inputAge.name = 'passenger-age';
inputAge.placeholder = '- -';
inputWrapper.appendChild(inputAge);

//append button
const createTicket = document.createElement('button');
createTicket.id = 'btn';
createTicket.innerHTML = `<i class="fa-solid fa-train"></i>`;
app.appendChild(createTicket);
//append ticket container
const ticket = document.createElement('div');
ticket.className = 'container d-none';
app.appendChild(ticket);

//HTML inside ticket container
ticket.innerHTML = `<div class="full-ticket">
<div class="ticket-left">
    <div class="convalidate">CONVALIDATE</div>
</div>
<div class="ticket-middle">
    <div class="wrapper-middle">
        <hr>
        <p>You're going on a</p>
        <h1>Random Trip</h1>
        <p>Your Destination is RANDOM</p>
        <hr>
        <div class="infobox-middle">
            <div id="trip-length">
            </div>
            <div id="passenger-age">
            </div>
            <div id="ticket-price">
            </div>
        </div>
    </div>
</div>
<div class="ticket-right">
    <div class="wrapper-right">
        <img src="./img/train.png" alt="train pic">
        <div>
            NAME: ********
        </div>
        <div>
            SURNAME: ********
        </div>
        <img src="./img/Barcode-PNG-Pic.png" alt="barcode-pic">
    </div>
</div>
</div>
</div>
`;

const btn = document.getElementById('btn');
const costPerKm = 0.21;

//this function calculate the ticket price, applying discounts for under-18 and over-65 y/o.
function generateTicket(){
    let distance = parseInt(document.getElementById('distance').value);
    let age = parseInt(document.getElementById('age').value);

    if(age < 18){
        let ticketPrice = ((costPerKm * distance) / 100) * 80;
        let price = `<p>Journey Price</p> € ${ticketPrice.toFixed(2)}`;
        let par3 = document.getElementById('ticket-price');
        par3.innerHTML = price;
    }
    else if(age > 65){
        let ticketPrice = ((costPerKm * distance) / 100) * 60;
        let price = `<p>Journey Price</p> € ${ticketPrice.toFixed(2)}`;
        let par3 = document.getElementById('ticket-price');
        par3.innerHTML = price;
    }
    else{
        let ticketPrice = costPerKm * distance;
        let price = `<p>Journey Price</p> € ${ticketPrice.toFixed(2)}`;
        let par3 = document.getElementById('ticket-price');
        par3.innerHTML = price;
    };

    let par1 = document.getElementById('trip-length');
    let par2 = document.getElementById('passenger-age');

    let tripDistance = `<p>Distance</p> ${distance} km`;
    let passengerAge = `<p>Your Age</p> ${age} y/o`;

    par1.innerHTML = tripDistance;
    par2.innerHTML = passengerAge;
}

//this function toggles the display property of the ticket
function showTicket(){
        const list = ticket.classList;
        list.toggle('d-none');
};

btn.addEventListener('click', generateTicket);
btn.addEventListener('click', showTicket);