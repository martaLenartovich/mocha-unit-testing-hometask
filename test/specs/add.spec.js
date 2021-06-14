/* eslint-disable max-len */
const Calculator = require('../../app/calculator');
const {expect} = require('chai');

describe('calculator tests for add function', function() {
  let calculator;
  beforeEach(function() {
    calculator = new Calculator();
  });
  it('should return correct sum of some parameters', function() {
    expect(calculator.add(1, 4, 55, 66, 0)).to.be.equal(126);
  });
  it('should return parameter value if sum method has 1 parameter', function() {
    expect(calculator.add(5)).to.be.equal(5);
  });
  it('should return correct sum of negative parameters', function() {
    expect(calculator.add(-5, -10)).to.be.equal(-15);
  });
  it('should return error if some of parameters are not a number in add method', function() {
    expect(function() {
      calculator.add(1, 2, 'b');
    } ).throw('Some of arguments are not a number!');
  });
});
