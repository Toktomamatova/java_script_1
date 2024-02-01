function toggleAnswer(answerId) {
    const answerElement = document.getElementById(answerId);
    const buttonElement = answerElement.previousElementSibling;

    if (answerElement.classList.contains('hidden')) {
        answerElement.classList.remove('hidden');
        buttonElement.textContent = 'Скрыть ответ';
    } else {
        answerElement.classList.add('hidden');
        buttonElement.textContent = 'Показать ответ';
    }
}
