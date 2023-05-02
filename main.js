// // Домашка: "Delivery"
// // Ви пропонуєте користувачу список доступних ресторанів для замовлення їжі.
// // Користувач обирає конкретний ресторан і отримує список доступних пунктів в меню для замовлення із вказанням їх вартості.
// // Користувач обирає своє замовлення, після чого має отримати його підтвердження та основну інформацію:
// // "що замовив, вартість та час доставки".

// const restaurants = [
//   {
//     order: [],
//     brand: "KFC",
//     menu: {
//       chicken: 50,
//       burger: 50,
//     },
//     deliveryTime: 60,
//   },
//   {
//     order: [],
//     brand: "mcDonalds",
//     menu: {
//       cola: 25,
//       burger: 30,
//     },
//     deliveryTime: 30,
//   },
//   {
//     order: [],
//     brand: "Burger King",
//     menu: {
//       burgerXXL: 170,
//       burger: 70,
//     },
//     deliveryTime: 20,
//   },
//   {
//     order: [],
//     brand: "фівфівфів",
//     menu: {
//       burgerXXL: 170,
//       burger: 70,
//     },
//     deliveryTime: 20,
//   },
// ];

// const services = {
//   showMenu() {
//     const chosenMenu = this.getMenu();
//     console.log("МЕНЮ:");
//     for (const key in chosenMenu) {
//       console.log(`${key} --------- ${chosenMenu[key]} грн`);
//     }
//     this.addOrder()
//   },
//   getRestourant() {
//     return restaurants.find(el => el.brand === torpedaDelivery.chosenRestaurant)
//   },
//   getMenu() {
//     return this.getRestourant().menu;
//   },
//   addOrder() {
//     const order = prompt('Виберіть страву');
//     // let total = 0;
//     let hasMenuOrder = Object.keys(this.getMenu()).some(el => el === order);
//     if (order === null) {
//       this.confirmOrder();
//     } else if(hasMenuOrder) {
//       torpedaDelivery.order.push(order);
//       torpedaDelivery.total += this.getMenu()[order];
//       this.addOrder();
//     } else {
//       alert('На жаль такого в нашому меню ще немає');
//       this.addOrder();
//     }
//   },
//   confirmOrder() {
//     if (torpedaDelivery.order.length === 0) {
//         alert('Ви нічого не замовили! Почніть знову...');
//         console.clear();
//         torpedaDelivery.chooseRestaurant();
//     } else {
//       let conf = confirm(`Ваше замовлення складається з ${torpedaDelivery.order.join(", ")} на суму ${torpedaDelivery.total} грн. Все правильно?`)
//       if (conf) {
//         const time = this.getRestourant().deliveryTime;
//         alert(`Чекайте на замовлення через ${time} хвилин`);
//         this.getRestourant().order.push(torpedaDelivery.order);
//         console.table(restaurants);
//         torpedaDelivery.order = [];
//         torpedaDelivery.total = 0;
//         torpedaDelivery.chooseRestaurant();
//       } else {
//         alert("Почніть, будь ласка, спочатку");
//         console.clear();
//         torpedaDelivery.order = [];
//         torpedaDelivery.total = 0;
//         torpedaDelivery.chooseRestaurant();
//       }
//     }
//   },
// };

// const torpedaDelivery = {
//   order: [],
//   total: 0,
//   chosenRestaurant: "",
//   getAvailableRestaurants() {
//     return restaurants.map(el => el.brand)
//   },
//   chooseRestaurant() {
//     const brands = this.getAvailableRestaurants();
//     this.chosenRestaurant = prompt(`Виберіть ресторан: ${brands.join(", ")}`);
//     const hasBrandChosenRestourant = brands.some(el => el === this.chosenRestaurant)
//     if (this.chosenRestaurant === "" || this.chosenRestaurant === null) {
//       alert("Ви не вибрали ресторан! Перезавантажте сторінку")
//       return
//     } else if (hasBrandChosenRestourant) {
//       services.showMenu();
//     } else {
//       alert ("З цим рестораном ми, поки що, не працюємо");
//       this.chooseRestaurant();
//     }
//   },
//   chooseDishes() {},
// };

// torpedaDelivery.chooseRestaurant();

// function sameCase(a, b){
//   let isNullA = a.match(/[a-z]/i);
//   let isNullB = b.match(/[a-z]/i);
//   if (isNullA !== null) {
//     isNullA = isNullA[0]
//   }
//   if (isNullB !== null) {
//     isNullB = isNullB[0]
//   }
//   if (isNullA === a && isNullB === b) {
//     if (a.toUpperCase() === a) {
//       if(b.toUpperCase() === b) {
//         return 1;
//       }
//       return 0;
//     }
//     if(b.toUpperCase() === b) {
//       return 0;
//     }
//     return 1;
//   } return -1;
// //   return 0;
// }

// console.log(sameCase("a", "B"));
// console.log(sameCase("A", "b"));
// console.log(sameCase("a", "b"));
// console.log(sameCase("A", "A"));
// console.log(sameCase("#", "B"));
// console.log(sameCase("a", "?"));

// function XO(str) {
//code here
// const xCount = str.toLowerCase().split("").filter(el => el === "x")
// const oCount = str.toLowerCase().split("").filter(el => el === "o")
// console.log(xCount);
// console.log(oCount);
// if (xCount.length === oCount.length) {
//   return true;
// }
// return false
// }
// XO("xxxXsdooOO");

// function printerError(s) {
//   // your code
//   let colors = /[a-m]/;
//   let errorArray = s.split("").filter(el => !colors.test(el));
//   return `${errorArray.length}/${s.length}`
// }
// console.log(printerError("aaabbbbhaijjjm")); // 0/14
// console.log(printerError("aaaxbbbbyyhwawiwjjjwwm")); // 8/22

// const printerError = s => `${s.replace(/[a-m]/gi, "").length}/${s.length}`;

// function getMiddle(s)
// {
//   //Code goes here!

//   if (s.length % 2 === 0) {
//     return s.slice(s.length / 2 - 1, s.length / 2 + 1)
//   }
//   return s.slice(s.length / 2 - 0.5, s.length / 2 + 0.5)
// }

// console.log(getMiddle("test")) // should return "es"

// console.log(getMiddle("testing")) // should return "t"

// console.log(getMiddle("middle")) // should return "dd"

// console.log(getMiddle("A")) // should return "A"

// const productName = "Repair droid";

// // Напиши ф-цію positiveSum, яка приймає масив чисел та повертає їх суму.
// // Але рахуватись мають лише позитивні числа!!!

// const positiveSum = (arr) =>
//   arr.reduce((total, el) => el > 0 ? total += el : 0, 0)

// console.log(positiveSum([2, 4, 6, 8])); // 20
// console.log(positiveSum([0, -3, 5, 7])); // 12

// Напиши функції, які сортують обєкти по збільшеню та зменшеню score

// const users = [
//   { name: "Victor", score: 20 },
//   { name: "Mario", score: 10 },
//   { name: "Tatiana", score: 30 },
// ];

// const usersSortedByScoreAsc = (users) => [...users.sort((a, b) => a.score - b.score)];
// const usersSortedByScoreDesc = (users) => [...users.sort((a, b) => b.score - a.score)];

// // function usersSortedByScoreDesc (users) {
// //   const a = [...users]
// //   return a.sort((a, b) => b.score - a.score)
// // }

// console.log(usersSortedByScoreAsc(users));  // [{name: "Mario", score: 10}, {name: "Victor", score: 20}, {name: "Tatiana", score: 30}]
// console.log(usersSortedByScoreDesc(users));   // [{name: "Tatiana", score: 30}, {name: "Victor", score: 20}, {name: "Mario", score: 10}]

const startBtn = document.querySelector(".js-start");
const stopBtn = document.querySelector(".js-stop");
let timerId = null;

startBtn.addEventListener("click", () => {
  timerId = setInterval(() => {
    console.log(`I love async JS!  ${Math.random()}`);
  }, 1000);
});

stopBtn.addEventListener("click", () => {
  clearInterval(timerId);
  console.log(`Interval with id ${timerId} has stopped!`);
});

// Перевірка змін після пушу з вс код!!!
