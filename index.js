// Menu - hamburger

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');

function setMobMenu() {
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
};

if (iconMenu) {
    iconMenu.addEventListener('click', setMobMenu);
};

// Scrolling (navigation by links)

const navLinks = document.querySelectorAll('.navlink[data-goto]');

function scrollToSection(e) {
    e.preventDefault();
    const activeLink = e.target;

    if (activeLink.dataset.goto && document.querySelector(activeLink.dataset.goto)) {
        const gotoSection = document.querySelector(activeLink.dataset.goto);
        const gotoSectionValue = gotoSection.getBoundingClientRect().top + scrollY - document.querySelector('.header').offsetHeight;

        if (iconMenu.classList.contains('_active')) {
            document.body.classList.remove('_lock');
            iconMenu.classList.remove('_active');
            menuBody.classList.remove('_active');
        };

        window.scrollTo({
            top: gotoSectionValue,
            behavior: 'smooth'
        });
    };
};

if (navLinks.length) {
    navLinks.forEach(navLink => {
        navLink.addEventListener('click', scrollToSection);
    });
};

// Adding to cart

const addBtns = document.querySelectorAll('.fm__order__button');
const cartCounter = document.getElementById('counter__value');

function addToCart(e) {
    const parentClosest = e.target.closest('.fm__card__order');
    const inputClosest = parentClosest.querySelector('.fm__order__counter');
    const inputValue = inputClosest.valueAsNumber;
    const counterValue = +cartCounter.innerHTML;

    if (inputValue > 0 && Number.isInteger(inputValue)) {
        cartCounter.innerHTML = counterValue + inputValue;
    } else {
        inputClosest.valueAsNumber = 1;
    };
};

if (addBtns.length) {
    addBtns.forEach(addBtn => {
        addBtn.addEventListener('click', addToCart);
    });
};

// Hiding information line for mobile

const header = document.querySelector('.header');
const infoLine = document.querySelector('.information-line');
let isScrollListenerActive = false;

function stickHeader() {
    const scrollPosition = scrollY;

    if (scrollPosition >= infoLine.offsetHeight) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    };
};

function scrollListener() {
    window.addEventListener('scroll', stickHeader);
};

function resizeListener() {
    window.addEventListener('resize', () => {
        if (window.innerWidth < 768 && !isScrollListenerActive) {
            isScrollListenerActive = true;
            scrollListener();
        } else if (window.innerWidth > 768 && isScrollListenerActive) {
            isScrollListenerActive = false;
            window.removeEventListener('scroll', stickHeader);
        };
    });
};

if (window.innerWidth < 768) {
    scrollListener();
    isScrollListenerActive = true;
};

resizeListener();