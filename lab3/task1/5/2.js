//* Task1

let a = +prompt("Введите первое число", "");
let b = +prompt("Введите второе число", "");

alert( a + b );


//* Task2

alert( Math.round(6.35 * 10) / 10 );


//* Task3

function readNumber() {
  let num;

  do {
    num = prompt("Введите число", 0);
  } while ( !isFinite(num) );

  if (num === null || num === '') return null;

  return +num;
}

alert(`Число: ${readNumber()}`);


//* Task4

let i = 0;
while (i != 10) { // use i < 10
  i += 0.2;
}


//* Task5

function random(min, max) {
  return min + Math.random() * (max - min);
}


//* Task6

function randomInteger(min, max) {
  // rand num till (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}