const length = document.querySelector("#length_selector");
const showLen = document.querySelector("#length_value");
const strengthColor = document.getElementById("strength_indicator");
const btn = document.getElementById("generate_btn");
const upper = document.getElementById("uppercase");
const lower = document.getElementById("lowercase");
const number = document.getElementById("numbers");
const symbol = document.getElementById("symbols");
const output = document.getElementById("show_pass");
const copyConfirmation = document.getElementById("passwordCopied");
const copy_btn = document.getElementById("copy_btn");
const allCheckBox = document.querySelectorAll(".checkbox");
let password_length = 0;
let final_passwor = "";
console.dir(length);
const symbols = `"~!,./';[]=-@#$%^&*()_+<>?":{}|/*-+`;

function handleSlider() {
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

function calcStrength() {
  let isUpper = false;
  let isLower = false;
  let isSymbol = false;
  let isNumber = false;

  if (upper.checked) isUpper = true;
  if (lower.checked) isLower = true;
  if (symbol.checked) isSymbol = true;
  if (number.checked) number = true;
}
async function copyPassword() {
  try {
    await navigator.clipboard.writeText(output.textContent);
  } catch (error) {
    alert("copy failed");
  }

  copyConfirmation.style.opacity = "1";
  setTimeout(() => {
    copyConfirmation.style.opacity = "0";
  }, 2000);
}
copy_btn.addEventListener("click", () => {
  if (output.textContent != "") {
    copyPassword();
  }
});
function handleCheckCount() {
  let count = 0;
  allCheckBox.forEach((box) => {
    if (box.checked) count++;
    // console.log(count);
  });
}
function handleCheckChange() {
  allCheckBox.forEach((box) => {
    box.addEventListener("change", handleCheckCount);
  });
}
handleCheckChange();
btn.addEventListener("click", () => {
  final_passwor = "";
  // if (upper.checked) final_password += getRandomUpper();
  // if (lower.checked) final_password += getRandomLower();
  // if (symbol.checked) final_password += getRandomSymbol();
  // if (number.checked) final_password += getRandomNumber();

  const functionArray = [];
  if (upper.checked) functionArray.push(getRandomUpper);
  if (lower.checked) functionArray.push(getRandomLower);
  if (symbol.checked) functionArray.push(getRandomSymbol);
  if (number.checked) functionArray.push(getRandomNumber);
  for (let i = 0; i < functionArray.length; i++) {
    final_passwor += functionArray[i]();
  }
  for (let i = 0; i < password_length - functionArray.length; i++) {
    let ind = Math.floor(Math.random() * functionArray.length + 1);
    final_passwor += functionArray[ind]();
  }

  console.log(final_passwor);
});
