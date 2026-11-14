
// =====================================
// COURTSIDE - JAVASCRIPT
// =====================================


// 1. BACK TO TOP BUTTON

const backToTop = document.getElementById("backToTop");

if (backToTop) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 300) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }

    });

}


// 2. BASKETBALL QUIZ

function checkQuiz() {

    const answers = {
        q1: "b",
        q2: "a",
        q3: "c",
        q4: "b",
        q5: "a"
    };

    let score = 0;
    let totalQuestions = 5;

    for (let question in answers) {

        const selected = document.querySelector(
            'input[name="' + question + '"]:checked'
        );

        if (selected && selected.value === answers[question]) {
            score++;
        }

    }

    const result = document.getElementById("quiz-result");

    if (result) {

        result.textContent =
            "Your Score: " + score + " / " + totalQuestions;

        if (score === totalQuestions) {
            result.textContent += " - Excellent! Perfect Score!";
        } else if (score >= 3) {
            result.textContent += " - Good Job! Keep Learning!";
        } else {
            result.textContent += " - Keep Practicing!";
        }

    }

}


// 3. RESET QUIZ

function resetQuiz() {

    const quizForm = document.querySelector(".quiz-box");

    if (quizForm) {

        const selectedAnswers = quizForm.querySelectorAll(
            'input[type="radio"]'
        );

        selectedAnswers.forEach(function (answer) {
            answer.checked = false;
        });

    }

    const result = document.getElementById("quiz-result");

    if (result) {
        result.textContent = "";
    }

}


// 4. CONTACT FORM DEMO

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        const result = document.getElementById("form-result");

        if (name === "" || email === "" ||
            subject === "" || message === "") {

            result.textContent = "Please complete all fields.";

            return;
        }

        result.textContent =
            "Thank you, " + name +
            "! Your message has been received as a demo.";

        contactForm.reset();

    });

}
