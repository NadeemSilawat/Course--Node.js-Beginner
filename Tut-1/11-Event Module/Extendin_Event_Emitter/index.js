
const PizzaShop = require('./pizza-shop');

const pizzaShop = new PizzaShop();

pizzaShop.on('order', (size, topping) => {
  console.log(`Order received! Banking a ${size} pizza with ${topping}`);
});

pizzaShop.order('large', 'mashroom');
pizzaShop.displayOrderNumber();

