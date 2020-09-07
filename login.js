const form = document.getElementById("loginForm");


form.addEventListener("login", function (e) {
    e.preventDefault();
    if (
      e.target["email"].value != "xyz@gmail.com" ||
      e.target.psw.value != "admin"
    ) {
      document.querySelector(".error").style.display = "block";
    } else {
      form.submit();
    }
  });