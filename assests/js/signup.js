const signup_submit = document.querySelector(".signup-submit");
const login_btn = document.querySelector(".login-btn");

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

  let result1 = false;
  console.log(arr);
  if (JSON.parse(localStorage.getItem("Data")) !== null) {
    for (let i = 0; i < JSON.parse(localStorage.getItem("Data")).length; i++) {
      console.log(JSON.parse(localStorage.getItem("Data"))[i].name);
      if (JSON.parse(localStorage.getItem("Data"))[i].name === user.value) {
        result1 = true;
      } else {
        result1 = false;
      }
    }

    if (pass.value !== confPass.value) {
      alert("Passwords is not the same");
    } else if (result1) {
      alert("user already exists");
    } else {
      localStorage.setItem("Data", JSON.stringify(arr));
      window.location.href = "login.html";
    }
  } else {
    localStorage.setItem("Data", JSON.stringify(arr));
  }
});

// localStorage.clear()
