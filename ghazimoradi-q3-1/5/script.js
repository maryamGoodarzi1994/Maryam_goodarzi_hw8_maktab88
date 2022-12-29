let london = document.getElementById("london");
let tehran = document.getElementById("tehran");
let tokyo = document.getElementById("tokyo");
let title = document.getElementById("title");
let innerText = document.getElementById("inner-text");

london.onclick = function () {
  tehran.style.backgroundColor = "transparent";
  tokyo.style.backgroundColor = "transparent";
  london.style.backgroundColor = "grey";
  title.innerText = "London";
  innerText.innerText = "London is the capital city of England";
};
tehran.onclick = function () {
  london.style.backgroundColor = "transparent";
  tokyo.style.backgroundColor = "transparent";
  tehran.style.backgroundColor = "grey";
  title.innerText = "Tehran";
  innerText.innerText = "Tehran is the capital city of Iran";
};
tokyo.onclick = function () {
  tehran.style.backgroundColor = "transparent";
  london.style.backgroundColor = "transparent";
  tokyo.style.backgroundColor = "grey";
  title.innerText = "tokyo";
  innerText.innerText = "Tokyo is the capital city of Japan";
};
