//====================
// DOM Elements
//====================

let title =document.querySelector("#main-title");

let menuButton = document.querySelector(".menu-button");
let navLinks = document.querySelector(".nav-links");
let navItems = document.querySelectorAll(".nav-links a");
let faqQuestions = document.querySelectorAll(".faq-question");

let servicesList = document.querySelector(".services");

let filterButtons = document.querySelectorAll(".service-filters button");
let contactForm = document.querySelector(".contact-form");

let nameInput = document.querySelector(".contact-form input[type='text']");
let emailInput = document.querySelector(".contact-form input[type='email']");
let messageInput = document.querySelector(".contact-form textarea");



//====================
// DATA
//====================

let services = [
    {
        title: "T-Shirt Printing",
        description: "High-quality custom T-shirt printing for brands, businesses, events, and personal projects.",
        category: "printing"
    },
    {
        title: "Graphic Design",
        description: "We turn your ideas into creative and professional designs that match your vision.",
        category: "design"
    },
    {
        title: "Business Cards",
        description: "Professional business card designs with your contact information, branding, and essential details.",
        category: "printing"
    },
    {
        title: "Stickers",
        description: "Custom sticker designs for products such as food, cosmetics, perfumes, and more.",
        category: "printing"
    }
];


//====================
// FUNCTIONS
//====================


//====================
// DOM MANIPULATION
//====================

function displayServices(serviceList) {

    servicesList.innerHTML = "";

    serviceList.forEach(function(service) {

        let card = document.createElement("li");

        card.classList.add("service-card");

        let cardTitle = document.createElement("h3");

        cardTitle.textContent = service.title;

        let cardDescription = document.createElement("p");

        cardDescription.textContent = service.description;

        card.appendChild(cardTitle);

        card.appendChild(cardDescription);

        servicesList.appendChild(card);
    });
}

displayServices(services);


//====================
// EVENTS
//====================

menuButton.addEventListener("click", function() {
    navLinks.classList.toggle("show");

    if (navLinks.classList.contains("show")) {
        menuButton.textContent = "x"
    }else {
        menuButton.textContent = "☰"
    }
});


navItems.forEach(function(item) {
    item.addEventListener("click", function() {
        navLinks.classList.remove("show");
        menuButton.textContent = "☰";
    });
});


faqQuestions.forEach(function(question) {
    question.addEventListener("click", function() {

        faqQuestions.forEach(function(item) {
            if (item !== question) {
            item.nextElementSibling.style.display = "none"
            }
        });

        let answer = question.nextElementSibling;

        if (answer.style.display === "block") {
            answer.style.display = "none";
        }else {answer.style.display = "block";
    }

    });
});


filterButtons.forEach(function(button) {
    button.addEventListener("click", function() {

        let filter = button.dataset.filter;

        filterButtons.forEach(function(item) {
            item.classList.remove("active-filter");
        });

        button.classList.add("active-filter");


        let filteredServices = services.filter(function(service) {
            return filter === "all" || service.category === filter;
        });

        displayServices(filteredServices);

    });
});


contactForm.addEventListener("submit", function(event) {
    //event.preventDefault();

    if (nameInput.value === "") {
        alert("Please enter your name.");
        return;
    }

    if (emailInput.value === "") {
        alert("Please enter your email.");
        return;
    }

    if (messageInput.value === "") {
        alert("Please enter your message.")
        return;
    }

    alert("message sent successfully!");


});
