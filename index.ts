interface Pizza {
    name: string;
    price: number;
}

interface Order {
    id: number;
    pizza: Pizza;
    status: "ordered" | "completed";
}

export {};

const menu: Pizza[] = [
    {name: "Margherita Pizza", price: 8.99},
    {name: "Pepperoni Pizza", price: 9.99},
    {name: "Veggie Pizza", price: 10.99},
    {name: "BBQ Chicken Pizza", price: 11.99},
    {name: "Hawaiian Pizza", price: 12.99}
];

let cashInRegister = 100;
const orderQueue: Order[] = [];
let nextOrderId = 1;

function addNewPizza(pizzaObj: Pizza): void {
    menu.push(pizzaObj);
}

function placeOrder(pizzaName: string): Order | undefined {
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName);
    if (!selectedPizza) {
        console.log(`Pizza "${pizzaName}" not found on menu`);
        return undefined;
    }
    cashInRegister += selectedPizza.price;
    const newOrder: Order = {id: nextOrderId++, pizza: selectedPizza, status: "ordered"};
    orderQueue.push(newOrder);
    return newOrder;
}

function completeOrder(orderId: number): Order | undefined {
    const order = orderQueue.find(order => order.id === orderId);
    if (order) {
        order.status = "completed";
    }
    return order;
}

addNewPizza({name: "Meat Lovers Pizza", price: 13.99});
addNewPizza({name: "Buffalo Chicken Pizza", price: 14.99});
addNewPizza({name: "Supreme Pizza", price: 15.99});

placeOrder("Meat Lovers Pizza");
completeOrder(1); // Pass number, not string

console.log("Menu:", menu);
console.log("Cash in Register:", cashInRegister);
console.log("Order Queue:", orderQueue);