// =====================================
// Traffic Sense
// Home Page JavaScript
// =====================================

// Display a welcome message in the browser console
console.log("Welcome to Traffic Sense!");

// Wait until the page has fully loaded
document.addEventListener("DOMContentLoaded", function () {

    // Select the Start Learning button
    const startButton = document.querySelector(".start-btn");

    // Check if the button exists
    if (startButton) {

        startButton.addEventListener("click", function () {

            alert("Welcome! Let's begin your Traffic Sense learning journey.");

        });

    }

});