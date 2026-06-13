// Responsive Mobile Navigation Menu Toggle
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav Window
        nav.classList.toggle('nav-active');

        // Link Animation
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger Animation to 'X'
        burger.classList.toggle('toggle');
    });
}

// Interactive Tabs functionality for Certifications & Trainings
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    
    // Hide all tab contents
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active-content");
    }

    // Deactivate active styling on all buttons
    tablinks = document.getElementsByClassName("tab-btn");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    // Display the targeted tab layout & add active layout to button
    document.getElementById(tabName).classList.add("active-content");
    evt.currentTarget.classList.add("active");
}

// Simple Interactive Contact Form alert handler 
const formElement = document.getElementById('contactForm');
if(formElement) {
    formElement.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        alert(`Thank you for reaching out, ${name}! Your mockup message submission was successful. (Note: Wire an API backend here like Formspree or EmailJS for live email routing).`);
        formElement.reset();
    });
}

// Launch script routines
navSlide();