export let cart = [
    {
        productId: '832e92dc-2c74-4bfe-a6e7-b557b2d342e0',
        quantity: 2,
    },
    {
        productId: '5adaa2cf-cdd2-4703-bd28-ffd7486d487e',
        quantity: 1,
    }
]



export function addToCart(productId, quantitySelector) {
    let matchingProduct;

        // Loop throught the cart 
        cart.forEach((cartItem) => {
            // To cheack if product in the cart.
            if(productId === cartItem.productId) {
                matchingProduct = cartItem;
            }
        });

        // If it is in the cart 
        if(matchingProduct) {
            // Increase the quantity.
            matchingProduct.quantity += 1
        } else {
            // If it's not in the cart, add it to the cart.
            cart.push({
                productId,
                quantity: Number(quantitySelector),
            });
        }
};

export function updateCartQuantity() {
    // calculate the quantity in the cart or total number of products in the cart
    let cartQuantity = 0;

    // To know quantity of array we need loop throught it this array.
    cart.forEach((cartitem) => {
        cartQuantity += cartitem.quantity;
    });

    // Show quantity in the home page in on the cart icon
    document.querySelector('.js-count-cart-quntity').innerHTML = cartQuantity;
};


export function removeFromCart(productId) {
    const newCart = [];

    cart.forEach(cartItem => {
        if(cartItem.productId !== productId) {
            newCart.push(cartItem);
        }
    });

    cart = newCart;
}