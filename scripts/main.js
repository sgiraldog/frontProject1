let header = document.querySelector('.main-banner');
let headerSlides = ['url("images/home-bg.jpg")', 'url("images/home-bg-2.jpg")']
let toggleButton = document.querySelector('.toggle-button');
let navBar = document.querySelector('.main-nav__mobile');
let desktopItems = document.querySelectorAll('.main-nav__item .main-nav__link');
let mobileItems = document.querySelectorAll('.main-nav__mobile-items .main-nav__link');
let questions = document.querySelectorAll('.question-item');
let slides = document.querySelectorAll('.carousel-slide');
let mobileDots = document.querySelectorAll('.mobile-dot');
let dots = document.querySelectorAll('.dot');
let timeout;
var slideIndex = 0;
var currentDot = 0;
var mobileSlideIndex = 0;

function showHomeSlides(index = 0) {
    header.style.backgroundImage = headerSlides[index];
    if (index === 1) {
        clearTimeout(timeout);
        timeout = setTimeout(() => showHomeSlides(0), 4000);
    } else {
        clearTimeout(timeout);
        timeout = setTimeout(() => showHomeSlides(1), 4000);
    }
}

function handleToggleButtonClick(event) {
    let state = event.getAttribute('data-state');
    if (state === '0') {
        event.setAttribute('data-state', '1');
        navBar.classList.add('nav-open');
    } else {
        event.setAttribute('data-state', '0');
        navBar.classList.remove('nav-open');
    }
}

function handleQuestionClick(event) {
    let state = event.getAttribute('data-state');
    let answer = event.querySelector('.question-answer');
    if (state === '1') {
        event.setAttribute('data-state', '0');
        answer.classList.remove('answer-clicked');
    } else {
        closeQuestions();
        event.setAttribute('data-state', '1');
        answer.classList.add('answer-clicked');
    }
}

function closeQuestions() {
    questions.forEach((question) => {
        let answer = question.querySelector('.question-answer');
        question.setAttribute('data-state', '0');
        answer.classList.remove('answer-clicked');
    });
}

function highlightItem(index) {
    if (desktopItems) {
        desktopItems[index].classList.add('main-nav-highlighted');
        desktopItems[index].classList.remove('main-nav-gray');
    } else if (mobileItems) {
        mobileItems[index].classList.add('main-nav-highlighted');
        mobileItems[index].classList.remove('main-nav-gray');
    }
}

function removeHighlightItem(index) {
    if (desktopItems) {
        desktopItems[index].classList.remove('main-nav-highlighted');
        desktopItems[index].classList.add('main-nav-gray');
    } else if (mobileItems) {
        mobileItems[index].classList.remove('main-nav-highlighted');
        mobileItems[index].classList.add('main-nav-gray');
    }
}

function showPortfolioHover(event) {
    let modal = event.querySelector('.portfolio__hover');
    modal.classList.remove('portfolio__modal-hidden');
    modal.classList.add('portfolio__modal');
}

function hidePortfolioHover(event) {
    let modal = event.querySelector('.portfolio__hover');
    modal.classList.add('portfolio__modal-hidden');
    modal.classList.remove('portfolio__modal');
}

function showMemberSocialMedia(event) {
    let socialMediaBar = event.querySelector('.team__social-media');
    socialMediaBar.classList.remove("hidden");
}

function hideMemberSocialMedia(event) {
    let socialMediaBar = event.querySelector('.team__social-media');
    socialMediaBar.classList.add("hidden");
}

function currentSlides(index, dotIndex) {
    var slide = slides[slideIndex];
    var slide2;
    var dot = dots[currentDot];
    if (slideIndex != 4) {
        slide2 = slides[slideIndex + 1];
        slide2.classList.remove('carousel-slide__visible');
    }

    slide.classList.remove('carousel-slide__visible');
    dot.classList.remove('active');

    var slide = slides[index];
    var slide2;
    var dot = dots[dotIndex];

    if (index != 4) {
        slide2 = slides[index + 1];
        slide2.classList.add('carousel-slide__visible');
    }

    slide.classList.add('carousel-slide__visible');
    dot.classList.add('active');

    slideIndex = index;
    currentDot = dotIndex;
}

function currentMobileSlide(index) {
    var slide = slides[mobileSlideIndex];
    var dot = mobileDots[mobileSlideIndex];

    slide.classList.remove('carousel-slide__mobile-visible');
    dot.classList.remove('active');

    slide = slides[index];
    dot = mobileDots[index];

    slide.classList.add('carousel-slide__mobile-visible');
    dot.classList.add('active');

    mobileSlideIndex = index;
}

showHomeSlides();