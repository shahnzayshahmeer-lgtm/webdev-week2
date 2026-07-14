# 🌐 Web Development Week 2 – Interactive Contact Form

## 📖 Project Overview

This project was developed as part of the **Week 2 Web Development Assignment**. The objective was to extend a basic HTML and CSS webpage by adding interactivity using **Vanilla JavaScript**.

The project demonstrates core front-end development concepts including **DOM manipulation, event handling, form validation, and dynamic theme switching** without using any external libraries or frameworks.

The website features a modern, responsive contact form with real-time validation and a Dark/Light Mode toggle to improve user experience.

---

# ✨ Features

## ✅ Contact Form

The contact form contains three input fields:

- Full Name
- Email Address
- Message

Each field is validated using JavaScript before the form can be submitted.

---

## ✅ Form Validation

The following validation rules have been implemented:

### Name

- Cannot be empty
- Must contain at least 3 characters

### Email

- Cannot be empty
- Must follow a valid email format
- Validation is performed using a Regular Expression (Regex)

Example of accepted email:

```
example@gmail.com
```

Example of invalid email:

```
example@gmail
```

---

### Message

- Cannot be empty
- Must contain at least 10 characters

---

## ✅ Error Messages

If validation fails:

- Error messages appear directly below the relevant field.
- The incorrect input field is highlighted.
- The page does **not** reload.

---

## ✅ Success Message

When all inputs are valid:

- The form is submitted successfully without refreshing the page.
- A success message is displayed.
- All input fields are automatically cleared.

---

## ✅ Dark Mode / Light Mode

The website includes a theme toggle button.

When clicked:

- Switches between Light Mode and Dark Mode.
- Uses JavaScript's `classList.toggle()` method.
- Changes colors instantly without reloading the page.

---

## ✅ Responsive Design

The layout is fully responsive and works on:

- Desktop
- Laptop
- Tablet
- Mobile devices

CSS Media Queries have been used to ensure the website adapts to different screen sizes.

---

# 🛠 Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla JavaScript)
- Git
- GitHub

---

# 📂 Project Structure

```
webdev-week2/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

# 📄 File Description

### index.html

Contains:

- Website structure
- Contact form
- Theme toggle button
- Form input fields
- Error message placeholders
- Success message area

---

### style.css

Contains:

- Responsive layout
- Modern UI styling
- Light theme
- Dark theme
- Form styling
- Animations
- Hover effects
- Media queries

---

### script.js

Contains:

- DOM element selection
- Event listeners
- Form validation
- Email validation using Regex
- Error handling
- Success message logic
- Dark/Light Mode functionality

---

# 📚 JavaScript Concepts Used

This project demonstrates the following JavaScript concepts:

- DOM Manipulation
- Event Handling
- addEventListener()
- preventDefault()
- Form Validation
- Regular Expressions (Regex)
- Conditional Statements
- Functions
- Variables
- String Methods
- classList.toggle()
- Input Value Checking

---

# 🚀 How to Run the Project

### Method 1 (Recommended)

1. Download or clone the repository.

```
git clone https://github.com/shahnzayshahmeer-lgtm/webdev-week2.git
```

2. Open the project folder.

3. Double-click **index.html**

OR

4. Open the folder in **Visual Studio Code**.

5. Open **index.html** using **Live Server** (recommended).

---

### Method 2

Simply open the **index.html** file in any modern web browser.

Supported browsers:

- Google Chrome
- Microsoft Edge
- Mozilla Firefox
- Brave
- Opera

---

# 🧪 Testing

The following test cases were performed:

✔ Submit empty form

✔ Invalid email format

✔ Empty message

✔ Short name

✔ Short message

✔ Valid submission

✔ Dark Mode toggle

✔ Light Mode toggle

✔ Responsive layout on different screen sizes

---

# 🎯 Learning Outcomes

Through this project, I learned how to:

- Build interactive web pages using JavaScript
- Validate user input
- Prevent page reload using `preventDefault()`
- Manipulate HTML elements using the DOM
- Handle user events with `addEventListener()`
- Display dynamic error and success messages
- Implement a Dark/Light Mode switch
- Organize code into separate HTML, CSS, and JavaScript files
- Manage projects using Git and GitHub

---

# 📌 Assignment Requirements Covered

- ✅ Separate HTML, CSS, and JavaScript files
- ✅ Contact form
- ✅ Name validation
- ✅ Email validation
- ✅ Message validation
- ✅ Error messages
- ✅ Success message without page reload
- ✅ Dark/Light Mode toggle
- ✅ Uses `addEventListener()`
- ✅ Uses `preventDefault()`
- ✅ Responsive design
- ✅ GitHub repository submission

---

# 👩‍💻 Author

**Shahnzay Shahmir**

BS Software Engineering Student

NASTP Institute of Information Technology

Lahore, Pakistan

GitHub:
https://github.com/shahnzayshahmeer-lgtm

---

# 📜 License

This project was developed for educational purposes as part of a university Web Development assignment.
