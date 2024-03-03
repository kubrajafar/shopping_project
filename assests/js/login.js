const login_btn = document.querySelector(".login-btn");
const user = document.getElementById("user");
const pass = document.getElementById("pass");
let arr = [];
arr = JSON.parse(localStorage.getItem("Data"));

let result;

login_btn.addEventListener("click", () => {
  arr.forEach((element) => {
    result = user?.value === element?.name && pass?.value === element?.pass;
  });
  if (result) {
    window.location.href = "user_page.html";
  } else if (user.value === "admin" && pass.value === "admin12") {
    window.location.href = "admin.html";
  } else {
    alert("User not found");
  }
});
// localStorage.clear()
