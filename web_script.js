let menuIcon =  document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active');
}

function toggleText() {
    var text = document.getElementById('more-text');
    var linkText = document.getElementById('read-more-text');

    if (text.style.display == 'none') {
        text.style.display = 'inline';
        linkText.innerHTML = 'Read Less';
    } else {
        text.style.display = 'none';
        linkText.innerHTML = 'Read More';
    }
}