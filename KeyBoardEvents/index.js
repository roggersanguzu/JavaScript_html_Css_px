var x = document.querySelector("input");
x.addEventListener("keypress", () => {
  console.log("You have pressed a Key");
  console.log(x.value);
});

x.addEventListener("keydown", () => {
  console.log("You have clicked me");
});

/*-----------------Full Key Details-----------*/
x.addEventListener("keypress", (e) => {
  console.log(e.charCode);
});

x.addEventListener("keypress", (e) => {
  console.log(e.code);
});

/*-----------------Ctrl Key---------------*/
x.addEventListener("keypress", (e) => {
  console.log(e.ctrlKey);
});
