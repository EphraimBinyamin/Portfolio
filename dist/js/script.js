"use strict";

// === Navbar Module ===
let hamburger = document.querySelector(".navbar__hamburger");
let closeBtn = document.querySelector(".navbar__close");
let navbar = document.querySelector(".navbar");
let navbarLink = document.querySelectorAll(".navbar__link");

hamburger.addEventListener("click", () => {
    navbar.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    navbar.classList.remove("active");
});

navbarLink.forEach((link) => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");
    });
});

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 0) {
        navbar.classList.add("navbar--shadow");
    } else {
        navbar.classList.remove("navbar--shadow");
    }
});
// === / Navbar Module ===

// === Resume Button ===
let resumeBtn = document.querySelector(".header__resume-title");
let resume = document.querySelector(".header__resume");

resumeBtn.addEventListener("click", () => {
    resume.classList.toggle("active");
});
// === / Resume Button ===

// === Portfolio Tabs ===
let portfolioTabsBtns = document.querySelectorAll(".portfolio__tabs-btn");
let portfolioTabs = document.querySelectorAll(".portfolio__tabs-tab");

portfolioTabsBtns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        document
            .querySelector(".portfolio__tabs-btn.active")
            .classList.remove("active");
        btn.classList.add("active");
        if (!portfolioTabs[i].classList.contains("active")) {
            document
                .querySelector(".portfolio__tabs-tab.active")
                .classList.remove("active");
            portfolioTabs[i].classList.add("active");
        }
    });
});
// === / Portfolio Tabs ===
