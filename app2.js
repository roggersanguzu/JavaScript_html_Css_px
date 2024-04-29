//Functions.
function greet() {
  console.log("Hello Chicken!");
  console.log("Please Talking to you");
}
greet();

function sayMyname(nam) {
  console.log(`Say my Name: ${nam}`);
}
var z = prompt("Please Enter your Name for Reference:): ");
sayMyname(z.toUpperCase());

//Example 2. Numbers up to 10.
for (var i = 0; i <= 10; i++) {
  console.log(i);
}

//Odd Numbers Less than 100.

for (var i = 1; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

//Multiplication Table of 7.
for (var i = 1; i <= 12; i++) {
  console.log(7 * i);
}

console.log("Below is the List of the Items that we sell here.");
console.log("1.Mandazi\n2.Chapati\n3.Mandazi\n4.Chips and Chicken");
var number = parseInt(prompt(console.log("Please Enter your Choice Number.")));
switch (number) {
  case 1:
    console.log("Mandazi");
    break;
  case 2:
    console.log("Chapati");
    break;
  case 3:
    console.log("Mandazi");
    break;
  case 4:
    console.log("Chips and Chicken");
    break;
  default:
    console.log("Invalid Choice");
    break;
}

//Objects
const person = {
  name: "Rogers",
  sex: "Male",
  age: 30,
  height: 170,
  weight: 70,
  address: "Kampala",
  married: false,
};
console.log(person);

//Exercises
const car = {
  vehicleType: "corollary",
  model: "BMW",
  color: "black",
  year: 2020,
  mileage: 20000,
  engine: "diesel",
  transmission: "manual",
};
console.log(typeof car);
console.log(car);
vehicleType = "Toyota";
console.log(car[vehicleType]);

function s(calls) {
  var z = 10;
  s(z);
  console.log(z);
}

const Person = {
  nam: "Ranger",
  ag: 90,
  greet: function () {
    console.log(`Hello, my Name is ${this.nam} and aged ${this.ag}`);
  },
};

console.log(Person.greet());
