function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function updateBookCount(title, delta) {
    let cart = getCart();
    const index = cart.findIndex(book => book.tittel === title);

    cart[index].count += delta;
    if (cart[index].count <= 0) {
        cart.splice(index, 1);
    }
    saveCart(cart);
    showCart();
}

function showCart() {
    const cartElement = document.querySelector('#cart-list');
    cartElement.innerHTML = '';
    let total = 0;

    const cart = getCart();

    cart.forEach(book => {
        const bookElement = document.createElement('div');

        bookElement.innerHTML = `
            <h4>${book.tittel}</h4>
            <p>Price: ${book.pris} NOK</p>
            <div>
                <button class="decrease">-</button>
                <span>${book.count}</span>
                <button class="increase">+</button>
            </div>
        `;

        bookElement.querySelectorAll('button').forEach(button => {
            button.addEventListener('click', () => {
                const add_or_decrease = button.classList.contains('increase') ? 1 : -1;
                updateBookCount(book.tittel, add_or_decrease);
            });
        });

        cartElement.appendChild(bookElement);
        total += book.pris * book.count;
    });

    document.querySelector('#totalpris').textContent = `${total}`;
}

showCart();
