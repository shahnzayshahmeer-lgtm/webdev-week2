// Select the required HTML elements
const contactForm = document.getElementById("contactForm");
const themeToggle = document.getElementById("themeToggle");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");

const successMessage = document.getElementById("successMessage");


// Email validation pattern
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


// Clear an error from a particular field
function clearFieldError(inputElement, errorElement) {
    inputElement.classList.remove("input-error");
    errorElement.textContent = "";
}


// Display an error for a particular field
function showFieldError(inputElement, errorElement, errorText) {
    inputElement.classList.add("input-error");
    errorElement.textContent = errorText;
}


// Validate the contact form
contactForm.addEventListener("submit", function (event) {
    // Prevent the page from reloading
    event.preventDefault();

    // Get input values and remove unnecessary spaces
    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const messageValue = messageInput.value.trim();

    let formIsValid = true;

    // Clear old messages
    clearFieldError(nameInput, nameError);
    clearFieldError(emailInput, emailError);
    clearFieldError(messageInput, messageError);

    successMessage.style.display = "none";
    successMessage.textContent = "";

    // Validate name
    if (nameValue === "") {
        showFieldError(
            nameInput,
            nameError,
            "Please enter your full name."
        );

        formIsValid = false;
    } else if (nameValue.length < 3) {
        showFieldError(
            nameInput,
            nameError,
            "Name must contain at least 3 characters."
        );

        formIsValid = false;
    }

    // Validate email
    if (emailValue === "") {
        showFieldError(
            emailInput,
            emailError,
            "Please enter your email address."
        );

        formIsValid = false;
    } else if (!emailPattern.test(emailValue)) {
        showFieldError(
            emailInput,
            emailError,
            "Please enter a valid email address."
        );

        formIsValid = false;
    }

    // Validate message
    if (messageValue === "") {
        showFieldError(
            messageInput,
            messageError,
            "Please enter your message."
        );

        formIsValid = false;
    } else if (messageValue.length < 10) {
        showFieldError(
            messageInput,
            messageError,
            "Message must contain at least 10 characters."
        );

        formIsValid = false;
    }

    // Show success message when validation passes
    if (formIsValid) {
        successMessage.textContent =
            `Thank you, ${nameValue}! Your message was submitted successfully.`;

        successMessage.style.display = "block";

        // Clear all form fields
        contactForm.reset();

        // Move focus to the success message for accessibility
        successMessage.setAttribute("tabindex", "-1");
        successMessage.focus();
    }
});


// Remove name error while the user is typing
nameInput.addEventListener("input", function () {
    clearFieldError(nameInput, nameError);
    successMessage.style.display = "none";
});


// Remove email error while the user is typing
emailInput.addEventListener("input", function () {
    clearFieldError(emailInput, emailError);
    successMessage.style.display = "none";
});


// Remove message error while the user is typing
messageInput.addEventListener("input", function () {
    clearFieldError(messageInput, messageError);
    successMessage.style.display = "none";
});


// Dark mode and light mode toggle
themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    const darkModeIsActive =
        document.body.classList.contains("dark-mode");

    if (darkModeIsActive) {
        themeToggle.textContent = "☀️ Light Mode";
        themeToggle.setAttribute(
            "aria-label",
            "Switch to light mode"
        );
    } else {
        themeToggle.textContent = "🌙 Dark Mode";
        themeToggle.setAttribute(
            "aria-label",
            "Switch to dark mode"
        );
    }
});