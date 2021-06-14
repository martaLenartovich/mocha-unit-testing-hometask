/* eslint-disable max-len */
const Calculator = require('../../app/calculator');
const {expect} = require('chai');

describe('calculator tests for multiply function', function() {
  let calculator;
  beforeEach(function() {
    calculator = new Calculator();
  });
  it('should correctly multiply some parameters', function() {
    expect(calculator.multiply(1, 4, 5)).to.be.equal(20);
  });
  it('should return parameter value if multiply method has 1 parameter', function() {
    expect(calculator.multiply(5)).to.be.equal(5);
  });
  it('should return 0 if one of the parameters is 0', function() {
    expect(calculator.multiply(5, 7, 9, 10, 11, 0)).to.be.equal(0);
  });
  it('should return negative value if one of the parameters is negative', function() {
    expect(calculator.multiply(1, 5, -1)).to.be.equal(-5);
  });
  it('should return positive value if two parameters are negative', function() {
    expect(calculator.multiply(-7, -1)).to.be.equal(7);
  });
  it('should return error if some of parameters are not a number in multiply method', function() {
    expect(function() {
      calculator.multiply(1, 2, '@');
    } ).throw('Some of arguments are not a number!');
  });
});
