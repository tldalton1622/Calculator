var firstOperand = 0;
var operation = 0;
var secondOperand = 0;


const numberButton = document.querySelectorAll('.numberedButton');
const operationButton = document.querySelectorAll('.operationButton');
const display = document.getElementById('calcDisplay');
const equalsOrCompute = document.getElementById('itemEqualsButton');

operationButton.forEach((button) => {
     button.addEventListener('click', (e) => {
          
          if (button.value === 'plus')  {
               firstOperand = Number(firstOperand);
               operation = 'plus'
               display.innerText = "";
          } else if (button.value !== 'plus') {
               alert('someting else');
          }
          
          
     })
}
);
numberButton.forEach((button) => {
     button.addEventListener('click', (e) => {
          const number = button.value;
          toText = number.toString();
          display.innerText += toText;
          firstOperand = display.innerText;

          
     })
});

function addition(firstOperand, secondOperand) {
     return firstOperand+secondOperand;

};

equalsOrCompute.addEventListener('click', (e) => {
     secondOperand = display.innerText;
})