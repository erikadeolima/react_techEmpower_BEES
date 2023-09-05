const calculadora = document.querySelector("#fondo");
const teclas = document.querySelector(".teclado");
const display = document.getElementById("display");

teclas.addEventListener("click", e => {
  const key = e.target;
  const functionOfKey = key.attributes.class.textContent;
  if (functionOfKey === 'tecla') {
    const keyContent = key.attributes.id.textContent;
    let displayedNum = display.textContent;
    if (keyContent === 'on') {
      clearDisplay();
    } else {
      if (keyContent === 'punto') {
        display.textContent = displayedNum + '.';
      } else {
        if (displayedNum === '0') {
          display.textContent = keyContent
        } else {
          display.textContent = displayedNum + keyContent
        }
      }
    }
  }
  if (functionOfKey !== 'tecla') {
    if (functionOfKey[1] === '') {

    }
  }
})

function clearDisplay() {
  display.textContent = "0";
}

function changeSignal() {
  const actualValue = display.innerHTML;
  const changedSignalvalue = Number(actualValue) * -1;
  console.log(actualValue);
  console.log(changedSignalvalue);
  switch (changedSignalvalue) {
    case '-0':
      return display.innerHTML = actualValue;
    default:
      return display.innerHTML = changedSignalvalue;
  }
};

async function somarValores() {
  const firstNumber = display.innerHTML;

  const sum = firstNumber + secondNumber
  console.log(sum);
}