// Домашка: "Delivery"
// Ви пропонуєте користувачу список доступних ресторанів для замовлення їжі.
// Користувач обирає конкретний ресторан і отримує список доступних пунктів в меню для замовлення із вказанням їх вартості.
// Користувач обирає своє замовлення, після чого має отримати його підтвердження та основну інформацію: 
// "що замовив, вартість та час доставки".

const restaurants = [
  {
    order: [],
    brand: "KFC",
    menu: {
      chicken: 50,
      burger: 50,
    },
    deliveryTime: 60,
  },
  {
    order: [],
    brand: "mcDonalds",
    menu: {
      cola: 25,
      burger: 30,
    },
    deliveryTime: 30,
  },
  {
    order: [],
    brand: "Burger King",
    menu: {
      burgerXXL: 170,
      burger: 70,
    },
    deliveryTime: 20,
  },
];

const services = {
  showMenu() {
    const chosenMenu = this.getMenu();
    console.log("МЕНЮ:");
    for (const key in chosenMenu) {
      console.log(`${key} --------- ${chosenMenu[key]} грн`);
    }
    this.addOrder()
  },
  getRestourant() {
    return restaurants.find(el => el.brand === torpedaDelivery.chosenRestaurant)
  },
  getMenu() {
    return this.getRestourant().menu;
  },
  addOrder() {
    const order = prompt('Виберіть страву');
    let total = 0;
    if (order === null) {
      this.confirmOrder();
    }
    else {
      torpedaDelivery.order.push(order);
      torpedaDelivery.total += this.getMenu()[order];
      this.addOrder();
    }
  },
  confirmOrder() {
    if (torpedaDelivery.order.length === 0) {
        alert('Ви нічого не замовили! Почніть знову...');
        torpedaDelivery.chooseRestaurant();
    } else {
        const time = this.getRestourant().deliveryTime;
        alert(`Ваше замовлення складається з ${torpedaDelivery.order.join(", ")} на суму ${torpedaDelivery.total} грн. Чекайте на замовлення через ${time} хвилин`);
        this.getRestourant().order.push(torpedaDelivery.order);
        console.table(restaurants);
        torpedaDelivery.order = [];
        torpedaDelivery.chooseRestaurant();
    }
  },
};

const torpedaDelivery = {
  order: [],
  total: 0,
  chosenRestaurant: "",
  getAvailableRestaurants() {
    return restaurants.map(el => el.brand)
  },
  chooseRestaurant() {
    const brands = this.getAvailableRestaurants();
    this.chosenRestaurant = prompt(`Виберіть ресторан: ${brands.join(", ")}`);
    if (this.chosenRestaurant === "" || this.chosenRestaurant === null) {
      alert("Ви не вибрали ресторан! Перезавантажте сторінку")
    }
    services.showMenu();
  },
  chooseDishes() {},
};

torpedaDelivery.chooseRestaurant();