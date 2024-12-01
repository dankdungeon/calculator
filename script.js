let num1 = "";
let num2 = "";
let operator = "";
let lastOperator = "";
let display = document.getElementById("display");

function add(num1, num2) {
  return num1 + num2;
}
function subtract(num1, num2) {
  return num1 - num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  return num1 / num2;
}

function operate(num1, num2, operator) {
  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
  }
}

// numbers
document.querySelectorAll("#numberContainer button").forEach((button) => {
  button.addEventListener("click", () => {
    if (!operator) {
      if (lastOperator == "=") {
        num1 = "";
        num1 += button.textContent;
      } else num1 += button.textContent;
      display.textContent = num1;
    } else {
      num2 += button.textContent;
      display.textContent = num1 + " " + operator + " " + num2;
    }
  });
});

// operators
document.querySelectorAll("#operatorContainer button").forEach((button) => {
  button.addEventListener("click", () => {
    if (button.textContent == "AC") {
      num1 = "";
      num2 = "";
      operator = "";
      display.textContent = "";
    } else if (button.textContent == "=") {
      if (num1 && num2 && operator) {
        num1 = operate(parseFloat(num1), parseFloat(num2), operator).toString();
        display.textContent = num1;
        num2 = "";
        operator = "";
        lastOperator = "=";
      }
    } else {
      if (num1 && !num2) {
        operator = button.textContent;
        display.textContent = num1 + " " + operator;
      } else if (num1 && num2) {
        num1 = operate(parseFloat(num1), parseFloat(num2), operator).toString();
        operator = button.textContent;
        display.textContent = num1 + " " + operator;
        num2 = "";
      }
    }
  });
});
