const user = {id:1, name:'Aamir', job: 'actor'};
// JavaScript Object Notation (JSON)
const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);

const shop = {
    owner: 'Ali Babar Dukan',
    address: {
        street: 'Kola bagan',
        city: 'Dhaka',
        country: 'BD'
    },
    products: ['iPhone', 'MyPhone', "HisPhone"],
    revenue: 45000,
    isOpen: true,
    isNew: false
}
const shopJSON = JSON.stringify(shop)
const shopParse = JSON.parse(shopJSON)
console.log(shop);
console.log(shopJSON);
console.log(shopParse);