const login_btn = document.querySelector(".login-btn");
const user = document.getElementById("user");
const pass = document.getElementById("pass");
let arr = [];
arr = JSON.parse(localStorage.getItem("Data"));

login_btn.addEventListener("click", () => {
  if (user.value === "admin" && pass.value === "admin123") {
    window.location.href = "admin.html";
  } else {
    alert("sss");
  }
});
login_btn.addEventListener("click", () => {
  arr.forEach((element) => {
    if (user.value === element.name && pass.value === element.pass) {
      window.location.href = "index.html";
    }
  });
});
