// This script checks the quiz answers and gives immediate feedback.
// It listens for the button click and updates the page.

const answers = {
  q1: "correct",
  q2: "correct",
  q3: "correct",
  q4: "correct",
  q5: "correct"
};

// This function checks each question and updates the feedback text.
function checkQuizAnswers() {
  let score = 0;

  Object.keys(answers).forEach((questionKey) => {
    const selectedOption = document.querySelector(`input[name="${questionKey}"]:checked`);
    const feedback = document.querySelector(`.feedback[data-question="${questionKey}"]`);

    if (!selectedOption) {
      feedback.textContent = "Please choose an answer.";
      feedback.className = "feedback";
      return;
    }

    if (selectedOption.value === answers[questionKey]) {
      feedback.textContent = "Correct! Well done.";
      feedback.className = "feedback correct";
      score++;
    } else {
      feedback.textContent = "Not quite. Try again!";
      feedback.className = "feedback incorrect";
    }
  });

  const totalQuestions = Object.keys(answers).length;
  const resultText = document.getElementById("quizResult");
  resultText.textContent = `You scored ${score} out of ${totalQuestions}.`;

  if (score === totalQuestions) {
    resultText.style.color = "#2e8b57";
  } else if (score >= totalQuestions / 2) {
    resultText.style.color = "#ff9f43";
  } else {
    resultText.style.color = "#ef476f";
  }
}

// Connect the button to the quiz function.
document.getElementById("checkQuizBtn").addEventListener("click", checkQuizAnswers);
