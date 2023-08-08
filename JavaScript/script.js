

function toggleSidebar() {
    let sidebar = document.getElementById('sideBar');
    if (sidebar.style.transform === 'scaleX(0)') {
        sidebar.style.transform = 'scaleX(1)';
    } else {
        sidebar.style.transform = 'scaleX(0)';
    }
}



let hiddenCard = document.getElementsByClassName('card-hidden');
let seeAllCard = document.getElementById('seeAllCard');
let changeCardText = document.getElementById('cardText')
seeAllCard.addEventListener('click', () => {
    if (hiddenCard[0].style.display === 'none') {
        for (let index = 0; index < hiddenCard.length; index++) {
            hiddenCard[index].style.display = 'block';
            changeCardText.innerHTML = "See Less &larr;";
        }
    } else {
        for (let index = 0; index < hiddenCard.length; index++) {
            hiddenCard[index].style.display = 'none';
            changeCardText.innerHTML = "See More &rarr;";
        }
    }
});