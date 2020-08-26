document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


let header = document.querySelector(".main-header");
let headerSlides = ['url("./images/home-bg.jpg")', 'url("./images/home-bg-2.jpg")']

showSlides()

function showSlides(index = 0) {
    header.style.backgroundImage = headerSlides[index];
    let nextIndex = index === 1 ? 0 : 1
    setTimeout(() => showSlides(nextIndex), 4000);
}