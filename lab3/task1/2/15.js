//* Task1

function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Did parents allow you?');
} // no


//* Task2

function checkAge(age) {
  return (age > 18) || confirm('Did parents allow you?');
}

//* Task3

function min(a, b) {
  return a < b ? a : b;
}

//* Task4

function pow(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if (n < 1) {
  alert(`Power ${n} is not supported, use a positive integer`);
} else {
  alert( pow(x, n) );
}