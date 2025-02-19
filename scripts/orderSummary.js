import { cart } from "../data/cart.js";
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
                            <a href="" class="Update-quntity">Update</a>
                            <a href="" class="delete-item">delete</a>
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
    
};

