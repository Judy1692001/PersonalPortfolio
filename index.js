let body = document.body;

let menuBtn = document.getElementById('menu-btn');

let menuBar = document.getElementsByClassName('menu-bar')[0];

// let overLay = document.getElementsByClassName('overlay')[0];

let closeIcon = document.getElementById('close-icon');

menuBtn.addEventListener('click', function () {

    // body.style.overflow = "hidden";

    menuBar.classList.add('active');

    // overLay.classList.add('active');

});

closeIcon.addEventListener('click', function () {

    // body.style.overflow = "auto";

    menuBar.classList.remove('active');

    // overLay.classList.remove('active');

})

/* document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menu-btn");
    const closeBtn = document.getElementById("close-btn");
    const menuBar = document.querySelector(".menu-bar");

    // فتح القائمة عند الضغط على زر الـ Menu
    menuBtn.addEventListener("click", function () {
        menuBar.classList.add("active");
    });

    // إغلاق القائمة عند الضغط على زر الـ Close
    closeBtn.addEventListener("click", function () {
        menuBar.classList.remove("active");
    });

    // إغلاق القائمة عند الضغط خارجها
    document.addEventListener("click", function (event) {
        if (!menuBar.contains(event.target) && !menuBtn.contains(event.target)) {
            menuBar.classList.remove("active");
        }
    });
}); */
