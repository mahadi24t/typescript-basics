type Pizza = {
    id: number,
    name: string,
    price: number
}

type Order = {
    id: number,
    pizza: Pizza,
    status: "ordered" | "completed"
}
let nextPizzaId = 1
const menu: Pizza[] = [
    { id: nextPizzaId++, name: "Margherita", price: 8 },
    { id: nextPizzaId++, name: "Pepperoni", price: 10 },
    { id: nextPizzaId++, name: "Hawaiian", price: 10 },
    { id: nextPizzaId++, name: "Veggie", price: 9 },
]

let cashInRegister = 100
let nextOrderId = 1
const orderQueue: Order[] = []


function addNewPizza(pizzaObj: Pizza):void {
    nextPizzaId++
    pizzaObj.id = nextPizzaId
    menu.push(pizzaObj)
}

function placeOrder(pizzaName: string) : Order | undefined {
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName)
    if (!selectedPizza) {
        console.error(`${pizzaName} does not exist in the menu`)
        return
    }
    cashInRegister += selectedPizza.price
    const newOrder:Order = { id: nextOrderId++, pizza: selectedPizza, status: "ordered" }
    orderQueue.push(newOrder)
    return newOrder
}

function completeOrder(orderId: number):Order | undefined {
    const order = orderQueue.find(order => order.id === orderId)
    if (!order) {
        console.error(`Order with ID ${orderId} not found`)
        return
    }
    order.status = "completed"
    return order
}
export function getPizzaDetail(identifier: number | string): Pizza | undefined {
    if(typeof identifier === "string"){
        return menu.find(pizza => pizza.name.toLocaleLowerCase() === identifier.toLocaleLowerCase())
    }
    else{
        return menu.find(pizza => pizza.id === identifier)
    }
}

/**
 * Challenge: add types our generic `addToArray` function. It should work
 * for adding new pizzas to the `menu` and adding new orders to the `orderQueue`
 */

function addToArray <T>(array:T[], item:T): T[] {
    array.push(item)
    return array
}

// example usage:
addToArray(menu, {id: nextPizzaId++, name: "Chicken Bacon Ranch", price: 12 })
addToArray<Order>(orderQueue, { id: nextOrderId++, pizza: menu[2], status: "completed" })

console.log(menu)
console.log(orderQueue)

// addNewPizza({ name: "Chicken Bacon Ranch", price: 12 })
// addNewPizza({ name: "BBQ Chicken", price: 12 })
// addNewPizza({ name: "Spicy Sausage", price: 12 })
// placeOrder("Chicken Bacon Ranch")// completeOrder(1)

// console.log("Menu:", menu)
// console.log("Cash in register:", cashInRegister)
// console.log("Order queue:", orderQueue)