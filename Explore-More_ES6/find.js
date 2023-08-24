const products = [
    {id:1, brand: 'Samsung', price: 3250},
    {id:1, brand: 'iPhone', price: 3320},
    {id:1, brand: 'xiaomi', price: 2340}
];

const expensive = products.find(product=> product.price > 3000);
console.log(expensive);