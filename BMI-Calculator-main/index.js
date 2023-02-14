const toggleModeButton = document.querySelector("#toggle-mode-button");
const content = document.querySelector("#content");
const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const calculateButton = document.getElementById('calculate-button');
const bmiResult = document.getElementById('bmi-result');

let currentMode = "dark";

const toggleMode = () => {
 if (currentMode === "dark"){
  document.documentElement.style.setProperty("--dark-mode-bg", "var(--light-mode-bg)");
  document.documentElement.style.setProperty("--dark-mode-text", "var(--light-mode-text)");
  currentMode = "light";
 }else{
  document.documentElement.style.setProperty("--dark-mode-bg", "#333");
  document.documentElement.style.setProperty("--dark-mode-text", "#fff");
  currentMode = "dark";
 }

};

toggleModeButton.addEventListener("click", toggleMode);

 const cal = () => {
  const weight = parseFloat(weightInput.value);
  const height = parseFloat(heightInput.value);
  const bmi = weight / (height * height);
  bmiResult.textContent = `Your BMI is ${bmi.toFixed(2)}`;
};

calculateButton.addEventListener('click', cal);



