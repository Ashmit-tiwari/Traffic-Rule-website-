// ===========================================
// Traffic Sense - Learning Page
// ===========================================

// Get the user's name from Local Storage
const userName = localStorage.getItem("userName");

// Create a welcome message
const welcomeMessage = document.createElement("h2");

if (userName) {
    welcomeMessage.textContent = `Welcome, ${userName}! 👋`;
} else {
    welcomeMessage.textContent = "Welcome to Traffic Sense! 👋";
}

// Center the welcome message
welcomeMessage.style.textAlign = "center";
welcomeMessage.style.marginTop = "20px";
welcomeMessage.style.color = "#38BDF8";

// Add it to the top of the page
document.body.insertBefore(welcomeMessage, document.body.children[1]);

// Find the button
const nextButton = document.querySelector(".next-button button");

// When clicked
nextButton.addEventListener("click", function () {

    // Mark the lesson as completed
    localStorage.setItem("learningCompleted", "true");

    alert("Great! You've completed the learning module.");

    // Move to the Result Page
    window.location.href = "result.html";

});