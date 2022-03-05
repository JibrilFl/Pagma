/* Проверка поддержки webp, добавление класса webp или no-webp для HTML */

export function isWebp() {
    // Проверка поддержки webp
    function testWebP(callback) {

        let webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }

    // Добавление класса _webp или _no-webp для HTML    
    testWebP(function (support) {
        let className = support === true ? 'webp' : 'no-webp';
        document.documentElement.classList.add(className);
    });
}

export function colorTheme() {
    const input = document.querySelector('#colorTheme'),
        body = document.querySelector('body');

    input.addEventListener('click', function () {
        if (this.checked) {
            body.classList.add('white');
        } else {
            body.classList.remove('white');
        }
    });
}

export function slider() {
    $('.customers__slider').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
};

export function anchor() {

    document.querySelectorAll('a[href^="#"').forEach(link => {

        link.addEventListener('click', function (e) {
            e.preventDefault();

            let href = this.getAttribute('href').substring(1);

            const scrollTarget = document.getElementById(href);

            let topOffset;
            // для разных разрешений экрана
            if (window.innerWidth <= 850) {
                topOffset = document.querySelector('.header').offsetHeight;
            } else {
                topOffset = 0;
            }
            // const topOffset = 0; // если не нужен отступ сверху 

            const elementPosition = scrollTarget.getBoundingClientRect().top;
            const offsetPosition = elementPosition - topOffset;

            window.scrollBy({
                top: offsetPosition,
                behavior: 'smooth'
            });
        });
    });
}

export function burgerMenu() {
    let burger = document.querySelector('.header__burger'),
        menu = document.querySelector('.header__wrapper'),
        link = document.querySelectorAll('.header__nav_link');

    function modal() {
        burger.classList.toggle('active');
        menu.classList.toggle('active');
    }

    link.forEach(item => {
        item.addEventListener('click', function () {
            if (burger.classList.contains('active')) {
                modal();
            }
        });
    });

    burger.addEventListener('click', modal);
}