const openSurveyButton = document.getElementById("openSurvey");
const surveyModal = document.getElementById("surveyModal");
const closeSurveyButton = document.getElementById("closeSurvey");
const surveyForm = document.getElementById("surveyForm");

openSurveyButton.addEventListener("click", function() {
    surveyModal.style.display = "block";
});

closeSurveyButton.addEventListener("click", function() {
    surveyModal.style.display = "none";
});

surveyForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const answers = {};

    // Collect answers for all 8 questions
    for (let i = 1; i <= 8; i++) {
        const questionName = `question${i}`;
        const selectedAnswer = document.querySelector(`input[name="${questionName}"]:checked`);
        if (selectedAnswer) {
            answers[questionName] = selectedAnswer.value;
        }
    }

    // You can now access the answers and handle them as needed
    console.log(answers);

    surveyModal.style.display = "none";
});
