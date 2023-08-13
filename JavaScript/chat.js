// -------- DECLARING VARIABLES -------- //
// ------------ CONSTANTS ------------ //
const inputField = document.getElementById('userMessage');
const chatSection = document.getElementById('chatSection');
const sendButton = document.getElementById('sendButton');



// ------------ LOGICS ------------ //
// Chatting Logic
sendButton.addEventListener('click', (event) => {
    event.preventDefault();
    // -------- DECLARING VARIABLES -------- //
    const div = document.createElement('div');
    // const div = document.createElement('div');
    const p = document.createElement('p');
    let message = inputField.value;

    // Assigning Classes
    div.className = 'message user';
    p.className = 'text';

    // Making a proper and Useable HTML Element
    p.innerHTML = message;

    // Appending Childs to make a proper and useable HTML Element
    if (p.innerHTML !== '') {
        div.appendChild(p);
        chatSection.appendChild(div);
    }

    // Clearing the Input Field
    inputField.value = '';
});