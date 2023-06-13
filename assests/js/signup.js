const signup_submit = document.querySelector(".signup-submit");
const login_btn = document.querySelector(".login-btn");
console.log(login_btn);
const user = document.getElementById("user");
const email = document.getElementById("email");
const pass = document.getElementById("pass");
const confPass = document.getElementById("confPass");
let arr = [];

if (JSON.parse(localStorage.getItem("Data")) !== null) {
  arr = JSON.parse(localStorage.getItem("Data"));
}
signup_submit.addEventListener("submit", (e) => {
  e.preventDefault();

  const obj = {
    name: user.value,
    email: email.value,
    pass: pass.value,
    confPass: confPass.value,
  };

  arr.push(obj);

  localStorage.setItem("Data", JSON.stringify(arr));

  console.log(JSON.parse(localStorage.getItem("Data")));
  window.location.href = "login.html";
});

// localStorage.clear()
