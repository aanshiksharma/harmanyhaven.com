// -------- DECLARING VARIABLES -------- //
// ------------ CONSTANTS ------------ //
const menu = document.getElementById('dropdownMenu');
const hiddenCard = document.querySelectorAll('.card-hidden');
const seeAllCard = document.getElementById('seeAllCard');
const changeCardText = document.getElementById('cardText');

// ------------ LOGICS ------------ //
// Dropdown Menu Visibility Logic
function toggleMenu() {
    if (menu.style.transform === 'translateY(calc(-100% - 62px))') {
        menu.style.transform = 'translateY(0)';
    } else {
        menu.style.transform = 'translateY(calc(-100% - 62px))';
    }
}


// Home Page Cards' Visibility Logic
function toggleCards() {
    Array.from(hiddenCard).forEach(element => {
        if (element.style.display === 'none') {
            element.style.display = 'block';
            changeCardText.innerHTML = "See Less &larr;";
        } else {
            element.style.display = 'none';
            changeCardText.innerHTML = "See More &rarr;";
        }
    });
}