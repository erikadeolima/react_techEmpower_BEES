const calculadora = document.querySelector("#fondo");
const teclas = document.querySelector(".teclado");
const display = document.getElementById("display");

teclas.addEventListener("click", e => {
  const key = e.target;
  const functionOfKey = key.attributes.class.textContent;
  const keyContent = key.attributes.id.textContent;
  if (functionOfKey === 'tecla') {
    let displayedNum = display.textContent;
    if (keyContent === 'on') {
      clearDisplay();
    } else if (keyContent === 'raiz') {
      console.log('raiz');
    }
    else if (keyContent === 'igual') {
      console.log('igual');
    } else if (keyContent === 'sign') {
      changeSignal();
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
  console.log('functionOfKey', functionOfKey)
  if (functionOfKey === 'tecla suma') {
    console.log('soma');
  }
  if (functionOfKey === 'tecla multiplica') {
    console.log('multiplica');
  }
  if (functionOfKey === 'tecla resta') {
    console.log('resta');
  }
  if (functionOfKey === 'tecla divide') {
    console.log('divide');
  }
})

function clearDisplay() {
  display.textContent = "0";
}

function changeSignal() {
  const actualValue = display.innerHTML;
  const changedSignalvalue = Number(actualValue) * -1;
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