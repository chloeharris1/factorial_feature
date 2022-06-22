const Calculate = {
    factorial(inputNumber){
      // if statement to handle edge case
      if(inputNumber === 0) {
        return 1;
      }
      // for loop to calculate factorial of inputNumber
      for(let i = inputNumber -1; i >= 1; i--) {
        inputNumber*= i;
      }
      return inputNumber
    }
  }
  
  module.exports = Calculate;