
// Task 1: Create an Inventory Array of Product Objects

const inventory = [
    { name: "Latte", price: 4.50, quantity: 120 },
    { name: "Cappuccino", price: 5, quantity: 90 },
    { name: "Frappuccino", price: 2.79, quantity: 86 },
    { name: "Cold Brew", price: 3.69, quantity: 75 },
];

console.log(inventory);


// Task 2: Create an array of Order Objects

let orders = []; //Initialized Empty Array


// Task 3: Create a Function to Place an Order

function placeOrder(customerName, orderedItems) {
    let Errorfound = false; // Identity which orders cannot be made due to insufficient stock 

    orderedItems.forEach(item => {
        let product = inventory.find(product => product.name === item.name);
        if (!product || item.quantity > product.quantity) {
            console.log(`ERROR: ${item.name} has insufficient stock`);
            Errorfound = true; // Insufffient Stock displays error
        } else {
            product.quantity -= item.quantity // Deduct quantity
        }
    });

    if (!Errorfound) {
        const recentOrder = {
            customerName,
            items: orderedItems,
            status: 'Pending'
        }; // If Sufficient Stock Dislay this message

        orders.push(recentOrder); // Push object at the last position
        console.log(`Order was placed for ${customerName}`);
    };
};


// Task 4: Create a Function to Calculate Total for an Order

function calculateOrderTotal(order) {
    return order.items.reduce((sum, item) => {
        const product = inventory.find(product => product.name === item.name);
        return sum + (product.price * item.quantity)
    }, 0)
};

placeOrder("Dayanna", [{ name: "Latte", quantity: 2 }, { name: "Cold Brew", quantity: 1 }]); //Sample Order

if (orders.length > 0) {
    const ordertotal = calculateOrderTotal(orders[orders.length - 1]); // Defines the Function
    console.log(`Dayanna's order total is $${ordertotal.toFixed(2)}`); // Message of order total
};

// Task 5: Create a Function to Mark an Oder as Completed

function completeOrder(customerName) {
    const order = orders.find(order => order.customerName === customerName);
    if (!order) {
        console.log(`ERROR: ${customerName}'s order not found`); // If the order is not found, error message will display
    } else {
        order.status = 'Complete';
        console.log(`${customerName}'s order has been completed.`);
    }
};

completeOrder("Tamara", [{ name: "Frappuccino", quantity: 3 }, { name: "Latte", quantity: 1 }]); // Order is not found
completeOrder("Dayanna", [{ name: "Latte", quantity: 2 }, { name: "Cold Brew", quantity: 1 }]); // Order has been completed

// Task 6: Create a Function to Check Pending Orders

function checkPendingOrders() {
    let hasPendingOrders = false; //Indication that tracks pending orders

    orders.forEach(order => {
        if (order.status === 'Pending') {
            hasPendingOrders = true; //If pending orders are found
            console.log(`Order Pending for ${order.cutomerName}`);
        } 
    });
        if (!hasPendingOrders) {
            console.log("No pending orders found.");
        }
}

console.log(checkPendingOrders())






