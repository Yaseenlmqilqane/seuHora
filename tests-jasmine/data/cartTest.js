import {addToCart, cart, loadFromStorage} from "../../data/cart.js";

describe('test suite: addToCart', () => {
    it('adds an existing product to the cart', () => {
        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([{
                productId: '832e92dc-2c74-4bfe-a6e7-b557b2d342e0',
                quantity: 1,
                deliveryOptionId: '1'
            }]);
        });
        loadFromStorage();

        addToCart('5adaa2cf-cdd2-4703-bd28-ffd7486d487e');
        expect(cart.length).toEqual(1);
        expect(cart[0].productId).toEqual('5adaa2cf-cdd2-4703-bd28-ffd7486d487e');
        
    });

    it('adds a new product to the cart', () => {
        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([]);
        });

        loadFromStorage();

        addToCart('5adaa2cf-cdd2-4703-bd28-ffd7486d487e');
        expect(cart.length).toEqual(1);
        expect(cart[0].productId).toEqual('5adaa2cf-cdd2-4703-bd28-ffd7486d487e');
        
    });
});