// June 14 (Popup boxes)
// alert
// Confirm
// Prompt

function display_message(msg) {
  alert(msg);
}
// display_message("Hi I am Diwash Pokhrel");

function redirectToGoogle() {
  let conformation = confirm("Are you sure you want to visit google");
  if (conformation) {
    window.location.href = `https://google.com`;
  }
}

function addTowNumber() {
  let firstNum = prompt("Enter first number");
  let secondNum = prompt("Enter second number");
  alert(Number(firstNum) + Number(secondNum));
}
