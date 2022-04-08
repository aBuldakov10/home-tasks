const firstNumber = prompt('Enter the first number');

if (+firstNumber) {
  const operand = prompt(`Enter one of '+',  '-',  '*',  '/' operands`);

  if (operand === '+' || operand === '-' || operand === '*' || operand === '/') {
    const secondNumber = prompt('Enter the second number');

    if (+secondNumber) {
      let result;

      switch (operand) {
        case "*":
          result = +firstNumber * +secondNumber;
          break;
        case "+":
          result = +firstNumber + +secondNumber;
          break;
        case "-":
          result = +firstNumber - +secondNumber;
          break;
        case "/":
          result = +firstNumber / +secondNumber;
          break;
      }

      alert(`Ваш результат ${result}`);
    } else if (secondNumber === null) {
      alert('You must enter any digits');
    } else {
      alert('You can enter only digits in range of 0 - 9');
    }
  } else if (operand === null) {
    alert(`You must enter one of '+',  '-',  '*',  '/' operands`);
  } else {
    alert('Такой операции не существует');
  }
} else if (firstNumber === null) {
  alert('You must enter any digits');
} else {
  alert('You can enter only digits in range of 0 - 9');
}
