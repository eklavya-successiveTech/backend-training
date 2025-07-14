const fs = require('fs');
const path = require('path');
const { add, sub, mult, div } = require('./lib/math');


function main() {
    const args = process.argv.slice(2);
    
    if (args.length !== 3) {
        console.error('Usage: node index.js <operation> <number1> <number2>');
        console.error('Operations: add, sub, mult, div');
        console.error('Example: node index.js add 10 5');
        process.exit(1);
    }
    
    const [operation, num1, num2] = args;
    
    try {
        let result;
        let operationSymbol;
        
        switch (operation.toLowerCase()) {
            case 'add':
                result = add(num1, num2);
                operationSymbol = '+';
                break;
            case 'sub':
                result = sub(num1, num2);
                operationSymbol = '-';
                break;
            case 'mult':
                result = mult(num1, num2);
                operationSymbol = '*';
                break;
            case 'div':
                result = div(num1, num2);
                operationSymbol = '/';
                break;
            default:
                throw new Error(`Unknown operation: ${operation}. Use: add, sub, mult, div`);
        }
        
        console.log(`Operation: ${num1} ${operationSymbol} ${num2} = ${result}`);
        
        saveToCSV(operation, num1, num2, result, operationSymbol);
        
    } catch (error) {
        console.error('Error:', error.message);
        process.exit(1);
    }
}

/**
 * Save calculation results to CSV file
 * @param {string} operation - The operation performed
 * @param {string} num1 - First number
 * @param {string} num2 - Second number
 * @param {number} result - Calculation result
 * @param {string} symbol - Operation symbol
 */
function saveToCSV(operation, num1, num2, result, symbol) {
    const csvFilePath = path.join(__dirname, 'results.csv');
    
    // Create CSV header if file doesn't exist
    const csvHeader = 'Timestamp,Operation,Number1,Number2,Symbol,Result,Expression\n';
    
    // Create CSV row
    const timestamp = new Date().toISOString();
    const expression = `${num1} ${symbol} ${num2} = ${result}`;
    const csvRow = `${timestamp},${operation},${num1},${num2},${symbol},${result},"${expression}"\n`;
    
    try {
        // Check if file exists
        if (!fs.existsSync(csvFilePath)) {
            // Create file with header
            fs.writeFileSync(csvFilePath, csvHeader);
            console.log('Created new CSV file: results.csv');
        }
        
        // Append the new row
        fs.appendFileSync(csvFilePath, csvRow);
        console.log('Result saved to results.csv');
        
    } catch (error) {
        console.error('Error saving to CSV:', error.message);
    }
}

/**
 * Display usage information
 */
function displayUsage() {
    console.log('\n=== Math Calculator ===');
    console.log('Usage: node index.js <operation> <number1> <number2>');
    console.log('\nAvailable operations:');
    console.log('  add  - Addition');
    console.log('  sub  - Subtraction');
    console.log('  mult - Multiplication');
    console.log('  div  - Division');
    console.log('\nExamples:');
    console.log('  node index.js add 10 5');
    console.log('  node index.js sub 20 8');
    console.log('  node index.js mult 6 7');
    console.log('  node index.js div 15 3');
    console.log('\nResults are automatically saved to results.csv file');
}

// Check if help is requested
if (process.argv.includes('--help') || process.argv.includes('-h')) {
    displayUsage();
    process.exit(0);
}

// Run the main function
main();