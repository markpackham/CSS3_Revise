//Get modal element
const modal = document.getElementById('simpleModal');
// Get open modal button
const modalBtn = document.getElementById('modalBtn');
//Get close button, we are getting a class and not an id so we end up with an array, we only want the 1st
const closeBtn = document.getElementsByClassName('closeBtn')[0];

//listen for click
modalBtn.addEventListener('click', openModal);
//listen for close click
closeBtn.addEventListener('click', closeModal);
//listen for outside click to make it vanish
window.addEventListener('click', outsideClick);

//Function to open modal
function openModal() {
//turn modal display:none to block
    modal.style.display = 'block';
}

//Do opposite of open modal
function closeModal() {
    modal.style.display = 'none';
}

//Close modal if clicked from outside of modal window
function outsideClick(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
}