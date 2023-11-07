

let cart = [
    { item: "Bread", price: 3.29, quantity: 2 },
    { item: "Milk", price: 4.09, quantity: 1 },
    { item: "T-Bone Steak", price: 12.99, quantity: 2 },
    { item: "Baking Potato", price: 1.89, quantity: 6 },
    { item: "Iceberg Lettuce", price: 2.06, quantity: 1 },
    { item: "Ice Cream - Vanilla", price: 6.81, quantity: 1 },
    { item: "Apples", price: 0.66, quantity: 6 }
];


//using the map () function to return only the item name and then use forEach () to display the list of items

let itemNames = cart.map(item => item.item);

console.log("list of items: ");

itemNames.forEach(item => {
    console.log(item);
});

//determine the total cost of everything on the cart using reduce ()

function getTotalCost(currentPrice, arrayElement) {
    return currentPrice + arrayElement.price * arrayElement.quantity;
}
let sum = cart.reduce(getTotalCost, 0);
console.log(sum)

//sort the list before you display it 

cart.sort(function(a, b) {
    if (a.item < b.item) return -1;
    else if (a.item == b.item) return 0;
    else return 1;
});

let cartItems = cart.length;
for(let i = 0; i < cartItems; i++) {
    console.log(cart[i].item + " $ " + cart[i].price.toFixed(2));
}

