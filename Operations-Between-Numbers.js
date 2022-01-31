function operationsBetweenNums(input) {
  let n1 = Number(input[0]);
  let n2 = Number(input[1]);
  let operator = input[2];

  let calc;
  let oddOrEven;
  let zero;

  switch (operator) {
    case "+":
      calc = n1 + n2;
      if (calc % 2 == 0) {
        oddOrEven = "even";
      } else {
        oddOrEven = "odd";
      }
      console.log(`${n1} + ${n2} = ${calc} - ${oddOrEven}`);
      break;
    case "-":
      calc = n1 - n2;
      if (calc % 2 == 0) {
        oddOrEven = "even";
      } else {
        oddOrEven = "odd";
      }
      console.log(`${n1} - ${n2} = ${calc} - ${oddOrEven}`);
      break;
    case "*":
      calc = n1 * n2;
      if (calc % 2 == 0) {
        oddOrEven = "even";
      } else {
        oddOrEven = "odd";
      }
      console.log(`${n1} * ${n2} = ${calc} - ${oddOrEven}`);
      break;
    case "/":
      if (n1 == 0) {
        console.log(`Cannot divide ${n1} by zero`);
      } else if (n2 == 0) {
        console.log(`Cannot divide ${n1} by zero`);
      } else {
        calc = n1 / n2;
        console.log(`${n1} / ${n2} = ${calc.toFixed(2)}`);
      }
      break;
    case "%":
      if (n1 == 0) {
        console.log(`Cannot divide ${n1} by zero`);
      } else if (n2 == 0) {
        console.log(`Cannot divide ${n1} by zero`);
      } else {
        calc = n1 % n2;
        console.log(`${n1} % ${n2} = ${calc}`);
      }
      break;
    default:
      break;
  }
}

operationsBetweenNums(["10", "0", "%"]);
