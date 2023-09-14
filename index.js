const captchaQuestion = document.getElementById("captchaQuestion");
const form = document.getElementById("captchaForm");
const formInput = document.getElementById("captchaAnswer");
const newCaptchaButton = document.getElementById("newCaptcha");
const captchaFormButton = document.getElementById("captchaFormButton");
// TODO: errors massage.
// const errorsDiv = document.getElementById("errors");

let captchaAnswer;

const generateCaptcha = () => {
  // Once Captcha has been answered correctly, program disables "submit" button.
  captchaFormButton.disabled = false;

  // "/" omitted because it wouldn't be simple enough for all kinds of people to complete.
  const options = ["+", "-", "*"];

  // Getting random option from list of options.
  let getRandomOption = Math.floor(Math.random() * options.length),

    // Choosing two random numbers
    randomA = Math.floor(Math.random() * (10 - 1) + 1),
    randomB = Math.floor(Math.random() * (10 - 1) + 1)

  // Getting Captcha question.
  captchaQuestion.textContent = `${randomA} ${options[getRandomOption]} ${randomB} = ?`;

  switch (options[getRandomOption]) {
    case "+":
      return captchaAnswer = randomA + randomB;
    case "-":
      return captchaAnswer = randomA - randomB;
    case "*":
      return captchaAnswer = randomA * randomB;
  }
}

// Generating Captch on document load.
document.onload = generateCaptcha();

// Allowing user to re-generate Captcha
newCaptchaButton.addEventListener("click", () => generateCaptcha())

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (Number(formInput.value) !== Number(captchaAnswer)) {
    console.error("Wrong answer!")
    formInput.value = "";
    generateCaptcha();
  } else {
    console.log("Good answer! Sending your request to our server...")
    formInput.value = "";
    captchaFormButton.disabled = true;
  }
})