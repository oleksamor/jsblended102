/**
 *? Використовуючи функцію if...else,
 *? напишіть код, який запитуватиме:
 *? "Яка офіційна назва JavaScript?"
 *? Якщо користувач вводить "ECMAScript",
 *? то показати через alert: "Вірно!"
 *? інакше відобразити:"Не знаєте? ECMAScript!"
 */
// const message = prompt("Яка офіційна назва JavaScript?");
// if (message === "ECMAScript") {
//     alert("Вірно!");

// } else {
//     alert ("Не знаєте? ECMAScript!");
// }

/**
Напишіть програму, яка отримає від користувача
 число (кількість хвилин) та виведе в консоль
 рядок у форматі годин та хвилин
 https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
 70 === 01:10
 */

// const num = prompt("Enter number");
// const hours = String(Math.floor(num / 60)).padStart(2, 0);
// const minutes = String(num % 60).padStart(2, 0);

// console.log(`${hours}:${minutes}`);

/**
 *? Напишіть цикл, який виводить у консоль
 *? всі парні числа  від max до min  за спаданням
 */

// const max = 50;
// const min = 23;

// for (let i = max; i >= min; i -= 1) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

/**
 *? За кожен місяць податкова нараховує на ЗП розробника 5% від суми.
 *? Напишіть функцію, у яку користувач вводить суму зп
 *? і кількість місяців за допомогою prompt() не забуваємо, що prompt повертає рядок.
 *? Для обчислення суми з урахуванням відсотків використовуйте цикл for.
 */

// function culcSalery() {
//   const salary = Number(prompt('enter salery'));
//   const manth = Number(prompt('Enter number of manth'));

//   return salary * manth * 0.95;
// }

// console.log(culcSalery());

// /**
//  *? При завантаженні сторінки користувачеві пропонується
//  *? в prompt ввести число. Введення додається до значення
//  *? змінної total.
//  *? Операція введення числа триває до того часу,
//  *? поки користувач не натисне кнопку Cancel у prompt.
//  *? Після того як користувач припинив введення, натиснувши на
//  *? кнопку Cancel, показати alert з рядком "Загальна сума введених чисел дорівнює [число]."

//  *! Робити перевірку, що користувач ввів саме число,
//  *! а не довільний набір символів не потрібно.
//  */

// let number = prompt('Enter number');
// let total = 0;

// do {
//   total += Number(number);
//   number = prompt('Enter number');
// } while (number !== null);

// alert(`Загальна сума введених чисел дорівнює ${total}.`);

/**
 *? У змінній min лежить число від 0 до 59.
 *? Визначте, в яку чверть години потрапляє
 *? це число (у першу, другу, третю чи четверту).
 */
/*
let min = 47;
if (min > 0 && min <= 15) {
  console.log("Перша чверть");
}
if (min > 15 && min <= 30) {
  console.log("Друга чверть");
}

if (min > 30 && min <= 45) {
  console.log("Третя чверть");
}
if (min > 45 && min <= 60) {
  console.log("Четверта чверть");
}

**/

/**
 *? Напиши скрипт для об'єкта user,
 *? послідовно:
 *? 1 додати поле mood зі значенням 'happy'
 *? 2 замінить hobby на 'skydiving'
 *? 3 замінить значення premium на false
 *? 4 виводить вміст об'єкта users у форматі
 *? ключ: значення використовуючи Object.keys() і for...of
 */

// const user = {
//   name: "John",
//   age: 20,
//   hobby: "tennis",
//   premium: true,
// };

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;

// const keys = Object.keys(user);

// for (const key of keys) {
//   console.log(`${key}: ${user[key]}`);

// }

// console.log(keys)

/* Напишіть функцію, яка приймає об'єкт і рахує загальну суму зарплат працівників. */

// const someObj = {
//     worker1: 360,
//     worker2: 750,
//     worker3: 240,
//   };
//   function salary(obj) {
//     let sum = 0;
//     const values = Object.values(obj);

//     for (const num of values) {
//         sum += num;
//     }
//     return sum;
//   }

// const total =  salary(someObj);
// console.log(total);
/*
 *? Напишіть ф-цію calcTotalPrice(someStones, stoneName),
 *? яка приймає масив об'єктів та
 *? рядок під назвою каменю.
 *? Функція рахує та повертає загальну вартість каменів
 *? з таким ім'ям, ціною та кількістю з об'єкта
 */

// const stones = [
//   { name: "Изумруд", price: 1300, quantity: 4 },
//   { name: "Бриллиант", price: 2700, quantity: 6 },
//   { name: "Сапфир", price: 400, quantity: 7 },
//   { name: "Щебень", price: 150, quantity: 100 },
// ];

// function calcTotalPrice(someStones, stoneName) {
//   for (let stone of someStones) {
//     if (stone.name === stoneName) {
//       return stone.price * stone.quantity;
//     }
//   }
//   return "None";
// }

// console.log(calcTotalPrice(stones, "asfasf"));

// *? Напишіть функцію, яка приймає массив об'єктів і повертає новий массив

// *? Зробіть знижку 20 % на всі фрукти у масиві

// *? Надайте ід для кожного продукту

// */

// const fruits = [
//   { name: "apple", price: 200 },
//   { name: "orange", price: 300 },
//   { name: "grapes", price: 750 },
// ];

// function updFruits(array) {
//   const newArray = [];
//   let id = 1;
//   for (let fruit of array) {
//     fruit.price *= 0.8;

//     fruit.id = id;
//     id += 1;
//     newArray.push(fruit);
//   }

//   return newArray;
// }

// console.log(updFruits(fruits));
// console.log(fruits);

// напиши код який із массиву arr видаляє елемент foo.
// розвертає цей массив
// і повертає рядок js is the best
// вхідний массив не має змінюватись (мутується)

const arr = ["best", "the", "foo", "is", "js"];
// const copyArr = [...arr];
// const index = copyArr.indexOf("kra");
// if (index === -1) return;
// const res = copyArr.splice(index, 1);

// copyArr.reverse();
// const string = copyArr.join(" ");
// console.log(string);
// console.log(arr);

const string = arr
    .slice(0, arr.indexOf("foo"))
    .concat(arr.slice(arr.indexOf("foo") + 1, arr.length))
    .reverse()
    .join(" ");

console.log(string);
