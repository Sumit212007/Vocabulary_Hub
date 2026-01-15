import { vocabulary } from "./vocab.js";
import { playCorrectSound, playWrongSound } from "./sound.js";
import { showPopup } from "./popup.js";


//-----------------------
// Points SYSTEM
//-----------------------

let correctCount = 0;
let wrongCount = 0;

const correctCountEl = document.getElementById("correctCount");
const wrongCountEl = document.getElementById("wrongCount");
const resetBtn = document.getElementById("resetBtn");
const resetCountEl = document.getElementById("resetCount");


// Get HTML elements
const questionEl = document.getElementById("question");
const optionButtons = document.querySelectorAll(".option-btn");

let currentQuestion;
let resetCount = 0;

// Shuffle function
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Load random question
function loadQuestion() {

    optionButtons.forEach(btn => {
        btn.classList.remove("correct", "wrong");
        btn.disabled = false;
    });

    const popupEl = document.getElementById("popup");
    popupEl.classList.remove("show");

    currentQuestion = vocabulary[Math.floor(Math.random() * vocabulary.length)];

    questionEl.textContent = `What is the synonym of "${currentQuestion.word}"?`;

    const shuffledOptions = shuffle([...currentQuestion.options]);

    optionButtons.forEach((btn, index) => {
        btn.textContent = shuffledOptions[index];
        btn.onclick = () => checkAnswer(btn);
    });
}

// reset score
    
function resetScore() {
    correctCount = 0;
    wrongCount = 0;
    correctCountEl.textContent = correctCount;
    wrongCountEl.textContent = wrongCount;
    
    // Reset localStorage so result.html shows reset scores
    localStorage.setItem("correctScore", 0);
    localStorage.setItem("wrongScore", 0);
    localStorage.setItem("totalQuestions", 0);
}

resetScore();

if (resetBtn) {
    resetBtn.addEventListener("click", () => {
        resetCount += 1;
        resetScore();
        loadQuestion();
        
        // Dispatch custom event for same-tab updates (if result.html is open)
        window.dispatchEvent(new Event('scoreReset'));
    });
}

// -----------------------
// CHECK ANSWER
// -----------------------
function checkAnswer(btn) {
    const selected = btn.textContent;

    optionButtons.forEach(b => (b.disabled = true));

    if (selected === currentQuestion.correct) {
        btn.classList.add("correct");

        correctCount++;
        correctCountEl.textContent = correctCount;

        // SAVE SCORE
        localStorage.setItem("correctScore", correctCount);
        localStorage.setItem("wrongScore", wrongCount);
        localStorage.setItem("totalQuestions", correctCount + wrongCount);
        playCorrectSound();

        showPopup("Correct! 🎉", "#3ccf4e", () => {
            optionButtons.forEach(b => (b.disabled = false));
            loadQuestion();
        });
    } else {
        btn.classList.add("wrong");

        wrongCount++;
        wrongCountEl.textContent = wrongCount;

        // SAVE SCORE
        localStorage.setItem("correctScore", correctCount);
        localStorage.setItem("wrongScore", wrongCount);
        localStorage.setItem("totalQuestions", correctCount + wrongCount);
        playWrongSound();

        optionButtons.forEach(b => {
            if (b.innerText === currentQuestion.correct) b.classList.add("correct");
        });

        showPopup("Wrong ❌", "#ff5252", () => {
            optionButtons.forEach(b => (b.disabled = false));
            loadQuestion();
        });
    }
}


// Start game
loadQuestion();
