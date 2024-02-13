//* Task1
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete"

delete user.name


//* Task2

function isEmpty(a) {
    for (let k in a) {
        return false;
    }
    return true;
}


//* Task3

const user = {
  name: "John"
};

// It will work
user.name = "Pete";


//* Task4

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}

alert(sum);


//* Task5

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == 'number') {
      obj[key] *= 2;
    }
  }
}