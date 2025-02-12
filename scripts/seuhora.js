import {products} from '../data/products.js';
import { addToCart } from '../data/cart.js'




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
                <p class="item-price">${product.getPrice()}</p>
            </div>
            <div class="limit-text-to-2-lines"></div>
            <div class="item-is-added-to-cart">
                <img src="./images/icons/checkmark.png" alt="" class="added-icon">
                <p class="added-text">Added</p>
            </div>
            <button data-product-id="${product.id}" class="add-to-cart-button js-add-to-cart-button">Add to cart</button>
        </div>
    `
    productHTML.innerHTML += html;
})



document.querySelectorAll('.js-add-to-cart-button').forEach((button) => {
    button.addEventListener('click', () => {
        const productId = button.dataset.productId;
        addToCart(productId)
    });
});



