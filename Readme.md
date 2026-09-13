TravelVista – Yuva Intern Week 3

Integrating JavaScript for Interactive User Experience

TravelVista is a responsive travel landing page enhanced with plain JavaScript.

Files

YuvaIntern_Week3/
├── index.html
├── style.css
├── script.js
└── YuvaIntern_Week3_README.md

Technologies

HTML5

CSS3

JavaScript

LocalStorage

IntersectionObserver

VS Code

Live Server

Interactive Features

1. Mobile Navigation

Below 650px, the navigation changes to a mobile menu. Clicking the menu button opens/closes the links.

2. Destination Search

The search input filters destination cards dynamically.

Paris → Paris remains visible

Bali → Bali remains visible

XYZ → No destination found

3. Favorite Destinations

Clicking the heart changes its state and saves the destination in browser LocalStorage.

localStorage.setItem(
    "travelFavorites",
    JSON.stringify(favorites)
);

4. Destination Details Modal

The View Details button reads the selected destination from a data-place attribute and dynamically updates the modal.

5. Contact Form Validation

Validation checks:

Name: minimum 2 characters

Email: basic valid email format

Message: minimum 10 characters

Invalid fields receive an error style. Valid input shows a success message.

This is client-side validation only. No backend or real email service is used.

6. Back-to-Top Button

After scrolling more than 400px, the button becomes visible. Clicking it smoothly returns to the top.

7. Scroll Reveal

IntersectionObserver adds the active class when an element enters approximately 15% of the viewport, producing a reveal animation.

DOM Methods

document.getElementById()
document.querySelectorAll()
element.classList.add()
element.classList.remove()
element.classList.toggle()
element.textContent
element.style.display

Events

Event

Purpose

click

Menu, favorites, modal, top button

input

Destination search

submit

Form validation

scroll

Back-to-top

IntersectionObserver

Scroll reveal

Responsive Breakpoints

Viewport

Layout

Above 900px

3 destination columns, 4 feature columns

650px–900px

2 destination columns, 2 feature columns

Below 650px

1 column, mobile menu

Below 400px

Smaller mobile sizing

Testing

Test

Input/Condition

Result

Mobile menu

375px viewport

Passed

Search

Paris

Passed

Search

Bali

Passed

Search

XYZ

Passed

Favorite

Paris + refresh

Passed

Modal

Paris details

Passed

Invalid form

Empty fields

Passed

Valid form

Valid name/email/message

Passed

Back to top

Scroll > 400px

Passed

Responsive

1200/768/375/320px

Passed

How to Run

Open YuvaIntern_Week3 in VS Code.

Keep index.html, style.css and script.js in the same folder.

Open index.html.

Right-click → Open with Live Server.

Test each interactive feature.

Conclusion

Week 3 converts TravelVista into an interactive webpage using plain JavaScript, demonstrating DOM manipulation, event handling, dynamic filtering, LocalStorage, form validation, modal interaction, scrolling and animation.