/**
 *
 * A simple class containing Add and Multiply methods for calculator
 * @class Calculator
 */
class Calculator {
  /**
   *
   * Sums up input parameters
   * @param {Number} args numbers to sum
   * @return {Number} sum of arguments
   * @memberof Calculator
   */
  add(...args) {
    let sum = 0;
    for (const argument of args) {
      if (typeof argument !== 'number') {
        console.log(argument + " is not a number!");
        throw new Error('Some of arguments are not a number!');
      } else sum = sum + argument;
    }
    return sum;
  }

  /**
   *
   * Multiply input parameters
   * @param {Number} args numbers to multiply
   * @return {Number} multiplication of arguments
   * @memberof Calculator
   */
  multiply(...args) {
    let multiply = 1;
    for (const argument of args) {
      if (typeof argument !== 'number') {
        console.log(argument + " is not a number!");
        throw new Error('Some of arguments are not a number!');
      } else multiply = multiply*argument;
    }
    return multiply;
  }
}

module.exports = Calculator;
