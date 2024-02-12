//* Task1

if ("0") {
  alert( 'Hello' );
}
// Yes


//* Task2
let value = prompt('What is the "official" name of JavaScript?', '');

if (value == 'ECMAScript') {
    alert('Right!');
} else {
    alert("You don't know? ECMAScript!");
}

//* Task3
let num = prompt("Enter number", '');

if (num > 0) {
    alert(1);
} else if (num < 0) {
    alert(-1);
} else {
    alert(0)
}

//* Task4 
let result;

result = (a+b < 4) ? 'Below' : 'Over';


//* Task 5
let message;

message = (login == 'Employee') ? 'Hello' : (
    (login == 'Director') ? 'Greetings' : (
        (login == '') ? 'No login' : ''
    )
);