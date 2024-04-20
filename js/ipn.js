document.addEventListener('DOMContentLoaded', function() {
    const openModalLink = document.getElementById('openModalLink');
    openModalLink.addEventListener('click', function(event) {
        event.preventDefault();
        openModal('modal-question'); // Открываем модальное окно сразу с вопросами
    });
});

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'block';
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';
}

function processMonth(monthNumber, monthName) {
    const income = prompt(`Укажите доход, полученный за ${monthName} 2024:`);
    if (income === null || income === '') {
        return; // Пользователь отменил ввод или не ввел данные
    }
    const hasCorrections = confirm(`Были ли у вас корректировки в ${monthName} 2024?`);
    let corrections = 0;
    if (hasCorrections) {
        corrections = parseInt(prompt(`Укажите сумму корректировок в ${monthName} 2024:`)) || 0;
    }
    const opv = income * 0.1;
    const voms = income > 850000 ? 17000 : income * 0.02;
    const ovp = income * 0.1;
    const socNalog = (income - opv - voms - corrections) * 0.095;
    const socOtchis = (income - opv) * 0.035;
    const socNalogKUplate = socNalog - socOtchis;

    const resultText = `
        <p>Ваш ОПВ составляет: ${opv}</p>
        <p>Ваш ВОМС составляет: ${voms}</p>
        <p>Ваш ОВП составляет: ${ovp}</p>
        <p>Сумма налога ИПН: ${(income - opv - voms - corrections) * 0.1}</p>
        <p>Социальный налог к уплате: ${socNalogKUplate}</p>
    `;
    document.getElementById('result-text').innerHTML = resultText;
    openModal('modal-result');
}