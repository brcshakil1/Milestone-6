const products = [
    {id:1, name: 'Lenovo ThinkPad', price: 56000},
    {id:2, name: 'Mac pad 14', price: 86000},
    {id:3, name: 'Asus Basus', price: 66000},
    {id:4, name: 'Deshi Ponno Walton', price: 46000}
]

// console.log(products[2].price)

const user = {
    id:'BT1205C',
    name: 'Bayazidur Rahman',
    address: {
        street: {name:'Central Road', name2:'Cout Road', name3:'Oabda Road'},
        city: 'Moulvibazar',
    }

}

console.log(user.address.street.name2);

const user2 = {
    id:'BT1205C',
    name: 'Bayazidur Rahman',
    address: {
        city: 'Moulvibazar',
    }

}

console.log(user2.address.street?.name2);