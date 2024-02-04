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
