let firstLi = document.querySelector("li");
console.log(firstLi);
console.log(firstLi.parentElement);
console.log(firstLi.parentElement.parentElement);
console.log(firstLi.parentElement.parentElement.parentElement);
firstLi.classList.add("x");

//Children
let chilDren = document.querySelector("ul");
console.log(chilDren.children);
console.log(chilDren.children[0]);
console.log(chilDren.children[1]);
console.log(chilDren.children[2]);
console.log(chilDren.children[3].innerText);
console.log(chilDren.children[4].innerHTML);

//Siblings
console.log(firstLi.nextElementSibling);
console.log(firstLi.nextElementSibling.nextElementSibling);
console.log(firstLi.nextElementSibling.nextElementSibling.nextElementSibling);
console.log(firstLi.nextElementSibling.innerHTML);
console.log(firstLi.nextElementSibling.textContent);

//Previous  Element Sibling.
let Fourth = document.querySelector(".fourth");
console.log(Fourth.previousElementSibling);
console.log(Fourth.previousElementSibling.previousElementSibling);
console.log(
  Fourth.previousElementSibling.previousElementSibling.previousElementSibling
);
