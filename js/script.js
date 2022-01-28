// AOS
AOS.init();

// Dropdown Menu
$('.dropdown').click(function() {
    $(this).attr('tabindex', 1).focus();
    $(this).toggleClass('active');
    $(this).find('.dropdown-menu').slideToggle(300);
});

// Menu modal

const hamburgerIcon = document.getElementsByClassName('hamburger__menu-icon');