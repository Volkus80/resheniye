const form = document.querySelector(".passform");

const passInput = form.querySelector(".password");
const checkPassInput = form.querySelector(".check_password");

const passError = form.querySelector(".firstpass_err");
const checkPassError = form.querySelector(".secondpass_err");

const showPasswordButton = form.querySelector(".passform_input_showbtn");
const editPasswordButton = form.querySelector(".passform_button_editpass");

const allErrorMessage = [
  ...form.querySelectorAll(".passform_input_errmessage_text"),
];

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

passInput.addEventListener("blur", function () {
  if (this.value.trim().length < 6) {
    passError.classList.remove("hidden");
    this.parentElement.classList.add("error");
  }
  if (this.value.trim().length >= 6) {
    passError.classList.add("hidden");
    this.parentElement.classList.remove("error");
  }
});

checkPassInput.addEventListener("blur", function () {
  if (this.value !== passInput.value) {
    checkPassError.classList.remove("hidden");
    this.parentElement.classList.add("error");
  }
  if (this.value === passInput.value) {
    checkPassError.classList.add("hidden");
    this.parentElement.classList.remove("error");
  }
});

showPasswordButton.addEventListener("click", () => {
  passInput.type === "password"
    ? (passInput.type = "text")
    : (passInput.type = "password");
});

editPasswordButton.addEventListener("click", () => {
  allErrorMessage.map((message) => {
    message.classList.remove("hidden");
    message.parentElement.previousElementSibling.classList.add("error");
  });
});
