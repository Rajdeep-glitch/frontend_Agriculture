// Handling Login Form Submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation (you can expand this)
    if (username === 'admin' && password === 'password') {
        alert('Login successful!');
        // Redirect or handle successful login
    } else {
        alert('Invalid username or password.');
    }
});

// Document Ready Event
document.addEventListener('DOMContentLoaded', () => {
    console.log('Document is ready!');
    // Add any additional JavaScript functionality here
});

// Community Forum Functionality
function openForum() {
    alert("Welcome to the community forum! Here you can share your experiences and ask questions.");
    // Redirect to the forum page or open a modal with forum details
    // window.location.href = "forum.html"; // Uncomment to redirect
}

// Additional Content and Interactive Texts for Agriculture & Entrepreneurship

// Function to provide information about agricultural products
function showAgriProductInfo() {
    const products = [
        { name: "Organic Fertilizers", description: "Natural fertilizers derived from organic materials. They help improve soil health without chemicals." },
        { name: "Agri-Tech Tools", description: "Technological advancements like smart sensors and automated irrigation systems designed to optimize farming." },
        { name: "High-Quality Seeds", description: "Genetically superior seeds that ensure better crop yield and resistance to diseases." },
        { name: "Biodegradable Pesticides", description: "Eco-friendly pesticides made from plant-based substances that target pests without harming the environment." }
    ];

    let productInfoHTML = '<h3>Explore Agricultural Products</h3>';
    products.forEach(product => {
        productInfoHTML += `
            <div class="product-info">
                <h4>${product.name}</h4>
                <p>${product.description}</p>
            </div>
        `;
    });

    document.getElementById('agri-products-info').innerHTML = productInfoHTML;
}

// Function to provide entrepreneurship tips for farmers
function showEntrepreneurshipTips() {
    const tips = [
        "Start small and scale gradually: Begin with a niche product or service and build your brand.",
        "Focus on value addition: Turn raw agricultural products into processed goods to increase their market value.",
        "Invest in agri-tech: Use modern farming technologies to increase yield and reduce operational costs.",
        "Understand your market: Know your target customers and develop products based on their needs.",
        "Leverage government schemes: Take advantage of agricultural subsidies and loan schemes provided by the government."
    ];

    let tipsHTML = '<h3>Entrepreneurship Tips for Farmers</h3>';
    tips.forEach(tip => {
        tipsHTML += `
            <div class="entrepreneurship-tip">
                <p>✔ ${tip}</p>
            </div>
        `;
    });

    document.getElementById('entrepreneurship-tips').innerHTML = tipsHTML;
}

// Displaying Interactive Pop-Up on Agri-Entrepreneurship
function showAgriEntrepreneurshipPopup() {
    const popupContent = `
        <h2>Agri-Entrepreneurship: Innovate and Grow</h2>
        <p>Did you know that the agricultural sector has immense opportunities for entrepreneurs? By integrating technology, sustainable practices, and market strategies, you can take your farming business to new heights!</p>
        <button onclick="window.location.href = 'entrepreneurship.html'">Learn More</button>
    `;

    const popupElement = document.createElement('div');
    popupElement.classList.add('popup');
    popupElement.innerHTML = popupContent;
    document.body.appendChild(popupElement);
    
    // Close the popup after 10 seconds
    setTimeout(() => {
        document.body.removeChild(popupElement);
    }, 10000);
}

// Event Listener to trigger Agri-Entrepreneurship Popup
document.getElementById('agri-entrepreneurship-btn').addEventListener('click', showAgriEntrepreneurshipPopup);

// Function to handle quick agricultural knowledge quiz (Optional)
function quickAgriQuiz() {
    const quizQuestions = [
        {
            question: "What is organic farming?",
            options: ["Using synthetic chemicals", "Farming without chemicals", "Using genetically modified crops", "Farming in urban areas"],
            answer: "Farming without chemicals"
        },
        {
            question: "Which crop requires the least water?",
            options: ["Rice", "Wheat", "Sorghum", "Cotton"],
            answer: "Sorghum"
        },
        {
            question: "Which of the following is a legume?",
            options: ["Rice", "Soybean", "Corn", "Cotton"],
            answer: "Soybean"
        }
    ];

    let score = 0;

    const quizContainer = document.createElement('div');
    quizContainer.classList.add('quiz-container');
    let quizHTML = '<h3>Quick Agricultural Knowledge Quiz</h3>';

    quizQuestions.forEach((quiz, index) => {
        quizHTML += `
            <div class="quiz-question">
                <p>${quiz.question}</p>
                ${quiz.options.map(option => `<button onclick="checkQuizAnswer('${option}', '${quiz.answer}')">${option}</button>`).join('')}
            </div>
        `;
    });

    quizContainer.innerHTML = quizHTML;
    document.body.appendChild(quizContainer);
}

// Function to check quiz answers
function checkQuizAnswer(selectedAnswer, correctAnswer) {
    const resultMessage = selectedAnswer === correctAnswer ? "Correct!" : `Incorrect. The correct answer is ${correctAnswer}.`;
    alert(resultMessage);
}

// Event listener for the quick quiz button (if applicable)
document.getElementById('quick-agri-quiz-btn').addEventListener('click', quickAgriQuiz);
