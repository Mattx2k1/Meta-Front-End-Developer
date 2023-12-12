// Given variables
const dishData = [
    {
        name: "Italian pasta",
        price: 9.55
    },
    {
        name: "Rice with veggies",
        price: 8.65
    },
    {
        name: "Chicken with potatoes",
        price: 15.55
    },
    {
        name: "Vegetarian Pizza",
        price: 6.45
    },
]
const tax = 1.20;

// Implement getPrices()
function getPrices(taxBoolean) {
    for (let i = 0; i < dishData.length(); i++) {
        let finalPrice;
        if (taxBoolean = true) {
            finalPrice = dishData[i] = (dishData[i] * tax);

        } else if (taxBoolean = false) {
            finalPrice = dishData[i];
        } else {
            console.log("You need to pass a boolean to the getPrices call!");
            console.log('return (to "jump out" of the further function execution)');
        }

        console.log(`Dish: ${dishData[i]} Price: $${finalPrice}`);
    } 
    
}

// Implement getDiscount()
function getDiscount() {
    
}

// Call getDiscount()
