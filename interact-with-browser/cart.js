const addProduct = () => {
    const productField = document.getElementById('product-name');
    const quantityField = document.getElementById('product-quantity');

    const product = productField.value;
    const quantity = quantityField.value;

    productField.value = '';
    quantityField.value = '';

    displayProduct(product, quantity);
    saveProductIntoLocalStorage(product,quantity)
}

const displayProduct = (product, quantity) => {
    const ul = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product}: ${quantity}`;
    ul.appendChild(li)
}

const getProductFromLocalStorage = () => {
    let cart = {};
    const saveCart = localStorage.getItem('cart');
    if(saveCart) {
        cart = JSON.parse(saveCart);
    } 
    return cart
}

const saveProductIntoLocalStorage = (product, quantity) => {
    const cart = getProductFromLocalStorage();
    cart[product] = quantity;
    const cartStringify = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringify);
}


const displayProductFromLocalStorage = () => {
    const savedProducts = getProductFromLocalStorage();
    for(const product in savedProducts) {
        const quantity = savedProducts[product];
        displayProduct(product, quantity)
    }
}

displayProductFromLocalStorage()
