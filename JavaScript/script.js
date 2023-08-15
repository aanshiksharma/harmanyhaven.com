// -------- DECLARING VARIABLES -------- //
// ------------ CONSTANTS ------------ //
const menu = document.getElementById('dropdownMenu');
const hiddenCard = document.querySelectorAll('.card-hidden');
const seeAllCard = document.getElementById('seeAllCard');
const changeCardText = document.getElementById('cardText');
const cards = document.getElementsByClassName('card');

// ------------ OBJECTS ------------ //
let htmlLinks = {
    card1: '/card1.html',
    card2: '/card2.html',
    card3: '/card3.html',
    card4: '/card4.html',
    card5: '/card5.html',
    card6: '/card6.html',
    card7: '/card7.html'
}



// ------------ LOGICS ------------ //
// Dropdown Menu Visibility Logic
function toggleMenu() {
    if (menu.style.transform === 'translateX(100%)') {
        menu.style.transform = 'translateX(0)';
    } else {
        menu.style.transform = 'translateX(100%)';
    }
}


// Home Page Cards' Visibility Logic
function toggleCards() {
    Array.from(hiddenCard).forEach(element => {
        if (element.style.display === 'none') {
            element.style.display = 'block';
            changeCardText.innerHTML = "See Less";
        } else {
            element.style.display = 'none';
            changeCardText.innerHTML = "See More";
        }
    });
}


// Clicking on a card take us to a different HTML Page 
Array.from(cards).forEach(element => {
    let index = Array.from(cards).indexOf(element);
    let link;
    for (let i = 0; i <= index; i++){
        if (i == index) {
            if (i === 0) link = htmlLinks.card1;
            else if (i === 1) link = htmlLinks.card2;
            else if (i === 2) link = htmlLinks.card3;
            else if (i === 3) link = htmlLinks.card4;
            else if (i === 4) link = htmlLinks.card5;
            else if (i === 5) link = htmlLinks.card6;
            else if (i === 6) link = htmlLinks.card7;
        }
    }
    element.addEventListener('click', () => {
        if (index === 7) toggleCards();
        else window.location.href = link;
    }); 
});