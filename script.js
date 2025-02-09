const questions = [
    {
        question: "A student struggles with negative self-talk before exams. How can you help them reframe their thoughts?",
        options: [
            "Encourage positive affirmations and cognitive restructuring.",
            "Ignore the negative thoughts.",
            "Tell them to work harder."
        ]
    },
    {
        question: "You need to assess a child for learning difficulties. Which tool should you prioritize?",
        options: [
            "Cognitive and achievement tests.",
            "Random quizzes.",
            "Direct observation only."
        ]
    },
    {
        question: "A client calls in distress late at night. What’s the appropriate response?",
        options: [
            "Provide immediate emotional support and crisis management.",
            "Tell them to wait for the next session.",
            "Ignore the call."
        ]
    },
    {
        question: "A client feels overwhelmed at work and is struggling to manage their time. What strategy might you suggest first?",
        options: [
            "Create a detailed schedule and prioritize tasks.",
            "Tell them to take a week off.",
            "Advise them to work harder and push through."
        ]
    },
    {
        question: "A client wants to change their negative thinking patterns. What would you focus on in a CBT session?",
        options: [
            "Explore their early childhood experiences.",
            "Identify and challenge negative thoughts.",
            "Focus solely on relaxation techniques."
        ]
    },
    {
        question: "You’re on a crisis helpline, and someone calls saying they feel hopeless. What’s your first step?",
        options: [
            "Listen actively and assess the immediate risk.",
            "Tell them everything will be fine.",
            "Suggest they call back later."
        ]
    },
    {
        question: "A client shares that they are experiencing prolonged sadness and loss of interest in activities they once enjoyed. What is your first step?",
        options: [
            "Advise them to start a new hobby.",
            "Refer them for a clinical evaluation and assess symptoms further.",
            "Suggest they go on a vacation."
        ]
    },
    {
        question: "A child exhibits aggressive behavior in class. As a school psychologist, how would you handle this situation?",
        options: [
            "Punish the child immediately.",
            "Observe and assess the behavior patterns.",
            "Ignore it, assuming it will stop on its own."
        ]
    },
    {
        question: "You are tasked with evaluating a new therapy app for cognitive behavioral therapy (CBT). What feature should you prioritize in your review?",
        options: [
            "Attractive design.",
            "Evidence-based CBT tools and exercises.",
            "Engaging animations."
        ]
    }
];

let currentQuestionIndex = 0;
let answers = [];

function loadQuestion() {
    const questionData = questions[currentQuestionIndex];
    document.getElementById("question-text").innerText = questionData.question;
    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";
    questionData.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.innerText = option;
        button.classList.add("option-button");
        button.onclick = () => selectAnswer(index);
        optionsContainer.appendChild(button);
    });
    
    updateProgress();  // Update progress bar/percentage
    document.getElementById("next-button").disabled = true;
}

function selectAnswer(selectedIndex) {
    answers[currentQuestionIndex] = selectedIndex;
    document.getElementById("next-button").disabled = false;
}

function nextQuestion() {
    if (answers[currentQuestionIndex] === undefined) {
        alert("Please select an answer before proceeding.");
        return;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showThankYouPage();
    }
}

function updateProgress() {
    const progressPercentage = ((currentQuestionIndex + 1) / questions.length) * 100;
    document.getElementById("progress-bar").style.width = progressPercentage + "%";
    document.getElementById("progress-text").innerText = `Progress: ${Math.round(progressPercentage)}%`;
}

function showThankYouPage() {
    document.body.innerHTML = "<h2>Thank you for taking the quiz!</h2>";
    setTimeout(() => {
        window.location.href = "https://your-new-site-url.com";  // Replace with the correct URL
    }, 3000);
}

window.onload = loadQuestion;

