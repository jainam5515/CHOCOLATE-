// Redirect users if they try to access index.html without login
if (window.location.pathname.includes("index.html")) {
    const isLoggedIn = localStorage.getItem("loggedIn");
    if (!isLoggedIn) {
        window.location.href = "login.html";
    }
}

// Function to check login and redirect
function checkLogin() {
    const allowedName = "Diya"; // Change this to your desired name
    const enteredName = document.getElementById("nameInput").value;

    if (enteredName.toLowerCase() === allowedName.toLowerCase()) {
        localStorage.setItem("loggedIn", "true"); // Store login session
        window.location.href = "index.html"; // Redirect to the main page
    } else {
        alert("Sorry, you are not allowed! 😢");
    }
}
