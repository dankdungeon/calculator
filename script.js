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
      return add(num1, num2).toFixed(2);
    case "-":
      return subtract(num1, num2).toFixed(2);
    case "*":
      return multiply(num1, num2).toFixed(2);
    case "/":
      if (num2 == "0")
        return "ERROR";
      return divide(num1, num2).toFixed(2);
  }
}

// numbers
document.querySelectorAll(".number").forEach((button) => {
  button.addEventListener("click", () => {
    if (!operator) {
      if (lastOperator == "=") {
        num1 = "";
        lastOperator = "";
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
document.querySelectorAll(".operator").forEach((button) => {
  button.addEventListener("click", () => {
    if (button.textContent == "AC") {
      num1 = "";
      num2 = "";
      operator = "";
      display.textContent = "";
    } else if (button.textContent == "=") {
      if (num1 && num2 && operator) {
        num1 = parseFloat(operate(parseFloat(num1), parseFloat(num2), operator)).toString();
        display.textContent = num1;
        num2 = "";
        operator = "";
        lastOperator = "=";
      }
    } else {
      if (num1 && !num2) {
        if (button.textContent == "+-") {
          num1 = (-parseFloat(num1)).toString();
          display.textContent = num1;
        }
        else {
          operator = button.textContent;
          display.textContent = num1 + " " + operator;
        }
      } else if (num1 && num2) {
        num1 = parseFloat(operate(parseFloat(num1), parseFloat(num2), operator)).toString();
        operator = button.textContent;
        display.textContent = num1 + " " + operator;
        num2 = "";
      }
    }
  });
});
