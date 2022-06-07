function burger() {
    const burgerBtn = document.querySelector('.hamburger-lines');
    const burgerLines = document.querySelectorAll('.line');

    burgerBtn.addEventListener('click', () => {
        // Анимация кнопки
        burgerLines.forEach((elem) => {
            elem.classList.toggle('active');
        });
        
    });


}

export default burger;