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
    const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
        headerHeight = document.querySelector('.header').offsetHeight,
        animationTime = 300,
        framesCount = 20;

    anchors.forEach(function (item) {
        // каждому якорю присваиваем обработчик события
        item.addEventListener('click', function (e) {
            // убираем стандартное поведение
            e.preventDefault();

            // для каждого якоря берем соответствующий ему элемент и определяем его координату Y
            let coordY;
            // для разных разрешений экрана
            if (window.innerWidth <= 850) {
                coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;
            } else {
                coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top - headerHeight + window.pageYOffset;
            }

            // запускаем интервал, в котором
            let scroller = setInterval(function () {
                // считаем на сколько скроллить за 1 такт
                let scrollBy = coordY / framesCount;

                // если к-во пикселей для скролла за 1 такт больше расстояния до элемента
                // и дно страницы не достигнуто
                if (scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
                    // то скроллим на к-во пикселей, которое соответствует одному такту
                    window.scrollBy(0, scrollBy);
                } else {
                    // иначе добираемся до элемента и выходим из интервала
                    window.scrollTo(0, coordY);
                    clearInterval(scroller);
                }
                // время интервала равняется частному от времени анимации и к-ва кадров
            }, animationTime / framesCount);
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