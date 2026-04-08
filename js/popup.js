// ----- УПРАВЛЕНИЕ ПОП-АПОМ -----
// Предполагаем, что кнопка "Подписаться" в блоке .subscribe открывает попап.
// Если у тебя уже есть кнопка с классом .subscribe-button, то привязываем открытие к ней.
document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.getElementById('popupOverlay');
    const closeBtn = document.getElementById('popupCloseBtn');
    const subscribeBtn = document.querySelector('.subscribe-button'); // кнопка на сайте
    const popupSubscribeBtn = document.getElementById('popupSubscribeBtn');
    const emailInput = document.getElementById('popupEmail');

    // Открыть попап по клику на кнопку "ПОДПИСАТЬСЯ" в секции .subscribe
    if (subscribeBtn) {
        subscribeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            overlay.classList.add('active');
        });
    }

    // Закрыть попап по крестику
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            overlay.classList.remove('active');
            emailInput.value = ''; // очищаем поле при закрытии (опционально)
        });
    }

    // Закрыть попап при клике на оверлей (фон)
    if (overlay) {
        overlay.addEventListener('click', function(e) {
            if (e.target === overlay) {
                overlay.classList.remove('active');
                emailInput.value = '';
            }
        });
    }

    // Обработка кнопки "ПОДПИСАТЬСЯ" внутри попапа
    if (popupSubscribeBtn) {
        popupSubscribeBtn.addEventListener('click', function() {
            let email = emailInput.value.trim();
            if (email === "") {
                alert("Пожалуйста, введите ваш e-mail");
                return;
            }
            // Простейшая проверка на формат email
            if (!email.includes('@') || !email.includes('.')) {
                alert("Введите корректный e-mail (пример: name@domain.com)");
                return;
            }
            // Системное уведомление
            alert(`${email}, добро пожаловать в семью РАМП!`);
            // После успешной подписки закрываем попап
            overlay.classList.remove('active');
            emailInput.value = '';
        });
    }
});