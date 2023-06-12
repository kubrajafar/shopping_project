const login_btn = document.querySelector(".login-btn");
const user = document.getElementById("user");
const pass = document.getElementById("pass");


login_btn.addEventListener("click", () => {
  if (user.value === "admin" && pass.value === "admin123") {
    window.location.href = "admin.html";
  } else {
    console.log("err");
  }
});
