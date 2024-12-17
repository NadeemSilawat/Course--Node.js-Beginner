
class PizzaShop {
  constructor() {
    this.orderNumber = 0;f
  }
  order() {
    this.orderNumber++;
    this.emit('order', size, topping);
  }

  displayOrderNumber() {
    console.log(`Current order number: ${this.orderNumber}`);
  }
}

console.log(PizzaShop)
