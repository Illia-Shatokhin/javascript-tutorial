"use strict";

// function includes(array, value) {
//   // Change code below this line
//   for (let index = 0; index < array.length; index++) {
//     if (array[index] === value) {
//       return console.log(true);
//     }
//   }
//   return console.log(false);
//   // Change code above this line
// }


// includes([1, 2, 3, 4, 5], 6);

// Напиши скрипт, який переведе значення totalMinutes (кількість хвилин) в рядок у форматі годин та хвилин HH:MM.

// 70 покаже 01:10
// 450 покаже 07:30
// 1441 покаже 24:01
// const totalMinutes = 1441;

// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;
// console.log(hours);
// console.log(minutes);

// console.log(`${hours}:${minutes}`)

// const doubleDigitHours = String(hours).padStart(2, 0);
// const doubleDigitMinutes = String(minutes).padStart(2, 0);
// console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);

// Напиши цикл for, який виводить у консоль браузера числа за зростанням від min до max, але тільки якщо число кратне 5.

// const max = 100;
// const min = 10;

// for (let i = min; i <= max; i += 1) {
//   if (i % 5 === 0) {
//   console.log(i);
//   }
// }

// Напиши скрипт, який питатиме логін за допомогою prompt та логувати результат у консоль браузера.

// Якщо відвідувач вводить "Адмін", то prompt запитує пароль
// Якщо нічого не введено або натиснуто клавішу Esc - вивести рядок "Скасовано"
// В іншому випадку вивести рядок "Я вас не знаю"
// Пароль перевіряти так:

// Якщо введено пароль "Я адмін", то вивести рядок "Здрастуйте!"
// Інакше виводити рядок "Невірний пароль"

// const value = prompt("Введіть логін");
// let password;
// if (value === "Адмін") {
//   const password = prompt("Введіть пароль");
//   if (password === "Я адмін") {
//     console.log("Здравствуйте");
//   } else {
//     console.log("Невірний пароль");
//   }
// } else if (value === null || "") {
//   console.log("Скасовано");
// } else {
//   console.log("Я вас не знаю");
// }