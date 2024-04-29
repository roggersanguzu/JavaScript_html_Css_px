//Comparison Opearators.
p = 90 > 4;
if (p === true) {
  console.log("The answer is true");
}
//Challenge
let a = 10;
let b = 70;
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);
console.log(a === b);
console.log(a != b);

//Reminders
console.log("Welcome to the JavaScript Class!");
alert("Thanks for visiting the fullstack site");
console.log({ name: "Rogers" });
console.log({ sex: "Female" });

let x = "mathematics";
console.log(`I love ${x}`);

//Numbers.
let c = 0.89;
let y = 90;
let z = 10;
console.log(`The answer o f ${y} and ${z} is ${y + z}`);
console.log(typeof x);
console.log(typeof y);
console.log(typeof c);

let k = 10;
k--;
k++;
k++;
console.log(k);

console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 / 2);
console.log(2 % 2);
console.log(2 ** 2);

let firstFavNum = 7;
let secFavNum = 3;
console.log(`${firstFavNum} - ${secFavNum} = ${firstFavNum + secFavNum}`);
console.log(`${firstFavNum} + ${secFavNum} = ${firstFavNum - secFavNum}`);
console.log(`${firstFavNum} * ${secFavNum} = ${firstFavNum * secFavNum}`);
parseFloat(
  console.log(`${firstFavNum} * ${secFavNum} = ${firstFavNum / secFavNum}`)
);
console.log(`${firstFavNum} % ${secFavNum} = ${firstFavNum % secFavNum}`);

console.log(firstFavNum ** 3);

//Booleans.
let isTrue = false;
console.log(isTrue);
//False variables in JavaScript
/*
->null
->undefined
->-0
NaN
*/
let notDefine = undefined;
console.log(notDefine);

let namone = "chess ";
let nameTwo = "man";

let fullName = namone + nameTwo;
console.log(fullName);

//Option2.
let fulName = namone.concat(nameTwo);
console.log(fulName);

console.log(fulName.length);
console.log(fulName.toLowerCase());
console.log(fulName.toUpperCase());

console.log(fulName.includes("x"));
if (fulName.includes("Z")) {
  console.log("There is a Z");
} else {
  console.log("There is Nothing like a Z");
}
console.log(fulName.trim());

let mik = `I really Like JavaScript 
  Do you love JavaScript too.
`;
console.log(mik.trim());

let j = "Scot";
let f = " Adkins";
console.log(j.concat(f));
console.log(j.concat(f).toLowerCase());
console.log(j.concat(f).toUpperCase());
console.log(
  `My Fovourite actor is ${j.concat(f).toUpperCase()} and he is cool`
);

var n = prompt("Please Enter your name");
console.log(`Your name is ${n.trim()}`);
console.log(
  `Dear ${n
    .trim()
    .toUpperCase()}, thanks for Visiting Our Website!. We Expect to See you again later`
);

let d = 89;
console.log(d);
d = d.toString();
console.log(d);
