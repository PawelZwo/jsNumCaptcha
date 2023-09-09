const captchaQuestion = document.getElementById("captchaQuestion");
const form = document.getElementById("captchaForm");
const formInput = document.getElementById("captchaAnswer");
const newCaptchaButton = document.getElementById("newCaptcha");
// const captchaFormButton = document.getElementById("captchaFormButton");

const options = ["+", "-", "*"];

const generateCaptcha = () => {
  let randomOption = Math.floor(Math.random() * options.length),
    randomA = Math.floor(Math.random() * (10 - 1) + 1),
    randomB = Math.floor(Math.random() * (10 - 1) + 1),
    captchaText = `${randomA} ${options[randomOption]} ${randomB} = ?`,
    captchaAnswer;

  switch (options[randomOption]) {
    case "+":
      captchaAnswer = randomA + randomB;
      break;
    case "-":
      captchaAnswer = randomA - randomB;
      break;
    case "*":
      captchaAnswer = randomA * randomB;
      break;
  }

  console.log(`captchaAnswer: ${captchaAnswer}, captchaText: ${captchaText}`)
  captchaQuestion.textContent = captchaText;
  return captchaAnswer
}

document.onload = generateCaptcha();


newCaptchaButton.addEventListener("click", e => {
  e.preventDefault();
  generateCaptcha();
})

form.addEventListener("submit", (e, captchaAnswer) => {
  e.preventDefault();
  if (Number(formInput.value) !== Number(captchaAnswer)) {
    console.error("Bad answer!");
    formInput.value = "";
    generateCaptcha();
  }
  console.log("Good answer! Sending your request to the server...")
  formInput.value = "";
})