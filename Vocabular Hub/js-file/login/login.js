// Selecting elements
const form = document.querySelector("form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

// Input focus effect (border turns blue)
[emailInput, passwordInput].forEach(input => {
    input.addEventListener("focus", () => {
        input.style.borderColor = "rgba(14, 124, 242, 0.8)";
    });

    input.addEventListener("blur", () => {
        input.style.borderColor = "rgba(200, 200, 200, 0.6)";
    });
});

// Form validation
form.addEventListener("submit", function(event) {

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // Check empty fields
    if (email === "" || password === "") {
        alert("Please fill in all fields!");
        event.preventDefault();
        return;
    }


    // Password check
    if (password.length < 6) {
        alert("Password must be at least 6 characters!");
        event.preventDefault();
        return;
    }

    alert("Login successful!");
    event.preventDefault(); 
    window.location.href = "vocab.html";
});
