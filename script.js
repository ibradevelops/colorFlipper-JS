const btn = document.querySelector("button");
const body = document.querySelector("body");
const text = document.querySelector("h1");
const colorName = document.querySelector("h2");
const colors = [
  "red",
  "orange",
  "yellow",
  "purple",
  "blue",
  "green",
  "brown",
  "pink",
  "black",
];
const ifIsBlack = () => {
  colorName.style.color = "white";
  text.style.color = "white";
  btn.style.color = "white";
  btn.style.border = ".3rem solid white";
};
const ifIsNoBlack = () => {
  colorName.style.color = "black";
  text.style.color = "black";
  btn.style.color = "black";
  btn.style.border = ".3rem solid black";
};

const changeColor = function () {
  const randomNumber = Math.trunc(Math.random() * colors.length);
  const color = colors[randomNumber];
  switch (color) {
    case "red":
      body.style.backgroundColor = "red";
      colorName.textContent = "Red 🔴";
      break;
    case "orange":
      body.style.backgroundColor = "orange";
      colorName.textContent = "Orange 🟠";

      break;
    case "yellow":
      body.style.backgroundColor = "yellow";
      colorName.textContent = "Yellow 🟡";
      ifIsNoBlack();

      break;
    case "purple":
      body.style.backgroundColor = "purple";
      colorName.textContent = "Purple 🟣";
      ifIsBlack();

      break;
    case "blue":
      body.style.backgroundColor = "blue";
      colorName.textContent = "Blue 🔵";
      ifIsBlack();

      break;
    case "green":
      body.style.backgroundColor = "green";
      colorName.textContent = "Green 🟢";
      ifIsBlack();

      break;
    case "brown":
      body.style.backgroundColor = "brown";
      colorName.textContent = "Brown 🟤";
      ifIsBlack();

      break;
    case "pink":
      body.style.backgroundColor = "pink";
      colorName.textContent = "Pink 🎀";
      ifIsNoBlack();
      break;
    case "black":
      body.style.backgroundColor = "black";
      colorName.textContent = "Black ⚫";
      ifIsBlack();
      break;
  }
};

btn.addEventListener("click", changeColor);
