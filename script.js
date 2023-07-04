const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.onclick = () => {
    if (button.id === "clear") {
      display.innerText = "";
    } else if (button.id === "backspace") {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    } else if (button.id === "equal") {
      if (display.innerText !== "") {
        display.innerText = eval(display.innerText);
      } else {
        display.innerText = "Null";
        setTimeout(() => (display.innerText = ""), 2000);
      }
    } else {
      display.innerText += button.innerText;
    }
  };
});

const themetogglebtn =document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator")
const toggleicon = document.querySelector("toggler-icon");
let isdark=true;
themetogglebtn.onclick=()=>{
  calculator.classList.toggle("dark")
}