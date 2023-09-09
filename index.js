const captchaQuestion = document.getElementById("captchaQuestion");
const form = document.getElementById("captchaForm");
const formInput = document.getElementById("captchaAnswer");
const newCaptchaButton = document.getElementById("newCaptcha");
const captchaFormButton = document.getElementById("captchaFormButton");

let captchaAnswer;

const generateCaptcha = () => {
  captchaFormButton.disabled = false;

  const options = ["+", "-", "*"];
  let randomOption = Math.floor(Math.random() * options.length),
    randomA = Math.floor(Math.random() * (10 - 1) + 1),
    randomB = Math.floor(Math.random() * (10 - 1) + 1)

  captchaQuestion.textContent = `${randomA} ${options[randomOption]} ${randomB} = ?`;

  switch (options[randomOption]) {
    case "+":
      return captchaAnswer = randomA + randomB;
    case "-":
      return captchaAnswer = randomA - randomB;
    case "*":
      return captchaAnswer = randomA * randomB;
  }
}

document.onload = generateCaptcha();

newCaptchaButton.addEventListener("click", () => generateCaptcha())

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (Number(formInput.value) !== Number(captchaAnswer)) {
    console.error("Bad answer!");
    formInput.value = "";
    generateCaptcha();
  } else {
    console.log("Good answer! Sending your request to the server...")
    formInput.value = "";
    captchaFormButton.disabled = true;
  }
})