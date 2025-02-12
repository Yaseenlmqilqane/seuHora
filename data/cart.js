export let cart = [
    {
        productId: '832e92dc-2c74-4bfe-a6e7-b557b2d342e0',
        quantity: 2,
        deliveryOptionId: '1',
    },
    {
        id: '5adaa2cf-cdd2-4703-bd28-ffd7486d487e',
        quantity: 1,
        deliveryOptionId: '2',
    }
]



export function addToCart(productId) {
    let matchingItem;

    cart.forEach(cartItem => {
        if(productId === cartItem.productId) {
            matchingItem = cartItem;
        }

    });
    
    if(matchingItem) {
        matchingItem.quantity += 1;
    } else {
        cart.push({
            id: productId,
            quantity: 2,
            deliveryOptionId: '1',
        })
    }

    console.log(cart);
}


