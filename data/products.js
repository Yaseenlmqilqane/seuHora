import {formatCurrency} from "../scripts/utils/money.js";


export function getProduct(productId) {
    let matchingProduct;

    products.forEach((product) => {
        if(product.id === productId) {
            matchingProduct = product;
        }
    });

    return matchingProduct;
}

class Product {

    id;
    name;
    image;
    brand;
    priceCents;
    rating;


    constructor(productDetails) {
        this.id = productDetails.id;
        this.name = productDetails.name;
        this.image = productDetails.image;
        this.brand = productDetails.brand;
        this.priceCents = productDetails.priceCents;
        this.rating = productDetails.rating;
    }

    getPrice() {
        return `${formatCurrency(this.priceCents)}`
    }
}




export const products = [
    {
        id: '832e92dc-2c74-4bfe-a6e7-b557b2d342e0',
        name: 'Yacht Master II',
        brand: 'rolex',
        image: 'images/products/Yacht-Master II.png',
        priceCents: 1517800,
        rating: {
            stars: 4.5,
            count: 87
        },
        keywords: [
            "socks",
            "sports",
            "apparel"
        ]
    },
    {
        id: '5adaa2cf-cdd2-4703-bd28-ffd7486d487e',
        name: 'Nautilus',
        brand: 'Patek Philippe',
        image: 'images/products/Nautilus.png',
        priceCents: 1383700,
        rating: {
            stars: 5,
            count: 287
        },
        keywords: [
            "socks",
            "sports",
            "apparel"
        ]
    },
    {
        id: '81032a9c-203f-47a0-b3c5-2137b3357667',
        name: 'Calatrava',
        brand: 'Patek Philippe',
        image: 'images/products/Calatrava.png',
        priceCents: 583100,
        rating: {
            stars: 5,
            count: 587
        },
        keywords: [
            "socks",
            "sports",
            "apparel"
        ]
    },
    {
        id: 'cfe44472-9b0f-44e0-a816-af77d70096e9',
        name: 'Speedmaster',
        brand: 'omega',
        image: 'images/products/Speedmaster.png',
        priceCents: 748200,
        rating: {
            stars: 3.5,
            count: 487
        },
        keywords: [
            "socks",
            "sports",
            "apparel"
        ]
    },
    {
        id: '97a216cc-9832-45c9-9980-99b8d47b4567',
        name: 'Oyster Perpetual',
        brand: 'rolex',
        image: 'images/products/Oyster-Perpetual.png',
        priceCents: 159800,
        rating: {
            stars: 5,
            count: 6870
        },
        keywords: [
            "socks",
            "sports",
            "apparel"
        ]
    },
    {
        id: 'ea4c38c3-7c06-4bec-8296-d5ffcdb3d5ad',
        name: 'Monaco',
        brand: 'TAG Heuer',
        image: 'images/products/Monaco.png',
        priceCents: 182500,
        rating: {
            stars: 2,
            count: 125
        },
        keywords: [
            "socks",
            "sports",
            "apparel"
        ]
    },
    {
        id: '2ac26645-fd07-4c5e-8a43-e451397c4d2d',
        name: 'Sea-Dweller',
        brand: 'rolex',
        image: 'images/products/Sea-Dweller.png',
        priceCents: 790700,
        rating: {
            stars: 4.5,
            count: 187
        },
        keywords: [
            "socks",
            "sports",
            "apparel"
        ]
    },
    {
        id: '',
        name: 'Seamaster',
        brand: 'omega',
        image: 'images/products/Seamaster.png',
        priceCents: 30800,
        rating: {
            stars: 4.5,
            count: 487
        },
        keywords: [
            "socks",
            "sports",
            "apparel"
        ]
    },
    {
        id: '22e47f18-4cb9-43f2-b7a0-a357d8cd5874',
        name: 'Carrera',
        brand: 'TAG Heuer',
        image: 'images/products/Carrera.png',
        priceCents: 175800,
        rating: {
            stars: 2.5,
            count: 287
        },
        keywords: [
            "socks",
            "sports",
            "apparel"
        ]
    },
    {
        id: 'b0851cf6-0b1b-4102-a5a7-bbb406b6ec5d',
        name: 'Explorer II',
        brand: 'rolex',
        image: 'images/products/Explorer-II.png',
        priceCents: 635500,
        rating: {
            stars: 4,
            count: 487
        },
        keywords: [
            "socks",
            "sports",
            "apparel"
        ]
    },
    {
        id: 'b0851cf6-0b1b-4102-a5a7-bbb406b6ec5d',
        name: 'Milgauss',
        brand: 'rolex',
        image: 'images/products/Milgauss.png',
        priceCents: 748200,
        rating: {
            stars: 4,
            count: 487
        },
        keywords: [
            "socks",
            "sports",
            "apparel"
        ]
    },
].map((productDetails) => {
    return new Product(productDetails);
});