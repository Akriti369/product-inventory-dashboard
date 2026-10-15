
 // Product Inventory Dashboard

// Store all products in an array
let products = [];

// Get HTML elements
const productForm = document.getElementById("productForm");
const productName = document.getElementById("productName");
const productPrice = document.getElementById("productPrice");
const productQuantity = document.getElementById("productQuantity");
const productCategory = document.getElementById("productCategory");

const productTable = document.getElementById("productTable");
const searchProduct = document.getElementById("searchProduct");
const filterCategory = document.getElementById("filterCategory");

// Function to display products
function displayProducts() {

    // Clear the old table
    productTable.textContent = "";

    // Get search and filter values
    let searchText = searchProduct.value.toLowerCase();
    let selectedCategory = filterCategory.value;

    // Display matching products
    products.forEach(function(product) {

        if (
            product.name.toLowerCase().includes(searchText) &&
            (selectedCategory === "All" ||
             product.category === selectedCategory)
        ) {

            let row = document.createElement("tr");

            let idCell = document.createElement("td");
            idCell.textContent = product.id;
            row.appendChild(idCell);

            let nameCell = document.createElement("td");
            nameCell.textContent = product.name;
            row.appendChild(nameCell);

            let priceCell = document.createElement("td");
            priceCell.textContent = "Rs. " + product.price;
            row.appendChild(priceCell);

            let quantityCell = document.createElement("td");
            quantityCell.textContent = product.quantity;
            row.appendChild(quantityCell);

            let categoryCell = document.createElement("td");
            categoryCell.textContent = product.category;
            row.appendChild(categoryCell);

            let valueCell = document.createElement("td");
            valueCell.textContent =
                "Rs. " + (product.price * product.quantity);
            row.appendChild(valueCell);

            let statusCell = document.createElement("td");

            if (product.quantity <= 5) {
                statusCell.textContent = "Low Stock";
            } else {
                statusCell.textContent = "In Stock";
            }

            row.appendChild(statusCell);

            productTable.appendChild(row);
        }
    });
}

// Function to calculate inventory summary
function updateSummary() {

    let totalQuantity = 0;
    let totalValue = 0;

    products.forEach(function(product) {
        totalQuantity += product.quantity;
        totalValue += product.price * product.quantity;
    });

    document.getElementById("totalProducts").textContent =
        products.length;

    document.getElementById("totalQuantity").textContent =
        totalQuantity;

    document.getElementById("totalValue").textContent =
        totalValue.toLocaleString("en-IN");
}

// Add a new product
productForm.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = productName.value.trim();
    let price = Number(productPrice.value);
    let quantity = Number(productQuantity.value);
    let category = productCategory.value;

    // Check the entered data
    if (
        name === "" ||
        price <= 0 ||
        quantity < 0 ||
        category === "" ||
        !Number.isFinite(price) ||
        !Number.isInteger(quantity)
    ) {
        alert("Please enter valid product details.");
        return;
    }

    // Create a new product object
    let product = {
        id: products.length + 1,
        name: name,
        price: price,
        quantity: quantity,
        category: category
    };

    // Add product to the array
    products.push(product);

    // Update the table and summary
    displayProducts();
    updateSummary();

    // Clear the form
    productForm.reset();

    alert("Product added successfully!");
});

// Search products by name
searchProduct.addEventListener("input", function() {
    displayProducts();
});

// Filter products by category
filterCategory.addEventListener("change", function() {
    displayProducts();
});

// Show the initial empty dashboard
displayProducts();
updateSummary();
