let display = document.getElementById("display");
let input = "";

function press(num) {
  input += num;
  display.value = input;
}

function clearDisplay() {
  input = "";
  display.value = "";
}

function calculate() {
  // here's the prank 😈
  display.value = "Hello, World!";
  input = "";
}
