function burger() {
    const burgerBtn = document.querySelector('.hamburger-lines');
    const burgerLines = document.querySelectorAll('.line');
    const menu = document.querySelector('.menu');

    burgerBtn.addEventListener('click', () => {
        burgerBtn.classList.toggle('hamburger-lines_active');
        menu.classList.toggle('menu_active');

        // Анимация кнопки
        burgerLines.forEach((elem) => {
            elem.classList.toggle('active');
        });
        
    });

    
}

export default burger;