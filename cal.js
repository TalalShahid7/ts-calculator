#! /usr/bin/env node
import inquirer from "inquirer";
const data = await inquirer.prompt([
    {
        type: 'list',
        name: 'operator',
        message: 'What operation do you want to perform ? ',
        choices: ['+', '-', '*', '/']
    },
    {
        type: 'number',
        name: 'operand1',
        message: 'Input first Value '
    },
    {
        type: 'number',
        name: 'operand2',
        message: 'Input second value '
    }
]);
console.log("Your operator is : " + data.operator);
if (data.operator == '+') {
    console.log("Sum of ", data.operand1, " and ", data.operand2, " is ", data.operand1 + data.operand2);
}
else if (data.operator == '-') {
    console.log("Difference of ", data.operand1, " and ", data.operand2, " is ", data.operand1 - data.operand2);
}
else if (data.operator == '*') {
    console.log("Product of ", data.operand1, " and ", data.operand2, " is ", data.operand1 * data.operand2);
}
else if (data.operator == '/') {
    console.log("Division of ", data.operand1, " by ", data.operand2, " is ", data.operand1 / data.operand2);
}
else {
    console.log("Incorrect Operator ");
}
