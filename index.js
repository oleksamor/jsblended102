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
