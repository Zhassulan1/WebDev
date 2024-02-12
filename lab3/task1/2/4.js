let message;

message = 'Hello'; // store the string 'Hello' in the variable named message


alert(message); // shows the variable content

// let message = 'Hello!'; // define the variable and assign the value

// let user = 'John', age = 25;


// let user = 'John';
// let age = 25;



message = 'Hello!';

message = 'World!'; // value changed

alert(message);


let hello = 'Hello world!';

// copy 'Hello world' from hello into message
message = hello;


// now two variables hold the same data
alert(hello); // Hello world!
alert(message); // Hello world!

let имя = '...';
let 我 = '...';


// note: no "use strict" in this example
num = 5; // the variable "num" is created if it didn't exist
alert(num); // 5


"use strict";
num = 5; // error: num is not defined


const myBirthday = '18.04.1982';
myBirthday = '01.01.2001'; // error, can't reassign the constant!


const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ...when we need to pick a color
let color = COLOR_ORANGE;
alert(color); // #FF7F00


const pageLoadTime = /* time taken by a webpage to load */1;


// TASKS

// Task1
let admin, name;
name = "John";
admin = name;
alert(admin);

// Task2
let planetEarth;
let currentUser;

// Task3

const BIRTHDAY = '18.04.1982'; // make birthday uppercase?

let age = someCode(BIRTHDAY); // make age uppercase?
