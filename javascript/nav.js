document.addEventListener('DOMContentLoaded', function() {
    var mobileNavToggle= document.getElementById('mobile-nav-dashes');
    if (mobileNavToggle) {
        mobileNavToggle.addEventListener('click', function() {
            this.classList.toggle('open');
        });
    }
});

const primaryNav = document.querySelector(".primary-navigation")
const navToggle = document.querySelector(".mobile-nav-toggle")

navToggle.addEventListener ("click", () => {
    const visibility = primaryNav.getAttribute('data-visible')

    if (visibility === 'false') {
        primaryNav.setAttribute('data-visible', true);
    } else if (visibility === 'true') {
        primaryNav.setAttribute('data-visible', false);
    }
});