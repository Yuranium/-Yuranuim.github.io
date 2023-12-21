const header = document.querySelector('header')
let prevScrollPos = window.pageYOffset;

window.addEventListener('scroll', function () {
    const currentScrollPos = window.pageYOffset;

    if (currentScrollPos > 100) {
        if (prevScrollPos > currentScrollPos) {
            header.style.top = '0';
        } else {
            header.style.top = `-${header.offsetHeight}px`;
        }
    } else {
        header.style.top = '0';
    }

    prevScrollPos = currentScrollPos;
});
document.addEventListener('DOMContentLoaded', function() {
    var scrollUpButton = document.getElementById('scrollTop');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            scrollUpButton.style.display = 'block';
        } else scrollUpButton.style.display = 'none';
    });
    scrollUpButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});