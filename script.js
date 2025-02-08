// Login Page Script
function checkLogin() {
    const allowedName = "Diya"; // Change this to your desired name
    const enteredName = document.getElementById("nameInput").value;

    if (enteredName.toLowerCase() === allowedName.toLowerCase()) {
        sessionStorage.setItem("loggedIn", "true"); // Store session data
        window.location.href = "index.html"; // Redirect to main page
    } else {
        alert("Sorry, you are not allowed! 😢");
    }
}

// Check if the user is logged in before accessing index.html
if (window.location.pathname.includes("index.html") && !sessionStorage.getItem("loggedIn")) {
    window.location.href = "login.html"; // Redirect to login page if not logged in
}

// Smooth Button Hover Effect
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.querySelectorAll(".btn a");

    buttons.forEach(button => {
        button.addEventListener("mouseover", function () {
            this.style.transform = "scale(1.1)";
        });

        button.addEventListener("mouseout", function () {
            this.style.transform = "scale(1)";
        });
    });
});
