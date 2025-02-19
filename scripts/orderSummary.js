import { cart, removeFromCart } from "../data/cart.js";
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
            <div class="cart-item-container">
                <p class="delivery-date">Delivery date: Friday, February 14</p>
                <div class="cart-details-grid">
                    <img class="item-img" src="${matchingProduct.image}" alt="">
                    <div class="item-info">
                        <h3 class="item-name">${matchingProduct.name}</h3>
                        <p class="item-price">${matchingProduct.getPrice()}</p>
                        <div class="item-quantity">
                            <p>Quantity: ${cartItem.quantity}</p>
                            <span class="Update-quntity">Update</span>
                            <span class="delete-item js-delete-item" data-product-id="${matchingProduct.id}">delete</span>
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

};

