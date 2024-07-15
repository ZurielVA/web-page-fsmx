const navbar = document.querySelector("#navbarScroll");
document.addEventListener("scroll", function () {
    if (document.documentElement.scrollTop >= 20) {
        navbar.classList.add("navbar2");
    } else {
        navbar.classList.remove("navbar2");
    }
});

