// Original content of scripts.js before changes
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation (you can expand this)
    if (username === 'admin' && password === 'password') {
        alert('Login successful!');
    } else {
        alert('Invalid username or password.');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    console.log('Document is ready!');
    // Add any additional JavaScript functionality here
});

function openForum() {
    alert("Welcome to the community forum! Here you can share your experiences and ask questions.");
    // Redirect to the forum page or open a modal with forum details
    // window.location.href = "forum.html"; // Uncomment to redirect
}
// script.js
const questions = [
    {
        question: "What is the primary purpose of crop rotation?",
        options: ["Increase soil fertility", "Pest control", "Both", "None"],
        answer: "Both"
    },
    {
        question: "Which of the following is a sustainable farming practice?",
        options: ["Monoculture", "Organic farming", "Overgrazing", "None"],
        answer: "Organic farming"
    }
];

let currentQuestionIndex = 0;

function loadQuestion() {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const nextButton = document.getElementById('next-button');

    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
        questionElement.textContent = currentQuestion.question;
        optionsElement.innerHTML = '';

        currentQuestion.options.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option;
            button.onclick = () => checkAnswer(option);
            optionsElement.appendChild(button);
        });

        nextButton.style.display = 'none';
    } else {
        questionElement.textContent = "Quiz Completed!";
        optionsElement.innerHTML = '';
    }
}

function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
        alert("Correct!");
    } else {
        alert("Wrong! The correct answer is: " + currentQuestion.answer);
    }
    currentQuestionIndex++;
    loadQuestion();
}

document.addEventListener('DOMContentLoaded', loadQuestion);
