import { error } from "console";
import mathOperations from "./lib/math";
import * as fs from 'fs';
import * as path from 'path';

const args = process.argv;
const operation = args[2];
const num1str = args[3];
const num2str = args[4];

const num_1 = Number(num1str);
const num_2 = Number(num2str);

if(!operation || isNaN(num_1) || isNaN(num_2)){
    throw new Error("Put something like : npm run dev add 5 3");
}

if(!(operation in mathOperations)){
    throw new Error("Operation not found");
}

try {
    const result = mathOperations[operation as keyof typeof mathOperations] (num_1, num_2);
    const csvRow = `${operation}, ${num_1}, ${num_2}, ${result}, \n`;
    const filePath = path.resolve(__dirname, '..', 'results.csv');
    const fileExists = fs.existsSync(filePath);
    if (!fileExists) {
    const headers = 'operation,num1,num2,result\n';
    fs.writeFileSync(filePath, headers, 'utf8');
   }
    fs.appendFileSync(filePath, csvRow, 'utf8');
    console.log(`Result: ${result} (saved to results.csv)`);
}
catch(error){
    console.log(error);
}