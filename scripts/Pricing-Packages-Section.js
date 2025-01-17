document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.select-btn');

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const packageName = button.parentElement.querySelector('h3').innerText;
            const packagePrice = button.parentElement.querySelector('.price').innerText;

            alert(`You selected the ${packageName} with a price of ${packagePrice}.`);
        });
    });
});
