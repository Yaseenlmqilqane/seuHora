import {products} from '../data/products.js';
import {cart, addToCart, updateCartQuantity} from '../data/cart.js';






const productHTML = document.querySelector('.js-main-section');

products.forEach((product) => {
    const html = `
        <div class="item-card">
            <div class="item-card-image">
                <img src="${product.image}" alt="" class="item-image">
            </div>
            <div class="item-card-info">
                <p class="brand-name">${product.brand}</p>
                <h4 class="item-name limit-text-to-2-lines ">${product.name}</h4>
                <div class="product-rating-container">
                    <img class="product-rating-stars"
                        src="../images/ratings/rating-${product.rating.stars * 10}.png">
                    <div class="product-rating-count link-primary">
                        ${product.rating.count}
                    </div>
                </div>
                <p class="item-price">${product.getPrice()}</p>
            </div>
            <div class="product-quantity-container">
                <select class="js-quantity-selector-${product.id}">
                    <option selected value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
            </select>
            </div>
            <div class="limit-text-to-2-lines"></div>
            <div class="item-is-added-to-cart js-added-to-cart-${product.id}">
                <img src="./images/icons/checkmark.png" alt="" class="added-icon">
                <p class="added-text">Added</p>
            </div>
            <button 
            data-product-id="${product.id}" 
            class="add-to-cart-button js-add-to-cart-button">
                Add to cart
            </button>
        </div>
    `
    productHTML.innerHTML += html;
})


document.querySelectorAll('.js-add-to-cart-button').forEach((button) => {
    button.addEventListener('click', () => {
        const productId = button.dataset.productId;
        const quantitySelector = document.querySelector(`.js-quantity-selector-${productId}`).value;

        addToCart(productId, quantitySelector);
        updateCartQuantity();
        showAddedMessage(productId);
    });
});


let addedMessaeTimeoutId;

function showAddedMessage(productId) {
    const addedMessage = document.querySelector(`.js-added-to-cart-${productId}`);
    addedMessage.classList.add("added");

    setTimeout(() => {
        // Check if a previous timeoutId exists. If it does,
        // we will stop it.
        if(addedMessaeTimeoutId) {
            clearTimeout(addedMessaeTimeoutId);
        }

        const timeoutId = setTimeout(() => {
            addedMessage.classList.remove("added");
        }, 2000);

        // Save the timeoutId so we can stop it later.
        addedMessaeTimeoutId = timeoutId;
    });
};
        
// console.log();