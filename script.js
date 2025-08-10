// script.js

document.addEventListener("DOMContentLoaded", function () {

    // 1. Smooth Scroll for Nav Links
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

    // 2. Highlight Table Rows on Hover
    document.querySelectorAll("#product-types table tbody tr").forEach(row => {
        row.addEventListener("mouseenter", () => {
            row.style.backgroundColor = "#caf0f8";
        });
        row.addEventListener("mouseleave", () => {
            row.style.backgroundColor = "";
        });
    });

    // 3. Feedback Form Validation
    const feedbackForm = document.querySelector("#contact form");
    if (feedbackForm) {
        feedbackForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const name = feedbackForm.querySelector('input[type="text"]').value.trim();
            const email = feedbackForm.querySelector('input[type="email"]').value.trim();
            const message = feedbackForm.querySelector("textarea").value.trim();

            if (!name || !email || !message) {
                alert("Please fill out all fields before submitting.");
                return;
            }

            // Basic email validation
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                alert("Please enter a valid email address.");
                return;
            }

            alert(`Thank you for your feedback, ${name}!`);
            feedbackForm.reset();
        });
    }

    // 4. Fade-in Animation on Scroll
    const sections = document.querySelectorAll("section");
    const fadeInOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.85;
        sections.forEach(section => {
            const boxTop = section.getBoundingClientRect().top;
            if (boxTop < triggerBottom) {
                section.classList.add("visible");
            }
        });
    };
    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll();
});
