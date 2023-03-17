"use strict";

// Замовлення турів:
// Пишемо реєстрацію користувача за допомогою prompt.  Окремо логін та пароль. Валідацію не потрібно робити.
// Аналогічно пишемо логінізацію: запитуємо логін та пароль, порівнюємо їх з даними, які були введені при реєстрації. 
// Якщо все вірно - виводимо в консоль, що логін успішний. Якщо ні - знову запитуємо логін та пароль.
// Запитуємо максимальну суму, яку готовий витратити користувач на тур.
// Виводимо список усіх країн в alert, які доступні по сумі для користувача.
// Вказуємо країну через prompt  і купляємо тур.
// Виводимо повідомлення, що тур оплачений і залишок на рахунку користувача.
const countries = [
  "Ukraine",
  "Poland",
  "Croatia",
  "Montenegro",
  "France",
  "USA",
];

const countriesPrice = [100, 200, 300, 400, 500, 600];

let userName = prompt("ПРИДУМАЙТЕ ЛОГІН: ");
let userPassword = prompt("ПРИДУМАЙТЕ ПАРОЛЬ: ");
let nameIn = "";
let passwordIn = "";
const countriesForYou = [];
do {
  nameIn = prompt("ВВЕДІТЬ СВІЙ ЛОГІН: ");
  passwordIn = prompt("ВВЕДІТЬ СВІЙ ПАРОЛЬ: ");
} while (nameIn !== userName || passwordIn !== userPassword);
console.log("Ласкаво просимо!");
let money = prompt("НА ЯКУ СУМУ ВИ РОЗРАХОВУЄТЕ? :");
for (const iterator in countriesPrice) {
  if (money >= countriesPrice[iterator]) {
    countriesForYou.push(countries[iterator]);
  }
};
alert(`Ви можете поїхати в: ${countriesForYou.join(", ")}!`);
let choise = prompt("В ЯКУ КРАЇНУ ВИ ХОЧЕТЕ ВІДПРАВИТИСЬ? :");
alert(`Тур сплачено! Збирайте речі до ${choise}! На вашому рахунку залишилось ${money - countriesPrice[countries.indexOf(choise)]} $`);