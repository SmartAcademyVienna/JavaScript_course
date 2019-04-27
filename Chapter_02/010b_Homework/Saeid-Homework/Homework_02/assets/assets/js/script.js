let productsOfStore = ["PlayStation", "Headphone", "Tv", "Printer"]; //This is variable of our Products
let numbersOfProducts = ["50", "24", "8", "16"]; //How much Products we have in our Store
let rankingOfProducts = ["5 Stars", "2 Stars", "4 Stars", "3 Stars"]; // Create a new variable for ranking of our Products
let priceOfProducts = ["124$", "214$", "350$", "220$"]; // Create a new variable for price of our Products

let el = document.getElementsByClassName("price");
el.textContent = priceOfProducts[3];
console.log(priceOfProducts[3]);
