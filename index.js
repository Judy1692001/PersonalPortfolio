let body = document.body;

let overlay = document.getElementsByClassName('overlay')[0];

let menuBtn = document.getElementById('menu-btn');

let menuBar = document.getElementsByClassName('menu-bar')[0];

const menuLinks = document.querySelectorAll(".menu-link");

let closeIcon = document.getElementById('close-icon');

menuBtn.addEventListener('click', function () {

    body.style.overflow = "hidden";

    // body.style.overflow = "hidden";

    menuBar.classList.add('active');

    overlay.classList.add("active");

    // overlay.classList.add("active");

    // body.classList.add("blur");

    // overLay.classList.add('active');

});

closeIcon.addEventListener('click', function () {

    body.style.overflow = "auto";

    // body.style.overflow = "auto";

    menuBar.classList.remove('active');

    overlay.classList.remove("active");

    // overlay.classList.remove("active");

    // body.classList.remove("blur");

    // overLay.classList.remove('active');

})

// ✅ إغلاق القائمة عند الضغط على الـ overlay
overlay.addEventListener("click", () => {

    menuBar.classList.remove("active");

    overlay.classList.remove("active");

    body.classList.remove("blur");

});

menuLinks.forEach(link => {

    link.addEventListener("click", (event) => {

        event.preventDefault(); // منع السلوك الافتراضي للنقل الفوري
        
        const targetId = link.getAttribute("href"); // جلب الـ ID المطلوب
        
        document.querySelector(targetId).scrollIntoView({ behavior: "smooth" }); // النقل السلس
        
        closeMenu(); // إغلاق القائمة بعد الانتقال

    });

});

// ✅ دالة لإغلاق القائمة وإزالة التأثيرات
function closeMenu() {

    menuBar.classList.remove("active");

    overlay.classList.remove("active");

    body.classList.remove("blur");

}

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

const email = document.querySelector('.email-text');

const copyEmail = document.querySelector('#copy-email');

const phone = document.querySelector('.phone-text');

const copyPhone = document.querySelector('#copy-phone');

copyEmail.addEventListener('click', () => {

    navigator.clipboard.writeText(email.textContent).then(() => {

        alert('email copied to clipboard successfully');

    }).catch(err => {

        alert('failed to copy email to clipboard');

    });

});

copyPhone.addEventListener('click', () => {
    
    navigator.clipboard.writeText(phone.textContent).then(() => {

        alert('phone copied to clipboard successfully');

    }).catch(err => {

        alert('failed to copy phone to clipboard');

    });

});

const themeBtn = document.getElementById('nav-theme-toggler');

themeBtn.addEventListener('click', () => {

    body.classList.toggle('dark-theme');

});

const menuThemeTglr = document.getElementById('menu-theme-toggler');

menuThemeTglr.addEventListener('click', () => {

    body.classList.toggle('dark-theme');

});