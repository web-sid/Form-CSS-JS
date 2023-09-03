let signinbtn = document.getElementById("signinbtn");
let signupbtn = document.getElementById("signupbtn");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");

signinbtn.onclick = function () {
  nameField.style.maxHeight = "0";
  signinbtn.classList.remove("disable");
  signupbtn.classList.add("disable");

  title.innerHTML = "Sign In";
};

signupbtn.onclick = function () {
  nameField.style.maxHeight = "65px";
  signupbtn.classList.remove("disable");
  signinbtn.classList.add("disable");

  title.innerHTML = "Sign Up";
};
