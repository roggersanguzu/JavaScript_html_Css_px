//Creating Element*******************************
const x = document.createElement("h1");
console.log(x);
x.classList.add("greetings");
x.textContent = "Welcome to the Coders Platform ";
const y = document.body;

y.appendChild(x);

/*---------------------------------------------*/
const ul = document.querySelector("ul");
const newUl = document.createElement("li");
newUl.innerText = "New UL Platform";
ul.appendChild(newUl);
const firstLi = document.querySelector("li");
ul.insertBefore(newUl, firstLi); //(where,what)

/*Insert Adjuscent*/
const firstp = document.querySelector("p");
const i = document.createElement("i");
i.innerText = "I am  Programmer and a Chess Player at the Same Time  ";
i.style.color = "#F97300";
//firstp.insertAdjacentElement("beforebegin", i); //(Where,what)
//firstp.insertAdjacentElement("afterbegin", i); //(Where,what)
//firstp.insertAdjacentElement("afterend", i); //(Where,what)
firstp.insertAdjacentElement("beforeend", i); //(Where,what)

/*Append and Prepend*/
let sec = document.querySelector("section");
let k = document.createElement("j");
k.innerText = "I am the Queen on the board";
k.style.color = "#F97300";
//sec.append(k);
sec.prepend(k);
