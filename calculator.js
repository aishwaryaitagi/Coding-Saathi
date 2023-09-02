let displayValue = '0';

function updateDisplay() {
  const display = document.getElementById('display');
  display.textContent = displayValue;
}

function appendToDisplay(val) {
  if (displayValue === '0') {
    displayValue = val;
  } else {
    displayValue += val;
  }
  updateDisplay();
  }

function clearDisplay() {
  displayValue = '0';
  updateDisplay();
}

function backspace() {
  if (displayValue.length === 1) {
    displayValue = '0';
  } else {
    displayValue = displayValue.slice(0, -1);
  }
  updateDisplay();
}

function calculate() {
  try {
    displayValue = eval(displayValue).toString();
  } catch (error) {
    displayValue = 'Error';
  }
  updateDisplay();
}

updateDisplay();
