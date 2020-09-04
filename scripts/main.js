let header = document.querySelector(".main-banner");
let headerSlides = ['url("images/home-bg.jpg")', 'url("images/home-bg-2.jpg")']
let toggleButton = document.querySelector(".toggle-button");
let navBar = document.querySelector(".main-nav__mobile");
let desktopItems = document.querySelectorAll(".main-nav__item");
let mobileItems = document.querySelectorAll(".main-nav__mobile-items");

function showHomeSlides(index = 0) {
    header.style.backgroundImage = headerSlides[index];
    let nextIndex = index === 1 ? 0 : 1
    setTimeout(() => showHomeSlides(nextIndex), 4000);
}

function handleToggleButtonClick(e) {
    let state = e.getAttribute("data-state");
    if (state === "0") {
        e.setAttribute("data-state", "1");
        navBar.classList.add("nav-open");
    } else {
        e.setAttribute("data-state", "0");
        navBar.classList.remove("nav-open");
    }
}

function handleQuestionClick(e) {
    let state = e.getAttribute("data-state");
    let p = e.querySelector(".question-answer");
    if (state === "1") {
        e.setAttribute("data-state", "0");
        p.classList.remove("answer-clicked");
    } else {
        e.setAttribute("data-state", "1");
        p.classList.add("answer-clicked");
    }
}

function highlightItem(index) {
    if (desktopItems) {
        desktopItems[index].firstChild.style.color = "#3CDBAD";
    } else if (mobileItems) {
        mobileItems[index].firstChild.style.color = "#3CDBAD";
    }




}

function removeHighlightItem(index) {
    if (desktopItems) {
        desktopItems[index].firstChild.style.color = "#808080";
    } else if (mobileItems) {
        mobileItems[index].firstChild.style.color = "#808080";
    }
}



function showPortfolioHover(e) {
    let modal = e.querySelector(".portfolio__hover");
    modal.style.opacity = 0.8
}

function hidePortfolioHover(e) {
    let modal = e.querySelector(".portfolio__hover");
    modal.style.opacity = 0
}

function showMemberSocialMedia(e) {
    let socialMediaBar = e.querySelector(".team__social-media");
    socialMediaBar.style.opacity = 1
}

function hideMemberSocialMedia(e) {
    let socialMediaBar = e.querySelector(".team__social-media");
    socialMediaBar.style.opacity = 0
}

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("carousel-slide");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

var slideIndex = 1;
showHomeSlides();
showSlides(slideIndex);