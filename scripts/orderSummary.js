import { cart, removeFromCart, calculateCartQuantity, updateQuantity, updateDeliveryOption} from "../data/cart.js";
import { products } from '../data/products.js';
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import {deliveryOptions} from '../data/deliveryOptions.js';
import {formatCurrency2} from '../scripts/utils/money.js'





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

        const deliveryOptionId = cartItem.deliveryOptionId;

        let deliveryOption;

        deliveryOptions.forEach(option => {
            if(option.id === deliveryOptionId) {
                deliveryOption = option;
            }
        });

        const today = dayjs();
        const deliveryDate = today.add(deliveryOption.deliveryDays, 'days');
        const dateString = deliveryDate.format('dddd, MMMM D');

        
        orderSummaryHTML += `
            <div class="cart-item-container js-cart-item-container-${matchingProduct.id}">
                <p class="delivery-date">Delivery date: ${dateString}</p>
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
                        ${deliveryOptionsHTML(matchingProduct, cartItem)}
                    </div>
                </div>
            </div>
        `
    });

    

    function deliveryOptionsHTML(matchingProduct, cartItem) {
        
        let html = '';

        deliveryOptions.forEach(deliveryOption => {
            
            const today = dayjs();
            const deliveryDate = today.add(deliveryOption.deliveryDays, 'days');
            const dateString = deliveryDate.format('dddd, MMMM D');
            
            const priceString = deliveryOption.priceCents === 0 ? 'Free': `${formatCurrency2(deliveryOption.priceCents)} -`;

            const isChecked = deliveryOption.id === cartItem.deliveryOptionId;

            html += `
                
                <div class="delivery-option"
                data-product-id="${matchingProduct.id}"
                data-delivery-option-id="${deliveryOption.id}">
                    <input 
                        type="radio" 
                        ${isChecked ? 'checked' : '' } 
                        class="delivery-option-input"  
                        name="delivery-option-${matchingProduct.id}"
                    >
                    <div>
                        <div class="delivery-option-date">${dateString}</div>
                        <div class="delivery-option-price">${priceString} Shipping</div>
                    </div>
                </div>
                
            `
        });

        return html;
    };

    orderSummary.innerHTML = orderSummaryHTML;


    // Delete link
    document.querySelectorAll('.js-delete-item').forEach((link) => {
        link.addEventListener('click', () => {
            const productId = link.dataset.productId;
            removeFromCart(productId);
            renderOrderSummary();
        });
    });

    calculateCartQuantity();
    
    // Update link
    document.querySelectorAll('.js-Update-quntity').forEach(link => {
        link.addEventListener('click', () => {
            const productId = link.dataset.productId;
            const cartContainer = document.querySelector(`.js-cart-item-container-${productId}`);

            cartContainer.classList.add('is-editing-quantity')
        });
    });

    // Save link
    document.querySelectorAll('.save-quantity-link').forEach(link => {
        link.addEventListener('click', () => {
            const productId = link.dataset.productId;
            
            const cartContainer = document.querySelector(`.js-cart-item-container-${productId}`);
            cartContainer.classList.remove('is-editing-quantity');

            const inputValue = document.querySelector(`.js-quantity-input-${productId}`).value;
            const newQuantity = Number(inputValue);

            

            updateQuantity(productId, newQuantity);
            renderOrderSummary();
        });
        
    });
   

    document.querySelectorAll('.delivery-option').forEach((element) => {
        element.addEventListener('click', () => {
            const {productId, deliveryOptionId} = element.dataset;
            updateDeliveryOption(productId, deliveryOptionId);
            renderOrderSummary();
        });
    });

};





