import _ from 'lodash';

interface MathOperations {
    add: (num1: number, num2: number) => number;
    sub: (num1: number, num2: number) => number;
    mult: (num1: number, num2: number) => number;
    div: (num1: number, num2: number) => number;
}

const mathOperations: MathOperations = {
    add: (num1, num2) => {
        if (!_.isNumber(num1) || !_.isNumber(num2)) {
            throw new Error('Both arguments must be numbers');
        }
        return _.add(num1, num2);
    },

    sub: (num1, num2) => {
        if (!_.isNumber(num1) || !_.isNumber(num2)) {
            throw new Error('Both arguments must be numbers');
        }
        return _.subtract(num1, num2);
    },

    mult: (num1, num2) => {
        if (!_.isNumber(num1) || !_.isNumber(num2)) {
            throw new Error('Both arguments must be numbers');
        }
        return _.multiply(num1, num2);
    },

    div: (num1, num2) => {
        if (!_.isNumber(num1) || !_.isNumber(num2)) {
            throw new Error('Both arguments must be numbers');
        }
        if (num2 === 0) {
            throw new Error('Division by zero is not allowed');
        }
        return _.divide(num1, num2);
    },
};

export default mathOperations;
