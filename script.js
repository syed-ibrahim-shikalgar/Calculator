let string = "";
let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML.trim() == "=") {
      string = eval(string);
      document.querySelector(".input").value = string;
    } else if (e.target.innerHTML.trim() == "AC") {
      string = "";
      document.querySelector(".input").value = string;
    } else {
      console.log(e.target);
      string = string + e.target.innerHTML.trim();
      document.querySelector(".input").value = string;
    }
  });
});
