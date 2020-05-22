var firstOperand = 0;
var operation = 0;
var secondOperand = 0;


const numberButton = document.querySelectorAll('.numberedButton');
const operationButton = document.querySelectorAll('.operationButton');
const display = document.getElementById('calcDisplay');
const equalsOrCompute = document.getElementById('equals');

operationButton.forEach((button) => {
     button.addEventListener('click', (e) => {
          
          if (button.value === 'plus')  {
               firstOperand = display.innerText;
               display.innerText = "";

               //let total = addFunction(firstOperand, secondOperand);
               
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
          //firstOperand = display.innerText;

          
     })
});



equalsOrCompute.addEventListener('click', (e) => {
     secondOperand = display.innerText;
     display.innerText = ""
     const total = addFunction(firstOperand, secondOperand);
     display.innerText = Number(total);
})

function addFunction(a, b) {
     a = Number(a);
     b = Number(b)
     return a+b;
};