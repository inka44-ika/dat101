"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
let task1Line = "Line 1: ";
for (let i = 1; i <= 10; i++) {
    task1Line += i + " ";
}


printOut(task1Line);
task1Line = "Line 2: ";
for (let i = 10; i >= 1; i--) {
    task1Line += i + " ";
}
printOut (task1Line);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
const task2GuessNumber = 45;
let task2RandomNumber = 0;
while (task2RandomNumber !== task2GuessNumber) {
    task2RandomNumber = Math.floor(Math.random() * 60) + 1;
}
printOut("The random number is: " + task2RandomNumber);


printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
const task3GuessNumber = 45;
let task3RandomNumber = 0;
let task3Atempts = 0;
let task3TimeStart = Date.now();
while (task3RandomNumber !== task3GuessNumber) {
    task3RandomNumber = Math.floor(Math.random() * 6000000) + 1;
    task3Atempts++;
}
let task3TimeEnd = Date.now();
let task3TimeTaken = (task3TimeEnd - task3TimeStart);
printOut (`The random number is: ${task2RandomNumber}`);
printOut (`Number of atempts: ${task3Atempts}`);
printOut (`Time taken: ${task3TimeTaken} ms`);
    

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/*for (let number = 2; number <= 100; number++) {
    let isPrime = true;

    for (let divisor = 2; divisor < number; divisor++) {
        if (number % divisor === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        printOut(number);
    }
}*/ /* Chatgpt sitt svar*/


for(let i = 2; i <= 200; i++) {
    let isPrime = true;
    let j = i - 1;
    while(!isPrime && j > i){
        if(i % j === 0){
            isPrime = false
        }
        j--;
    }
}

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut(newLine);
