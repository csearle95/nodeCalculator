var readlineSync = require("readline-sync");

//Ask the user, "What operation would you like to perform?"
//Then the user enters one of these options: "/" "*" "-" "+"
//If the user enters an invalid character, print: "That is not a valid operation" and then restart the program
//After the user enters a valid operation, ask the user, "Please enter the first number"
//The user then enters the first number. If the user enters something that is not a number, print: “This is not a number” and then re-ask the question
//After a valid number is entered, ask the user, "Please enter the second number". Perform the same error handling as before
//Then create a function to perform the proper math operation and print the result as: "The result is: X" where "X" is the actual result

const mathOperations = ["/", "*", "-", "+"];

let getMathOperation = readlineSync.question(
  "What operation would you like to perform? ",
  {
    limit: mathOperations,
    limitMessage: "Please enter a valid math operation",
  }
);

const getFirstNumber = readlineSync.questionInt(
  "What number would you like to " + getMathOperation + " by? "
);
const getSecondNumber = readlineSync.questionInt(
  "What number do you want to " +
    getMathOperation +
    " by " +
    "for the number " +
    getFirstNumber +
    " "
);

function doMath(getFirstNumber, getSecondNumber, getMathOperation) {
  if (getMathOperation === mathOperations[0]) {
    return getFirstNumber / getSecondNumber;
  }

  if (getMathOperation === mathOperations[1]) {
    return getFirstNumber * getSecondNumber;
  }

  if (getMathOperation === mathOperations[2]) {
    return getFirstNumber - getSecondNumber;
  }

  if (getMathOperation === mathOperations[3]) {
    return getFirstNumber + getSecondNumber;
  }
}

const output = doMath(
  getFirstNumber,
  getSecondNumber,
  getMathOperation
).toFixed(3);
console.log(
  getFirstNumber + getMathOperation + getSecondNumber + " is equal to " + output
);
