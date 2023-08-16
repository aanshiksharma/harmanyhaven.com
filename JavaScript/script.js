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
    card7: '/card7.html',
    card8: '/card8.html',
    card9: '/card9.html',
    card10: '/card10.html'
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
            if (i === 0) link = 'harmony-haven/card1.html';
            else if (i === 1) link = 'harmony-haven/card2.html';
            else if (i === 2) link = 'harmony-haven/card3.html';
            else if (i === 3) link = 'harmony-haven/card4.html';
            else if (i === 4) link = 'harmony-haven/card5.html';
            else if (i === 5) link = 'harmony-haven/card6.html';
            else if (i === 6) link = 'harmony-haven/card7.html';
            else if (i === 7) link = 'harmony-haven/card8.html';
            else if (i === 8) link = 'harmony-haven/card9.html';
            else if (i === 9) link = 'harmony-haven/card10.html';
        }
    }
    element.addEventListener('click', () => {
        if (index === 10) toggleCards();
        else window.location.href = link;
    }); 
});