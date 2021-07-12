let form = document.querySelector(".form"),
  button = form.querySelector(".form__btn"),
  youName = form.querySelector("[name=name]"),
  email = form.querySelector("[name=email]"),
  subject = form.querySelector("[name=subject]"),
  company = form.querySelector("[name=company]"),
  message = form.querySelector("[name=message]"),
  isStorageSupport = !0,
  storage = "";
try {
  storage = localStorage.getItem("email");
} catch (e) {
  isStorageSupport = !1;
}
youName.addEventListener("click", function (e) {
  e.preventDefault(),
    console.log("Клик по ссылке name"),
    button.classList.remove("form__btn--show");
}),
  email.addEventListener("click", function (e) {
    e.preventDefault(),
      console.log("Клик по ссылке email"),
      storage ? ((email.value = storage), youName.focus()) : email.focus();
  }),
  subject.addEventListener("click", function (e) {
    e.preventDefault(),
      console.log("Клик по ссылке subject"),
      button.classList.remove("form__btn--show");
  }),
  company.addEventListener("click", function (e) {
    e.preventDefault(),
      console.log("Клик по ссылке company"),
      button.classList.remove("form__btn--show");
  }),
  message.addEventListener("click", function (e) {
    e.preventDefault(),
      console.log("Клик по ссылке message"),
      button.classList.remove("form__btn--show");
  }),
  form.addEventListener("submit", function (e) {
    youName.value && email.value
      ? isStorageSupport &&
        (localStorage.setItem("email", email.value),
        button.classList.remove("form__btn--show"))
      : (e.preventDefault(),
        button.classList.add("form__btn--show"),
        console.log("Нужно ввести имя и email"),
        youName.focus());
  });
