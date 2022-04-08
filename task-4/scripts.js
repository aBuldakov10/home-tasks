let startNumb = prompt('Enter the number you would like to start with');

if (startNumb === null) {
  alert('You must enter any number to start iterations');
} else if (isNaN(startNumb) || startNumb === '' || startNumb === ' ') {
  alert('You can enter only digits in range of 0 - 9');
} else {
  alert(`You start with ${startNumb} number`);

  for (;;) {
    let stopIterationMsg = prompt(`Enter 'break' or press 'Esc' to stop iterations. Enter 'continue' to continue iterations`);

    if (stopIterationMsg === null || stopIterationMsg.toLowerCase() === 'break') {
      break;
    } else if (stopIterationMsg.toLowerCase() === 'continue') {
      startNumb++;
      alert(`Now your number is ${startNumb}`);
    } else {
      alert(`You must enter 'break' or 'continue'`);
    }
  }
}
