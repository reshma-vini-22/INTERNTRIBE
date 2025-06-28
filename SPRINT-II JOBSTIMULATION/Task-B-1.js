// This function reads input values, checks for valid numbers and operator, performs the selected arithmetic operation, and displays the result.
function calculate(operator) {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const resultDiv = document.getElementById("result");

  if (isNaN(num1) || isNaN(num2)) {
    resultDiv.textContent = "Result: Please enter valid numbers.";
    return;
  }

  let result;

  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      if (num2 === 0) {
        resultDiv.textContent = "Result: Cannot divide by zero!";
        return;
      }
      result = num1 / num2;
      break;
    default:
      resultDiv.textContent = "Result: Invalid operation.";
      return;
  }

  resultDiv.textContent = "Result: " + result;
}

function clearFields() {
  document.getElementById("num1").value = '';
  document.getElementById("num2").value = '';
  document.getElementById("result").textContent = "Result: ";
}