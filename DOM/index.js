console.log(document.getElementsByTagName("h1"));
console.log(document.getElementsByTagName("h2"));
console.log(document.getElementById("miana"));
console.log(document.getElementsByClassName("clas"));
console.log(document.querySelector("h1"));
console.log(document.querySelector(".clas"));
console.log(document.querySelector("#id-1"));

const k = document.querySelector("p");
k.innerText = "Text Has been Changed";
k.innerHTML = "<strong>Welcome Chelsea</strong>";

const x = document.querySelector(".one");
console.log(x);

const y = document.querySelector(".two");
console.log(y);

const z = document.querySelector(".three");
console.log(z);
