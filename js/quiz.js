// =========================================
// Traffic Sense - Pre Test
// =========================================

// Correct Answers
const correctAnswers = {
    q1: "Stop",
    q2: "Safety",
    q3: "Everyone",
    q4: "No",
    q5: "Safety"
};

// Submit Button
const submitButton = document.getElementById("submitQuiz");

submitButton.addEventListener("click", function () {

    // User Details
    const name = document.getElementById("name").value.trim();
    const age = document.getElementById("age").value.trim();
    const city = document.getElementById("city").value.trim();
    const vehicle = document.getElementById("vehicle").value;

    if (name === "" || age === "") {
        alert("Please enter your Name and Age.");
        return;
    }

    let score = 0;

    // Check Answers
    for (let question in correctAnswers) {

        const selected = document.querySelector(`input[name="${question}"]:checked`);

        if (selected && selected.value === correctAnswers[question]) {
            score++;
        }
    }

    // Save User Details
    localStorage.setItem("userName", name);
    localStorage.setItem("userAge", age);
    localStorage.setItem("userCity", city);
    localStorage.setItem("vehicleType", vehicle);

    // Save Score
    localStorage.setItem("preScore", score);

    alert(`Great Job ${name}!\n\nYour Pre-Test Score is ${score}/5`);

    // Move to Learning Page
    window.location.href = "learn.html";

});