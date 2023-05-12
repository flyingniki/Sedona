const modalSuccess = document.querySelector(".modal--success");
const modalFailure = document.querySelector(".modal--failure");
const form = document.querySelector(".form-review");
const submit = document.querySelector(".form-review__button");

document.addEventListener("DOMContentLoaded", () => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    e.stopPropagation();

    let formData = new FormData(form);
    let request = new XMLHttpRequest();

    request.open("GET", form.action);
    request.onreadystatechange = () => {
      if (request.readyState == 4 && request.status == 200) {
        console.log(request.readyState);
        console.log(request.status);
        modalSuccess.classList.remove("visually-hidden");
      } else {
        console.log(request.readyState);
        console.log(request.status);
        modalFailure.classList.remove("visually-hidden");
      }
    };
    request.send(formData);
  });
});
