// -----------------------
// INTERACTIVITY
// -----------------------
document.addEventListener("DOMContentLoaded", () => {

    const playButton = document.querySelector('.play-button');
    const progressFill = document.querySelector('.progress-fill');

    if (playButton && progressFill) {
        playButton.addEventListener('click', () => {
            let width = 20;

            const interval = setInterval(() => {
                if (width >= 100) {
                    clearInterval(interval);
                    setTimeout(() => {
                        progressFill.style.width = '20%';
                    }, 500);
                } else {
                    width += 10;
                    progressFill.style.width = width + '%';
                }
            }, 200);
        });
    }

    // -----------------------
    // MENU HOVER EFFECT
    // -----------------------
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateX(4px)';
        });
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateX(0)';
        });
    });

    // -----------------------
    // SCORE DISPLAY
    // -----------------------
    const correctScoreEl = document.querySelector(".score-number");
    const percentScoreEl = document.querySelector(".score-percentage");
    const wrongScoreEl = document.querySelector(".info-card.red .info-text");
    const totalQuestionsEl = document.getElementById("totalQuestions");

    // Function to update score display
    function updateScoreDisplay() {
        if (correctScoreEl && percentScoreEl) {
            const correctScore = Number(localStorage.getItem("correctScore")) || 0;
            const wrongScore = Number(localStorage.getItem("wrongScore")) || 0;
            const totalQuestions = Number(localStorage.getItem("totalQuestions")) || 0;

            // Update correct score
            correctScoreEl.textContent = correctScore;

            // Calculate and update percentage
            const percentage = totalQuestions > 0 ? Math.round((correctScore / totalQuestions) * 100) : 0;
            percentScoreEl.textContent = percentage + "%";

            // Update progress bar
            if (progressFill) {
                progressFill.style.width = percentage + "%";
            }

            // Update wrong score display
            if (wrongScoreEl) {
                wrongScoreEl.textContent = wrongScore;
            }

            // Update total questions in Question-box
            if (totalQuestionsEl) {
                totalQuestionsEl.textContent = totalQuestions;
            }
        }
    }

    // Initial score display
    updateScoreDisplay();

    // Listen for storage changes (when reset button is clicked on index.html)
    window.addEventListener('storage', function(e) {
        if (e.key === 'correctScore' || e.key === 'wrongScore' || e.key === 'totalQuestions') {
            updateScoreDisplay();
        }
    });

    // Also listen for custom storage event (for same-tab updates)
    window.addEventListener('scoreReset', function() {
        updateScoreDisplay();
    });
});
