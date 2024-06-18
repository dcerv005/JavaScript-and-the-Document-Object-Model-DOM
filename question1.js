// Task 1
let products = [
    { name: "Laptop", price: 999.99, description: "Powerful computing on the go" },
    { name: "Smartphone", price: 699.99, description: "Stay connected wherever you are" },
    { name: "Headphones", price: 149.99, description: "Immersive audio experience" }
];

// Task 2
function displayProducts () {
    for(let i=0; i<products.length; i++){
        alert("Product name: "+products[i].name+", priced at $"+ products[i].price+", description: "+ products[i].description);
    }
}

displayProducts();

//Task 3
document.addEventListener('load', displayProducts);