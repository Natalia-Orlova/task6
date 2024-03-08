"use strict";

document.addEventListener("DOMContentLoaded", function () {
  let formData = {};
  const form = document.querySelector(".authorization");
  const ls = localStorage;

  const reloadBtn = document.querySelector('.reload');

  //получение данных из input
  form.addEventListener("input", function (e) {
    formData[e.target.name] = e.target.value;
    ls.setItem("formData", JSON.stringify(formData));
  });

  //восстановление данных
  try {
    if (ls.getItem("formData")) {
        formData = JSON.parse(ls.getItem("formData"));
        for (const key in formData) {
          if (form.elements[key].type === "checkbox" && formData[key] === "on") {
            form.elements[key].checked = true;
          } else {
            form.elements[key].value = formData[key];
          }
        }
      }
  } catch (error) {
    alert(error.message);
  }

  reloadBtn.addEventListener('click', function () {
    reloadBtn.classList.add('active');
    setTimeout(() => {
      location.reload(false); 
    }, 300);
  });
});
