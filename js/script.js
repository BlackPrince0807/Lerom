// AOS
AOS.init();

// Dropdown Menu
$('.dropdown').click(function() {
    $(this).attr('tabindex', 1).focus();
    $(this).toggleClass('active');
    $(this).find('.dropdown-menu').slideToggle(300);
});

// Menu modal

const menuIcon = document.querySelector(".menu_icon");
const menuModal = document.querySelector(".nav__menu-modal");
const menuKres = document.querySelector(".menu_modal_kres");


menuIcon.addEventListener("click", () => {
    menuModal.classList.add('transfor');
});

menuKres.addEventListener("click", () => {
    menuModal.classList.remove('transfor');
})

// Slider

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});