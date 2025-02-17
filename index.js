let body = document.body;

let menuIcon = document.getElementById('menu-icon');

let menuBar = document.getElementsByClassName('menu-bar')[0];

let overLay = document.getElementsByClassName('overlay')[0];

let closeIcon = document.getElementById('close-icon');

menuIcon.addEventListener('click', function () {

    body.style.overflow = "hidden"; /*?*/

    menuBar.classList.add('active');

    overLay.classList.add('active');

});

closeIcon.addEventListener('click', function () {

    body.style.overflow = "auto"; /*?*/

    menuBar.classList.remove('active');

    overLay.classList.remove('active');

})