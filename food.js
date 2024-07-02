function scrollToMenu() {
    document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', () => {
    const cartButtons = document.querySelectorAll('.dish input[type="submit"]');
    const cartMessage = document.getElementById('cart-message');

    cartButtons.forEach(button => {
        button.addEventListener('click', () => {
            cartMessage.style.display = 'block';
            setTimeout(() => {
                cartMessage.style.display = 'none';
            }, 2000);
        });
    });
});
