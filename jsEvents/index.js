//Fresher Alternatives
const fast = document.querySelector(".first");
fast.onclick = function () {
  alert("Submission was successfully Completed!");
};

//The Best Option Way
var x = document.querySelector(".second");
chess = () => {
  alert("Thank you for Successfully Completing the Tasks");
};
x.addEventListener("click", chess);

//Option 2.
x.addEventListener("click", function () {
  alert("Thank you for Successfully Completing the Tasks");
});
x.addEventListener("mouseover", function () {
  x.style.backgroundColor = "maroon";
  x.style.color = "white";
  x.style.cursor = "pointer";
});

fast.addEventListener("mouseover", function () {
  fast.style.backgroundColor = "maroon";
  fast.style.color = "white";
  fast.style.cursor = "pointer";
});

const inp = document.querySelector("input");
inp.addEventListener("click", (event) => {
  console.log("Tried Inputting Values");
  console.log(event);
});

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event);
  console.log("Yor Data has been Sumitted Successfully");
});

//Events into Details.
let one = document.querySelector(".a");
let two = document.querySelector(".b");
let three = document.querySelector(".c");
let four = document.querySelector(".d");
let five = document.querySelector(".e");
let six = document.querySelector(".f");
let seven = document.querySelector(".g");
let eight = document.querySelector(".h");
let nine = document.querySelector(".i");
let ten = document.querySelector(".j");

/*-------------------ONE-------------------------*/
one.addEventListener("click", () => {
  console.log("You Clicked on the First Button");
  one.classList.toggle("k");
});
/*---------------------TWO-----------------------*/
two.addEventListener("contextmenu", () => {
  console.log("You Clicked on the Second Button");
  two.classList.toggle("k");
});
/*---------------------THREE-----------------------*/
three.addEventListener("dblclick", () => {
  console.log("You Clicked on the Three Button");
  three.classList.toggle("k");
  three.style.backgroundColor = "transparent";
});
/*----------------------FOUR----------------------*/
four.addEventListener("mousedown", () => {
  four.classList.toggle("k");
  four.style.backgroundColor = "transparent";
});
/*-----------------------FIVE---------------------*/
five.addEventListener("mouseenter", () => {
  five.style.backgroundColor = "transparent";
});
/*----------------------SIX----------------------*/
six.addEventListener("mouseenter", () => {
  six.style.backgroundColor = "black";
});
six.addEventListener("mousedown", () => {
  six.style.backgroundColor = "green";
  six.style.color = "white";
});
/*-----------------------SEVEN---------------------*/
seven.addEventListener("mousemove", () => {
  seven.style.backgroundColor = "green";
  seven.textContent = "Welcome to Button Seven Features";
});
/*-----------------------EIGHT---------------------*/
eight.addEventListener("mouseout", () => {
  eight.style.backgroundColor = "green";
  eight.style.color = "white";
});
/*------------------------NINE--------------------*/
nine.addEventListener("mouseover", () => {
  alert("Don't Touch me please!");
  nine.style.backgroundColor = "white";
  nine.style.color = "green";
});
/*-------------------------TEN-------------------*/
ten.addEventListener("mouseup", () => {
  alert("Be carefull");
  ten.style.backgroundColor = "white";
  ten.style.color = "green";
});

/*-------------------------KeyBoardevents-----------------------*/
