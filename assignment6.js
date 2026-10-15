
 // Assignment 6: Array Manipulation and Object Operations

// Create an array of product objects
const products = [
    { name: "Laptop", price: 50000, category: "Electronics" },
    { name: "Phone", price: 20000, category: "Electronics" },
    { name: "Chair", price: 3000, category: "Furniture" },
    { name: "Table", price: 7000, category: "Furniture" }
];

// 1. Display all products using forEach()
console.log("-- All Products --");

products.forEach(function(product) {
    console.log(product.name, "-", product.price);
});

// 2. Filter products costing more than 10000
console.log("-- Products Above 10000 --");

const expensiveProducts = products.filter(function(product) {
    return product.price > 10000;
});

console.log(expensiveProducts);

// 3. Create an array of product names using map()
console.log("-- Product Names --");

const productNames = products.map(function(product) {
    return product.name;
});

console.log(productNames);

// 4. Calculate total inventory value using reduce()
const totalValue = products.reduce(function(total, product) {
    return total + product.price;
}, 0);

console.log("Total Inventory Value:", totalValue);
