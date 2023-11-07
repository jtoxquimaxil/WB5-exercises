"use script";

let products = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79},
    {product: "Almond Joy", price: 2.29},
    {product: "Twix", price: 1.29},
    {product: "Skittles", price: 1.25},
    {product: "Hershey Bar", price: 2.49},
    {product: "Nerds Gummy", price: 3.99},
    {product: "Ferrero Rocher", price: 1.09},
   ];
   
   //which candies costs less than $4.00?

   function findProductUnder4(priceValue) {
    return products.filter(product => product.price <= priceValue);
   }
   let maxPrice = 4.00;
   let firstValueUnder4 = findProductUnder4(maxPrice);

   if (firstValueUnder4 != undefined) {
    console.log(firstValueUnder4);
   }
   else {
    console.log("No product under 4")
   }

   //which candies has "M&M" its name?

   function findMandMProducts(candyProduct) {
    return candyProduct.filter(product => product.product.includes("M&Ms"));
   }
   let candyName = findMandMProducts(products);
   
   console.log("Candies with the name M&M: ");

   candyName.forEach(candy => {
    console.log(candy.product);
   });
   
   //Do we carry "Swedish Fish"?

   function doWeCarrySwedishFish(productBrand) {
    productBrand.find(product => product.product ==="Swedish Fish");
   }

   if (doWeCarrySwedishFish) {
    console.log("Yes we carry Swedish Fish");
   } else {
    console.log("No we do not carry Swedish fish")
   }


