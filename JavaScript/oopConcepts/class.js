//class = {ES6 feature} provides a more structured and clearer way to
//work with objects compared to traditional constructor functions
// ex.static keyword,encapsulation,inheritance, and more

// provides a blueprint for creating objects with shared properties and methods

// Example: Product class with properties and methods

class Product {
    constructor(name , price) {
        this.name = name;
        this.price = price;
    }

    displayProduct() {
        console.log(`Product: ${this.name}`);
        console.log(`Price: $${this.price.toFixed(2)}`);
    }

    calaculateTotal(salesTax) {
        return this.price + (this.price * salesTax);
    }
}

const salesTax = 0.07; // 7% sales tax

const product1 = new Product("Laptop", 999.99);
const product2 = new Product("Smartphone", 499.99);
const product3 = new Product("Tablet", 299.99);

product1.displayProduct(); // Output: Product: Laptop, Price: $999.99

const total = product1.calaculateTotal(salesTax);
console.log(`Total with tax: $${total.toFixed(2)}`); // Output: Total with tax: $1069.99

product2.displayProduct(); // Output: Product: Smartphone, Price: $499.99
const total2 = product2.calaculateTotal(salesTax);
console.log(`Total with tax: $${total2.toFixed(2)}`); // Output: Total with tax: $534.99

//so, above code defines a Product class with a constructor to initialize name and price properties.
//It also includes methods to display product details and calculate the total price with sales tax.
//Instances of the Product class are created for different products, and their methods are called to 
// demonstrate functionality.