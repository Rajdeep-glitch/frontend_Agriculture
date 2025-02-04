// Define the question sets
const questionSets = {
    "Agriculture": [
        { question: "What is the primary crop grown in West Bengal?", options: ["Rice", "Wheat", "Jute", "Barley"], answer: "Rice" },
        { question: "What is the main irrigation method used in West Bengal?", options: ["Canal Irrigation", "Groundwater Irrigation", "Rainfed", "Drip Irrigation"], answer: "Canal Irrigation" },
        { question: "Which of the following is a major fruit crop in West Bengal?", options: ["Mango", "Apple", "Banana", "Grapes"], answer: "Mango" },
        { question: "Which type of soil is most suitable for paddy cultivation?", options: ["Sandy", "Loamy", "Clayey", "Peaty"], answer: "Clayey" },
        { question: "What is a common organic fertilizer used in farming?", options: ["Urea", "Compost", "Superphosphate", "Ammonium Sulfate"], answer: "Compost" },
        { question: "Which crop requires the highest amount of water?", options: ["Wheat", "Sugarcane", "Maize", "Cotton"], answer: "Sugarcane" },
        { question: "Which of the following is a leguminous crop?", options: ["Wheat", "Rice", "Soybean", "Maize"], answer: "Soybean" },
        { question: "What is the main pest affecting rice crops?", options: ["Aphids", "Brown Plant Hopper", "Bollworm", "Termites"], answer: "Brown Plant Hopper" },
        { question: "Which method is best for conserving soil moisture?", options: ["Plowing", "Mulching", "Burning residues", "Deforestation"], answer: "Mulching" },
        { question: "Which vitamin is found in high amounts in carrots?", options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin B12"], answer: "Vitamin A" },
        // Added Agriculture-Related Products and Entrepreneurship Questions
        { question: "What is a key challenge faced by agri-entrepreneurs?", options: ["Access to markets", "High initial capital", "Lack of skilled labor", "All of the above"], answer: "All of the above" },
        { question: "Which of the following is a common value-added agricultural product?", options: ["Rice", "Milk", "Sugar", "Leather"], answer: "Milk" },
        { question: "What is 'farm-to-table' in agriculture?", options: ["Growing crops for export", "Selling crops to retailers", "Direct sales from farm to consumer", "Selling processed food"], answer: "Direct sales from farm to consumer" },
        { question: "Which sector is most important for promoting agricultural entrepreneurship?", options: ["Finance and Investment", "Technology and Innovation", "Government Policies", "All of the above"], answer: "All of the above" },
        { question: "Which of these is a sustainable agricultural practice?", options: ["Monocropping", "Chemical fertilizers", "Agroforestry", "Irrigation with pesticides"], answer: "Agroforestry" }
    ],
    "Technology": [
        { question: "What does CPU stand for?", options: ["Central Processing Unit", "Central Programming Unit", "Central Performance Unit", "Central Power Unit"], answer: "Central Processing Unit" },
        { question: "What is the main function of an operating system?", options: ["Managing software", "Executing programs", "Controlling hardware", "All of the above"], answer: "All of the above" },
        { question: "Which language is primarily used for web development?", options: ["Java", "Python", "HTML", "C++"], answer: "HTML" },
        { question: "What is the full form of RAM?", options: ["Random Access Memory", "Read Access Memory", "Random Allocation Memory", "Run Access Memory"], answer: "Random Access Memory" },
        { question: "What does HTTP stand for?", options: ["Hyper Text Transfer Protocol", "Hyper Text Transmission Protocol", "Hyperlink Transfer Protocol", "High Transfer Text Protocol"], answer: "Hyper Text Transfer Protocol" },
        { question: "Which of the following is an example of an input device?", options: ["Monitor", "Keyboard", "Speaker", "Printer"], answer: "Keyboard" },
        { question: "Which company developed Windows OS?", options: ["Apple", "Google", "Microsoft", "IBM"], answer: "Microsoft" },
        { question: "What does SQL stand for?", options: ["Structured Query Language", "Standard Query Language", "Sequential Query Language", "Server Query Language"], answer: "Structured Query Language" },
        { question: "Which of the following is a cloud storage service?", options: ["Dropbox", "Excel", "PowerPoint", "MS Paint"], answer: "Dropbox" },
        { question: "Which component is responsible for executing instructions in a computer?", options: ["Hard Drive", "RAM", "CPU", "GPU"], answer: "CPU" }
    ]
};

let currentQuestionIndex = 0;
let score = 0;
let selectedSet = null;

const setSelection = document.getElementById('set-selection');
const quizContainer = document.getElementById('quiz-container');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const nextButton = document.getElementById('next-button');
const resultElement = document.getElementById('result');
const questionStatus = document.getElementById('question-status');
const questionNumberInput = document.getElementById('question-number');

function selectSet(setName) {
    selectedSet = setName;
    currentQuestionIndex = 0;
    score = 0;
    setSelection.classList.add('hide');
    quizContainer.classList.remove('hide');
    loadQuestion();
}

function loadQuestion() {
    if (!selectedSet || currentQuestionIndex >= questionSets[selectedSet].length) {
        showResult();
        return;
    }

    const currentQuestion = questionSets[selectedSet][currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = '';

    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => checkAnswer(option, button);
        optionsElement.appendChild(button);
    });

    nextButton.classList.add('hide');
    questionStatus.textContent = `Question ${currentQuestionIndex + 1} of ${questionSets[selectedSet].length} | Points: ${score}`;
    questionNumberInput.value = currentQuestionIndex + 1;
}

function checkAnswer(selectedOption, button) {
    const currentQuestion = questionSets[selectedSet][currentQuestionIndex];

    if (selectedOption === currentQuestion.answer) {
        score++;
        button.style.backgroundColor = "green";
    } else {
        button.style.backgroundColor = "red";
    }

    document.querySelectorAll('#options button').forEach(btn => btn.disabled = true);
    nextButton.classList.remove('hide');
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    loadQuestion();
});

function showResult() {
    questionElement.textContent = `Quiz Completed!`;
    optionsElement.innerHTML = '';
    resultElement.textContent = `You scored ${score} out of ${questionSets[selectedSet].length}`;
    nextButton.style.display = 'none';
}

function changeQuestion() {
    const newIndex = parseInt(questionNumberInput.value, 10) - 1;
    if (newIndex >= 0 && newIndex < questionSets[selectedSet].length) {
        currentQuestionIndex = newIndex;
        loadQuestion();
    } else {
        alert("Invalid question number!");
    }
}

// Explanation for Correct/Incorrect Answers
function showExplanation(answer, isCorrect) {
    const explanation = {
        "Farm-to-table": "Farm-to-table refers to the practice of selling food directly from local farms to consumers, eliminating the need for retailers or wholesalers. This ensures that fresh produce reaches the consumer while supporting local agriculture."
    };

    let explanationText = '';
    if (isCorrect) {
        explanationText = `Correct! ${explanation[answer]}`;
    } else {
        explanationText = `Incorrect. The correct answer is: ${answer}. ${explanation[answer]}`;
    }
    
    const explanationElement = document.createElement('p');
    explanationElement.textContent = explanationText;
    document.body.appendChild(explanationElement);
}
