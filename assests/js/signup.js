const signup_submit = document.querySelector(".signup-submit");

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
});
// localStorage.clear()
