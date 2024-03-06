var calculator = document.createElement('div');
calculator.className = 'calculator';

var input = document.createElement('input');
input.setAttribute('type','text');
input.placeholder = 0;
input.id = 'display';

var buttons = document.createElement('div');
buttons.className = 'buttons';
buttons.innerHTML = `
<button onclick="clearDisplay()">C</button>
<button onclick="del(-1)"><-</button>
<button onclick="dis('.')">.</button>
<button onclick="dis('*')">x</button>
<button onclick="dis('7')">7</button>
<button onclick="dis('8')">8</button>
<button onclick="dis('9')">9</button>
<button onclick="dis('/')">/</button>
<button onclick="dis('4')">4</button>
<button onclick="dis('5')">5</button>
<button onclick="dis('6')">6</button>
<button onclick="dis('-')">-</button>
<button onclick="dis('1')">1</button>
<button onclick="dis('2')">2</button>
<button onclick="dis('3')">3</button>
<button onclick="dis('+')">+</button>
<button onclick="dis('0')">0</button>
<button onclick="dis('00')">00</button>
<button onclick="calculate()">=</button>
</div>`

calculator.append(input,buttons);
document.body.append(calculator);

let displayValue = "";

function dis(value) {
  displayValue += value;
  document.getElementById('display').value = displayValue;
}

function clearDisplay() {
  displayValue = "";
  document.getElementById('display').value = displayValue;
}
function del(){
    displayValue = displayValue.slice(0,-1);
    document.getElementById('display').value = displayValue;
}
  
function calculate() {
  let expression = document.getElementById('display').value;
  let result = eval(expression);
  document.getElementById('display').value = result;
}
document.addEventListener('keydown',function(event) {
  let keycode = event.keycode || event.which;
  if(keycode >= 48 && keycode <= 57){
    let invalue = String.fromCharCode(keyCode);
    invalue = displyValue;
  }
  else{
    alert('Only numbers are allowed!')
  }
})
