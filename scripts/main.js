document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


let header = document.querySelector(".main-banner");
let headerSlides = ['url("./images/home-bg.jpg")', 'url("./images/home-bg-2.jpg")']
let toggleButton = document.querySelector(".toggle-button");
let mainNav = document.querySelector(".main-nav");

function showSlides(index = 0) {
    header.style.backgroundImage = headerSlides[index];
    let nextIndex = index === 1 ? 0 : 1
    setTimeout(() => showSlides(nextIndex), 4000);
}

function handleToggle() {
    mainNav.classList.add("slide-up")
}

toggleButton.addEventListener('click', handleToggle)

showSlides()