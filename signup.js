const form = document.getElementById("signupForm");


form.addEventListener("Register", function (e) {
    e.preventDefault();
    if (
      e.target["fname"].value != "firstname" ||
      e.target["lname"].value != "lastname" ||
      e.target["email"].value != "admin@gmail.com" ||
      e.target["uname"].value != "username" ||
      e.target.psw.value != "admin"
    ) {
      document.querySelector(".error").style.display = "block";
    } else {
      form.submit();
    }
  });