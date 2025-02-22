import { cart, removeFromCart, calculateCartQuantity, updateQuantity} from "../data/cart.js";
import { products } from '../data/products.js'


const orderSummary = document.querySelector('.js-order-summary');



export function renderOrderSummary() {

    let orderSummaryHTML = '';

    
    cart.forEach((cartItem) => {

        const productId = cartItem.productId;

        let matchingProduct;

        products.forEach((product) => {
            if(product.id === productId) {
                matchingProduct = product;
            }
        });
        
        orderSummaryHTML += `
            <div class="cart-item-container js-cart-item-container-${matchingProduct.id}">
                <p class="delivery-date">Delivery date: Friday, February 14</p>
                <div class="cart-details-grid">
                    <img class="item-img" src="${matchingProduct.image}" alt="">
                    <div class="item-info">
                        <h3 class="item-name">${matchingProduct.name}</h3>
                        <p class="item-price">${matchingProduct.getPrice()}</p>
                        <div class="item-quantity">
                            <p>Quantity: <span class="cart-product-quantity js-cart-product-quantity-${matchingProduct.id}">${cartItem.quantity}</span></p>
                            <span class="Update-quntity js-Update-quntity" data-product-id="${matchingProduct.id}">Update</span>
                            <input class="quantity-input js-quantity-input-${matchingProduct.id}">
                            <span class="save-quantity-link link-primary" data-product-id="${matchingProduct.id}">Save</span>
                            <span class="delete-item js-delete-item" data-product-id="${matchingProduct.id}">Delete</span>
                        </div>
                    </div>
                    <div class="delivery-options">
                        <div class="delivery-option-title">
                            Choose a delivery option:
                        </div>
                        <div class="delivery-option">
                            <input type="radio" class="delivery-option-input" name="delivery-option-${matchingProduct.id}">
                            <div>
                                <div class="delivery-option-date">Saturday, February 15</div>
                                <div class="delivery-option-price">Free Shipping</div>
                            </div>
                        </div>
                        <div class="delivery-option">
                            <input type="radio" class="delivery-option-input"  name="delivery-option-${matchingProduct.id}">
                            <div>
                                <div class="delivery-option-date">Saturday, February 15</div>
                                <div class="delivery-option-price">Free Shipping</div>
                            </div>
                        </div>
                        <div class="delivery-option">
                            <input type="radio" class="delivery-option-input"  name="delivery-option-${matchingProduct.id}">
                            <div>
                                <div class="delivery-option-date">Saturday, February 15</div>
                                <div class="delivery-option-price">Free Shipping</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    });

    

    orderSummary.innerHTML = orderSummaryHTML;



    document.querySelectorAll('.js-delete-item').forEach((link) => {
        link.addEventListener('click', () => {
            const productId = link.dataset.productId;
            removeFromCart(productId);
            renderOrderSummary();
        });
    });

    calculateCartQuantity();
    
    document.querySelectorAll('.js-Update-quntity').forEach(link => {
        link.addEventListener('click', () => {
            const productId = link.dataset.productId;
            const cartContainer = document.querySelector(`.js-cart-item-container-${productId}`);

            cartContainer.classList.add('is-editing-quantity')
        });
    });

    document.querySelectorAll('.save-quantity-link').forEach(link => {
        link.addEventListener('click', () => {
            const productId = link.dataset.productId;
            
            const cartContainer = document.querySelector(`.js-cart-item-container-${productId}`);
            cartContainer.classList.remove('is-editing-quantity');

            const inputValue = document.querySelector(`.js-quantity-input-${productId}`).value;
            const newQuantity = Number(inputValue);

            console.log(newQuantity)

            updateQuantity(productId, newQuantity);
            renderOrderSummary();
        });
        
    });
    
};

