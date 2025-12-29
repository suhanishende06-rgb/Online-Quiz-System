// Online Quiz System - JavaScript

const quizData = [
    {
        question: "HTML stands for?",
        a: "Hyper Text Markup Language",
        b: "High Text Machine Language",
        c: "Hyperlinks Text Mark Language",
        d: "None of the above",
        correct: "a"
    },
    {
        question: "CSS is used for?",
        a: "Structure of webpage",
        b: "Styling of webpage",
        c: "Programming logic",
        d: "Database management",
        correct: "b"
    },
    {
        question: "JavaScript is used for?",
        a: "Styling",
        b: "Database",
        c: "Web page behavior",
        d: "None",
        correct: "c"
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEls = document.querySelectorAll("input[name='answer']");
const submitBtn = document.getElementById("submit");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

loadQuiz();

function loadQuiz() {
    answersEls.forEach(el => el.checked = false);
    const q = quizData[currentQuestion];
    questionEl.innerText = q.question;
    a_text.innerText = q.a;
    b_text.innerText = q.b;
    c_text.innerText = q.c;
    d_text.innerText = q.d;
}

submitBtn.addEventListener("click", () => {
    let answer;
    answersEls.forEach(el => {
        if (el.checked) {
            answer = el.id;
        }
    });

    if (answer === quizData[currentQuestion].correct) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuiz();
    } else {
        document.body.innerHTML = `
            <h2>Your Score: ${score}/${quizData.length}</h2>
            <button onclick="location.reload()">Restart Quiz</button>
        `;
    }
});
