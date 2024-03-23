
let clientsOffset = 11;
let clientsSpeed = 15000;
if (screen.width <= 575) {
    clientsOffset = 15;
    clientsSpeed = 22000;
}
function animateRight(cfl1, cfl1w) {
    cfl1.style.transform = "translateX(0)";
    cfl1.animate({ transform: 'translateX(-' + cfl1w + 'px)' }, clientsSpeed, "")

}
let clientsFirst = document.querySelector('.mark');
if (clientsFirst) {
    let clientsFirstLine1 = clientsFirst.querySelector('.mark__wrap');
    let clientsFirstLine1Width = clientsFirstLine1.offsetWidth / 2 + clientsOffset;
    animateRight(clientsFirstLine1, clientsFirstLine1Width);
    setInterval(animateRight, clientsSpeed, clientsFirstLine1, clientsFirstLine1Width);
}

let partnFirst = document.querySelector('.partner');
if (partnFirst) {
    let partnFirstLine1 = partnFirst.querySelector('.partner__wrap');
    let partnFirstLine1Width = partnFirstLine1.offsetWidth / 2 + clientsOffset;
    animateRight(partnFirstLine1, partnFirstLine1Width);
    setInterval(animateRight, clientsSpeed, partnFirstLine1, partnFirstLine1Width);
}

let counter = document.querySelectorAll('.counter');
let limit = 0; // Переменная, чтобы останавливать функцию, когда всё запустится.
window.addEventListener('scroll', function () {
    if (limit == counter.length) { return; }

    for (let i = 0; i < counter.length; i++) {
        let pos = counter[i].getBoundingClientRect().top; //Позиция блока, считая сверху окна
        let win = window.innerHeight - 40; // На 40 пикселей меньше, чем высота окна
        if (pos < win && counter[i].dataset.stop === "0") {
            counter[i].dataset.stop = 1; // Останавливаем перезапуск счета в этом блоке
            let x = parseInt(counter[i].dataset.from);
            limit++; // Счетчик будет запущен, увеличиваем переменную на 1
            let int = setInterval(function () {
                // Раз в 60 миллисекунд будет прибавляться 50-я часть нужного числа
                x = x + Math.ceil((counter[i].dataset.to - counter[i].dataset.from) / 50);
                counter[i].innerText = x;
                if (x > counter[i].dataset.to) {
                    //Как только досчитали - стираем интервал.
                    counter[i].innerText = counter[i].dataset.to;
                    clearInterval(int);
                }
            }, 60);
        }
    }
});

let revs = document.querySelectorAll(".reviews__block");
if (revs) {
    revs.forEach((el) => {
        el.addEventListener('mousemove', (e) => {
            let x = e.pageX - el.offsetLeft - 85,
                y = e.pageY - el.offsetTop - 85;
            el.querySelector(".reviews__circle").style.top = y + 'px';
            el.querySelector(".reviews__circle").style.left = x + 'px';
        })
    });
}

let popupClose = document.querySelectorAll('.popup__close');
let popup = document.querySelector('.overlay-call');
let popupThx = document.querySelector('.overlay-thx');
let popupOpen = document.querySelectorAll('.modal');
popupClose.forEach((el) => {
    el.addEventListener('click', function () {
        el.closest(".overlay").classList.remove('overlay-active');
    });
});
popupOpen.forEach((el) => {
    el.addEventListener('click', function (e) {
        e.preventDefault();
        popup.classList.add('overlay-active');
    });
});
document.querySelector('.overlay-call').onclick = function (e) {
    if (!e.target.closest('.popup')) {
        popup.classList.remove('overlay-active');
    };
};
document.querySelector('.overlay-thx').onclick = function (e) {
    if (!e.target.closest('.popup')) {
        popupThx.classList.remove('overlay-active');
    };
};

function sendData(f) {
    const XHR = new XMLHttpRequest();

    // Bind the FormData object and the form element
    const FD = new FormData(f);

    // Define what happens on successful data submission
    XHR.addEventListener("load", function (event) {
        document.querySelector(".overlay-call .call__form").reset();
        document.querySelector(".call .call__form").reset();
        popup.classList.remove('overlay-active');
        popupThx.classList.add('overlay-active');
    });

    // Define what happens in case of error
    XHR.addEventListener("error", function (event) {
    });

    // Set up our request
    XHR.open("POST", "/mail.php");

    // The data sent is what the user provided in the form
    XHR.send(FD);
}

const form = document.querySelector(".overlay-call .call__form");
const form2 = document.querySelector(".call .call__form");
form.addEventListener("submit", function (event) {
    event.preventDefault();

    sendData(form);
});
form2.addEventListener("submit", function (event) {
    event.preventDefault();

    sendData(form2);
});

const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()

        const blockID = anchor.getAttribute('href').substr(1)

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}

document.querySelector(".header__burg").addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(".header__burg").classList.toggle("active");
    document.querySelector(".menu").classList.toggle("active");
    if (document.querySelector(".menu").classList.contains("active")) {
        document.body.style.overflow = 'hidden';
        window.scrollTo(0, 0);
    } else {
        document.body.style.overflow = 'visible';
    }
});

const menulinks = document.querySelectorAll('.menu__menu a')
const menulinks2 = document.querySelector('.menu__btn')
for (let ml of menulinks) {
    ml.addEventListener('click', function (e) {
        e.preventDefault()
        document.querySelector(".menu").classList.remove("active");
        document.querySelector(".header__burg").classList.remove("active");
        document.body.style.overflow = 'visible';

    })
}
menulinks2.addEventListener('click', function (e) {
    e.preventDefault()
    document.querySelector(".menu").classList.remove("active");
    document.querySelector(".header__burg").classList.remove("active");
    document.body.style.overflow = 'visible';

})
// if (window.innerWidth >= 1200) {
//     let bg1 = document.querySelector('.main__block1');
//     let bg2 = document.querySelector('.main__block2');
//     let bg3 = document.querySelector('.main__block3');
//     window.addEventListener('mousemove', function (e) {
//         let x = e.clientX / window.innerWidth;
//         let y = e.clientY / window.innerHeight;
//         bg1.style.transform = 'translate(-' + x * 30 + 'px, -' + y * 30 + 'px)';
//         bg2.style.transform = 'translate(-' + x * 30 + 'px, -' + y * 30 + 'px)';
//         bg3.style.transform = 'translate(-' + x * 30 + 'px, -' + y * 30 + 'px)';
//     });
// }

let lights = document.querySelectorAll(".appr__light");
if (lights) {
    lights.forEach((el) => {
        let lightTimer = Math.random() * 10000 + 2000;
        setInterval(() => {
            el.classList.add("active");
            setTimeout(() => {
                el.classList.remove("active")
            }, 1000);
        }, lightTimer);
    });
}

const swiper1 = new Swiper('.features__cont-block1 .swiper', {
    slidesPerView: "auto",
    spaceBetween: 20,
});
const swiper2 = new Swiper('.features__cont-block2 .swiper', {
    slidesPerView: "auto",
    spaceBetween: 20,
});
const swiper3 = new Swiper('.features__cont-block3 .swiper', {
    slidesPerView: "auto",
    spaceBetween: 20,
});
swiper1.on("slideChange", () => {
    document.querySelector('.features__cont-block1 .features__curr').innerHTML = "0" + (swiper1.activeIndex + 1);
});
swiper2.on("slideChange", () => {
    document.querySelector('.features__cont-block2 .features__curr').innerHTML = "0" + (swiper2.activeIndex + 1);
});
swiper3.on("slideChange", () => {
    document.querySelector('.features__cont-block3 .features__curr').innerHTML = "0" + (swiper3.activeIndex + 1);
});

let tabs = document.querySelectorAll('.features__tab');
let conts = document.querySelectorAll('.features__cont-block');
if (tabs) {
    tabs.forEach((el) => {

        el.addEventListener('click', function () {
            let index = Array.prototype.indexOf.call(tabs, this);
            if (!this.classList.contains('active')) {
                document.querySelectorAll('.features__tab').forEach((el2) => {
                    el2.classList.remove('active');
                });
                this.classList.add('active');
                conts.forEach((el3) => {
                    el3.classList.remove('active');
                });
                conts[index].classList.add('active')
            }
        });
    });
}



const cursor = $("#ball");
var ease = 1;
var pos = { x: 0, y: 0 };
var mouse = { x: 0, y: 0 };



window.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
});

TweenLite.ticker.addEventListener("tick", update);

function update() {

    pos.x += (mouse.x - pos.x) * ease;
    pos.y += (mouse.y - pos.y) * ease;

    cursor.attr("cx", pos.x);
    cursor.attr("cy", pos.y);
}

$('a').hover(
    function () {
        TweenMax.to(cursor, .6, { attr: { r: '40', ease: Power4.easeOut } })
    }, function () {
        TweenMax.to(cursor, .6, { attr: { r: '25', ease: Power4.easeOut } })
    }
);
$('button').hover(
    function () {
        TweenMax.to(cursor, .6, { attr: { r: '40', ease: Power4.easeOut } })
    }, function () {
        TweenMax.to(cursor, .6, { attr: { r: '25', ease: Power4.easeOut } })
    }
);
$('.features__tab').hover(
    function () {
        TweenMax.to(cursor, .6, { attr: { r: '40', ease: Power4.easeOut } })
    }, function () {
        TweenMax.to(cursor, .6, { attr: { r: '25', ease: Power4.easeOut } })
    }
);