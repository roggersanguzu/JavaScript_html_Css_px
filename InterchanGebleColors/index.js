const buttons = document.getElementsByClassName("a");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    this.style.color = "black";
    this.style.backgroundColor = "red";
  });
}
