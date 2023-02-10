const nav = document.querySelectorAll('.navigator');

window.addEventListener('load', nav[0].classList.add('active'))
window.addEventListener('scroll', () => {
    if (window.scrollY >= 0 && window.scrollY < 950) {
        nav[0].classList.add('active');
        nav[1].classList.remove('active');
        nav[2].classList.remove('active');
    } else if (window.scrollY >= 950 && window.scrollY < 1300) {
        nav[0].classList.remove('active');
        nav[1].classList.add('active');
        nav[2].classList.remove('active');
    } else if (window.scrollY >= 1300) {
        nav[0].classList.remove('active');
        nav[1].classList.remove('active');
        nav[2].classList.add('active');
    }

})