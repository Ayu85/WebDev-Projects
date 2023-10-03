const length = document.querySelector("#length_selector");
const showLen = document.querySelector("#length_value");
const strengthColor = document.getElementById("strength_indicator");
const btn = document.getElementById("generate_btn");
const upper = document.getElementById("uppercase");
const lower = document.getElementById("lowercase");
const number = document.getElementById("number");
const symbol = document.getElementById("symbol");
const output = document.getElementById("show_pass");
let password_length = 0;
console.dir(length);
const symbols = `"~!,./';[]=-@#$%^&*()_+<>?":{}|/*-+`;

function handleSlider() {
  console.log(length.value);
  password_length = length.value;
  showLen.innerHTML = password_length;
}
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
function getRandomNumber() {
  return getRandomInt(0, 9);
}
function getRandomLower() {
  return String.fromCharCode(getRandomInt(97, 123));
}
function getRandomUpper() {
  return String.fromCharCode(getRandomInt(65, 91));
}
function getRandomSymbol() {
  return symbols[getRandomInt(0, symbols.length)];
}
console.log(getRandomSymbol());
btn.addEventListener("click", () => {
  let finalPassword = "";
  for (let i = 0; i < Math.ceil(password_length / 4); i++) {
    let a = getRandomNumber();
    let b = getRandomLower();
    let c = getRandomSymbol();
    let d = getRandomUpper();
    finalPassword += a + b + c + d;
  }
  output.innerText = finalPassword.substring(0, password_length);
  if (password_length > 5) {
    strengthColor.style.background = "green";
    strengthColor.style.boxShadow = "  2px 2px 10px 8px green";
  } else {
    strengthColor.style.background = "red";
    strengthColor.style.boxShadow = "  2px 2px 10px 8px red";
  }
});
