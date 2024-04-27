#! /usr/bin/env node
import inquirer from "inquirer";import { textSpanContainsPosition } from "typescript";
const answer = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "firstNumber" },
  {message: "Enter secnd number", type: "number", name: "secondNumber" },
  {messsage: "Select one of the oprators to perform action", type: "list"
  , name: "oprator", choices:["Addition", "Subtraction", "Multiplication", "Division"]}

]);
// conditional statement
if (answer .oprator === "Addition") {console.log(answer.firstNumber + answer.secondNumber);
} else if(answer .oprator === "Subtraction")
{console.log(answer.firstNumber - answer.secondNumber);}
else if(answer .oprator === "Multiplication")
{console.log(answer.firstNumber * answer.secondNumber);}
else if(answer .oprator === "Division")
{console.log(answer.firstNumber / answer.secondNumber);}

