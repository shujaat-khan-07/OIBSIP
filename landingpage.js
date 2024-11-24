const toggleButton = document.querySelector('.toggle-button');
const navBarLinks = document.querySelector('.navbar-links')

toggleButton.addEventListener('click', function() {
   navBarLinks.classList.toggle('active'); //add or remove active class

    if(navBarLinks.classList.contains("active")) {
    toggleButton.src="./images/icon-close.svg";
    } else {
    toggleButton.src="./images/icon-hamburger.svg";
    }
});











