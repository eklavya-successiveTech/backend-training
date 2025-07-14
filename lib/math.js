const _ = require('lodash');

/**
 * Addition function using lodash
 * @param {number} num1 - First number
 * @param {number} num2 - Second number
 * @returns {number} - Sum of num1 and num2
 */
function add(num1, num2) {
    // Convert to numbers to ensure proper addition
    const n1 = _.toNumber(num1);
    const n2 = _.toNumber(num2);
    
    // Validate inputs
    if (_.isNaN(n1) || _.isNaN(n2)) {
        throw new Error('Invalid input: Please provide valid numbers');
    }
    
    return _.add(n1, n2);
}

/**
 * Subtraction function using lodash
 * @param {number} num1 - First number (minuend)
 * @param {number} num2 - Second number (subtrahend)
 * @returns {number} - Difference of num1 and num2
 */
function sub(num1, num2) {
    // Convert to numbers to ensure proper subtraction
    const n1 = _.toNumber(num1);
    const n2 = _.toNumber(num2);
    
    // Validate inputs
    if (_.isNaN(n1) || _.isNaN(n2)) {
        throw new Error('Invalid input: Please provide valid numbers');
    }
    
    return _.subtract(n1, n2);
}

/**
 * Multiplication function using lodash
 * @param {number} num1 - First number
 * @param {number} num2 - Second number
 * @returns {number} - Product of num1 and num2
 */
function mult(num1, num2) {
    // Convert to numbers to ensure proper multiplication
    const n1 = _.toNumber(num1);
    const n2 = _.toNumber(num2);
    
    // Validate inputs
    if (_.isNaN(n1) || _.isNaN(n2)) {
        throw new Error('Invalid input: Please provide valid numbers');
    }
    
    return _.multiply(n1, n2);
}

/**
 * Division function using lodash
 * @param {number} num1 - Dividend
 * @param {number} num2 - Divisor
 * @returns {number} - Quotient of num1 divided by num2
 */
function div(num1, num2) {
    // Convert to numbers to ensure proper division
    const n1 = _.toNumber(num1);
    const n2 = _.toNumber(num2);
    
    // Validate inputs
    if (_.isNaN(n1) || _.isNaN(n2)) {
        throw new Error('Invalid input: Please provide valid numbers');
    }
    
    // Check for division by zero
    if (n2 === 0) {
        throw new Error('Division by zero is not allowed');
    }
    
    return _.divide(n1, n2);
}

// Export all functions to make them accessible in other files
module.exports = {
    add,
    sub,
    mult,
    div
};