// ==========================================
// Traffic Sense - Result Page
// ==========================================

// Get data from Local Storage
const userName = localStorage.getItem("userName");
const preScore = Number(localStorage.getItem("preScore")) || 0;

// Display Pre-Test Score
document.getElementById("preScore").textContent = `${preScore} / 5`;

// Correct Answers
const correctAnswers = {
    q1: 0, // Stop
    q2: 0, // Safety
    q3: 1, // Give Way
    q4: 1, // Dangerous
    q5: 2  // Everyone in the Vehicle
};

// Finish Quiz Button
const finishButton = document.getElementById("finishQuiz");

finishButton.addEventListener("click", function () {

    let finalScore = 0;

    // Check all questions
    for (let question in correctAnswers) {

        const selected = document.querySelector(`input[name="${question}"]:checked`);

        if (selected) {

            const options = document.getElementsByName(question);

            options.forEach((option, index) => {

                if (option.checked && index === correctAnswers[question]) {
                    finalScore++;
                }

            });

        }

    }

    // Save Final Score
    localStorage.setItem("finalScore", finalScore);

    // Display Scores
    document.getElementById("finalScore").textContent = `${finalScore} / 5`;

    // Improvement
    const improvement = ((finalScore - preScore) / 5) * 100;

    document.getElementById("improvement").textContent =
        `${improvement.toFixed(0)}%`;

    // Certificate
    const certificateText = document.querySelector(".certificate p");

    certificateText.innerHTML = `
        Congratulations <strong>${userName}</strong>! 🎉<br><br>

        You have successfully completed the
        <strong>Traffic Sense Road Safety Program.</strong>

        <br><br>

        Keep following traffic rules and encourage
        others to drive safely.
    `;

    alert(`Congratulations ${userName}!\n\nFinal Score: ${finalScore}/5`);

});