document.addEventListener("DOMContentLoaded", () => {
let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");
let passBox = document.getElementById("passBox");
let lowerCase = document.getElementById("lowerCase");
let upperCase = document.getElementById("upperCase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let genBtn = document.getElementById("genBtn");

sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener("input", () => {
  sliderValue.textContent = inputSlider.value;
});

genBtn.addEventListener("click", () => {
  passBox.value = generatePassword();
  console.log("generating password")
});

let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let allNumbers = "0123456789";
let allSymbols = "!#$%^&*";

function generatePassword() {
  let genPassword = ""
  let allChars = ""


  if (lowerCase.checked) {
    allChars += lowerChars;
  }

  if (upperCase.checked) {
    allChars += upperChars;
  }

  if (numbers.checked) {
    allChars += allNumbers;
  }

  if (symbols.checked) {
    allChars += allSymbols;
  }

  if (allChars.length === 0) {
    return "Please select at least one option!";
  }

 for (let i=1; i <= inputSlider.value; i++){
    genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
  }
  return genPassword;
}
});
