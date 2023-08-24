class Product {
    constructor(brand, product, price) {
        this.brand = brand;
        this.product = product;
        this.price = price
    }
}

const firstProduct = new Product('Apple', 'iPhone 14 Pro Max Plus', 150000);
console.log(firstProduct)