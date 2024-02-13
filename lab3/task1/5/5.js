//* Task1

function camelize(str) {
  return str
    .split('-') // разбивает 'my-long-word' на массив ['my', 'long', 'word']
    .map(
      // Переводит в верхний регистр первые буквы всех элементом массива за исключением первого
      // превращает ['my', 'long', 'word'] в ['my', 'Long', 'Word']
      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(''); // соединяет ['my', 'Long', 'Word'] в 'myLongWord'
}

//* Task2

function filterRange(arr, a, b) {
  // добавлены скобки вокруг выражения для улучшения читабельности
  return arr.filter(item => (a <= item && item <= b));
}


//* Task3

function filterRangeInPlace(arr, a, b) {

  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];

    // удалить, если за пределами интервала
    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }

}


//* Task4

let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a);

alert( arr );


//* Task5

function copySorted(arr) {
  return arr.slice().sort();
}


//* Task6

function Calculator() {

  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b
  };

  this.calculate = function(str) {

    let split = str.split(' '),
      a = +split[0],
      op = split[1],
      b = +split[2]

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[op](a, b);
  }

  this.addMethod = function(name, func) {
    this.methods[name] = func;
  };
}


//* Task7

    let john = { name: "John", age: 25 };
    let pete = { name: "Pete", age: 30 };
    let mary = { name: "Mary", age: 28 };
    
    let users = [ john, pete, mary ];
    
    let names = users.map(item => item.name);
    
    alert( names ); // John, Pete, Mary
    
    
    //* Task8
    
    let john = { name: "John", surname: "Smith", id: 1 };
    let pete = { name: "Pete", surname: "Hunt", id: 2 };
    let mary = { name: "Mary", surname: "Key", id: 3 };
    
    let users = [ john, pete, mary ];
    
    let usersMapped = users.map(user => ({
        fullName: `${user.name} ${user.surname}`,
        id: user.id
    }));
    

/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

alert( usersMapped[0].id ); // 1
alert( usersMapped[0].fullName ); // John Smith


//* Task9

function sortByAge(arr) {
  arr.sort((a, b) => a.age - b.age);
}


//* Task10

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}


//* Task11

function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}


//* Task12

function unique(arr) {
  let result = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  return result;
}


//* Task13

function groupById(array) {
  return array.reduce((obj, value) => {
    obj[value.id] = value;
    return obj;
  }, {})
}