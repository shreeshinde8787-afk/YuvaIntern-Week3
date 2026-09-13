// ========================================
// TRAVELVISTA - WEEK 3 JAVASCRIPT
// Interactive User Experience
// ========================================


// 1. MOBILE NAVIGATION MENU

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuBtn.textContent = "✕";
        menuBtn.setAttribute("aria-label", "Close menu");
    } else {
        menuBtn.textContent = "☰";
        menuBtn.setAttribute("aria-label", "Open menu");
    }

});


// Close mobile menu after clicking a link

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function (link) {

    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
        menuBtn.textContent = "☰";
        menuBtn.setAttribute("aria-label", "Open menu");
    });

});


// 2. DESTINATION SEARCH / FILTER

const searchInput = document.getElementById("searchInput");
const destinationCards =
    document.querySelectorAll(".destination-card");
const noResults = document.getElementById("noResults");

searchInput.addEventListener("input", function () {

    const searchValue = searchInput.value.toLowerCase().trim();

    let found = 0;

    destinationCards.forEach(function (card) {

        const destinationName =
            card.dataset.name.toLowerCase();

        if (destinationName.includes(searchValue)) {

            card.style.display = "block";
            found++;

        } else {

            card.style.display = "none";

        }

    });

    if (found === 0) {
        noResults.style.display = "block";
    } else {
        noResults.style.display = "none";
    }

});


// 3. FAVORITE DESTINATIONS USING LOCAL STORAGE

const favoriteButtons =
    document.querySelectorAll(".favorite-btn");

let favorites =
    JSON.parse(localStorage.getItem("travelFavorites")) || [];

favoriteButtons.forEach(function (button) {

    const destination = button.dataset.destination;

    // Restore saved favorites

    if (favorites.includes(destination)) {
        button.textContent = "♥";
        button.classList.add("active");
    }


    button.addEventListener("click", function () {

        if (favorites.includes(destination)) {

            favorites =
                favorites.filter(function (item) {
                    return item !== destination;
                });

            button.textContent = "♡";
            button.classList.remove("active");

        } else {

            favorites.push(destination);

            button.textContent = "♥";
            button.classList.add("active");

        }

        localStorage.setItem(
            "travelFavorites",
            JSON.stringify(favorites)
        );

    });

});


// 4. DESTINATION DETAILS MODAL

const detailsButtons =
    document.querySelectorAll(".details-btn");

const modal =
    document.getElementById("detailsModal");

const modalTitle =
    document.getElementById("modalTitle");

const modalText =
    document.getElementById("modalText");

const closeModal =
    document.getElementById("closeModal");

const modalCloseButton =
    document.getElementById("modalCloseButton");


const destinationInformation = {

    Paris:
        "Paris is famous for the Eiffel Tower, art, museums, cafes and beautiful architecture. It is a great destination for culture and romance.",

    Bali:
        "Bali offers beautiful beaches, temples, rice fields and relaxing natural scenery. It is perfect for nature and adventure lovers.",

    Dubai:
        "Dubai is known for modern architecture, luxury shopping, desert adventures and exciting attractions."
};


detailsButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const place = button.dataset.place;

        modalTitle.textContent = place;
        modalText.textContent =
            destinationInformation[place];

        modal.classList.add("show");

    });

});


function closeDestinationModal() {
    modal.classList.remove("show");
}

closeModal.addEventListener(
    "click",
    closeDestinationModal
);

modalCloseButton.addEventListener(
    "click",
    closeDestinationModal
);


// Close modal when clicking outside it

modal.addEventListener("click", function (event) {

    if (event.target === modal) {
        closeDestinationModal();
    }

});


// 5. CONTACT FORM VALIDATION

const contactForm =
    document.getElementById("contactForm");

const nameInput =
    document.getElementById("name");

const emailInput =
    document.getElementById("email");

const messageInput =
    document.getElementById("message");

const formMessage =
    document.getElementById("formMessage");


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    let isValid = true;

    // Remove previous styles

    nameInput.classList.remove("error");
    emailInput.classList.remove("error");
    messageInput.classList.remove("error");

    formMessage.textContent = "";
    formMessage.className = "";


    // Name validation

    if (nameInput.value.trim().length < 2) {

        nameInput.classList.add("error");
        isValid = false;

    }


    // Email validation

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailInput.value.trim())) {

        emailInput.classList.add("error");
        isValid = false;

    }


    // Message validation

    if (messageInput.value.trim().length < 10) {

        messageInput.classList.add("error");
        isValid = false;

    }


    if (!isValid) {

        formMessage.textContent =
            "Please enter valid information in all fields.";

        formMessage.className = "error-message";

        return;
    }


    // Successful validation

    formMessage.textContent =
        "Message validated successfully! Thank you for contacting TravelVista.";

    formMessage.className = "success-message";

    contactForm.reset();

});


// 6. BACK TO TOP BUTTON

const topBtn =
    document.getElementById("topBtn");

window.addEventListener("scroll", function () {

    if (window.scrollY > 400) {

        topBtn.classList.add("show");

    } else {

        topBtn.classList.remove("show");

    }

});


topBtn.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// 7. SCROLL REVEAL ANIMATION

const revealElements =
    document.querySelectorAll(".reveal");


const observer =
    new IntersectionObserver(function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

            }

        });

    }, {
        threshold: 0.15
    });


revealElements.forEach(function (element) {

    observer.observe(element);

});


// ========================================
// WEEK 3 JAVASCRIPT COMPLETED
// ========================================