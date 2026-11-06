"use strict";
import { newLine, printOut } from "../../common/script/utils.mjs";

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
/*for (let number = 2; number <= 200; number++) {
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
} */ /*chatgpt sitt svar ^*/

    let primes = " ";
for(let i = 2; i <= 200; i++) {
    let isPrime = true;
    let j = i - 1;
    while(isPrime && j > 1){
        if(i % j === 0){
            isPrime = false;
        }
        j--;
    }
    if(isPrime === true){
        primes += " " + i;
    }
}
printOut(primes);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");

/*for (let row = 1; row <= 7; row++){
    let line = " ";

    for (let col = 1; col <= 9; ) {
        line += "K" + col + "R" + row + " ";
    }
    printOut(line);
}*/
let rowText = "";
for (let row = 1; row <= 7; row++){
    for(let col = 1; col <= 9; col++){
      rowText += " K"+col + "R" + row;  
    }
   rowText += newLine;

}

printOut(rowText);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
const grade1 = Math.round((Math.floor(Math.random()* 236) + 1) / 236 * 100);
const grade2 = Math.round((Math.floor(Math.random()* 236) + 1) / 236 * 100);
const grade3 = Math.round((Math.floor(Math.random()* 236) + 1) / 236 * 100);
const grade4 = Math.round((Math.floor(Math.random()* 236) + 1) / 236 * 100);
const grade5 = Math.round((Math.floor(Math.random()* 236) + 1) / 236 * 100);

if(grade1 <= 40){
    printOut(`grade 1: F - ${grade1}`);
}else if(grade1 <= 52){
    printOut(`grade 2: E - ${grade1}`);
}else if(grade1 <= 64){
    printOut(`grade 1: D - ${grade1}`);
}else if(grade1 <= 76){
    printOut(`grade 1: C - ${grade1}`);
}else if(grade1 <= 88){
    printOut(`grade 1: D - ${grade1}`);
}else{
    printOut(`grade 1: A - ${grade1}`);
}

if(grade2 <= 40){
    printOut(`grade 2: F - ${grade2}`);
}else if(grade2 <= 52){
    printOut(`grade 2: E - ${grade2}`);
}else if(grade2 <= 64){
    printOut(`grade 2: D - ${grade2}`);
}else if(grade2 <= 76){
    printOut(`grade 2: C - ${grade2}`);
}else if(grade2 <= 88){
    printOut(`grade 2: D - ${grade2}`);
}else{
    printOut(`grade 2: A - ${grade2}`);
}

if(grade3 <= 40){
    printOut(`grade 3: F - ${grade3}`);
}else if(grade3 <= 52){
    printOut(`grade 3: E - ${grade3}`);
}else if(grade3 <= 64){
    printOut(`grade 3: D - ${grade3}`);
}else if(grade3 <= 76){
    printOut(`grade 3: C - ${grade3}`);
}else if(grade3 <= 88){
    printOut(`grade 3: D - ${grade3}`);
}else{
    printOut(`grade 3: A - ${grade3}`);
}

if(grade4 <= 40){
    printOut(`grade 4: F - ${grade4}`);
}else if(grade4 <= 52){
    printOut(`grade 4: E - ${grade4}`);
}else if(grade4 <= 64){
    printOut(`grade 4: D - ${grade4}`);
}else if(grade4 <= 76){
    printOut(`grade 4: C - ${grade4}`);
}else if(grade4 <= 88){
    printOut(`grade 4: D - ${grade4}`);
}else{
    printOut(`grade 4: A - ${grade4}`);
}

if(grade5 <= 40){
    printOut(`grade 5: F - ${grade5}`);
}else if(grade5 <= 52){
    printOut(`grade 5: E - ${grade5}`);
}else if(grade5 <= 64){
    printOut(`grade 5: D - ${grade5}`);
}else if(grade5 <= 76){
    printOut(`grade 5: C - ${grade5}`);
}else if(grade5 <= 88){
    printOut(`grade 5: D - ${grade5}`);
}else{
    printOut(`grade 5: A - ${grade5}`);
}
printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
let throwCount = 0;
let hasStraight = false;
let hasTower = false;
let has3Pairs = false;
let hasYatzy = false;

do{
const d1 = Math.floor(Math.random() * 6) + 1;
const d2 = Math.floor(Math.random() * 6) + 1;
const d3 = Math.floor(Math.random() * 6) + 1;
const d4 = Math.floor(Math.random() * 6) + 1;
const d5 = Math.floor(Math.random() * 6) + 1;
const d6 = Math.floor(Math.random() * 6) + 1;


const diceThrow = `${d1}${d2}${d3}${d4}${d5}${d6}`;
throwCount++;

let c1 = 0, c2 = 0, c3 = 0, c4 = 0, c5 = 0, c6 = 0;
for(let i = 0; i < 6; i++){
    const c = diceThrow.charAt(i);
   if(c === "1"){
    c1++;
   }else if (c === "2"){
    c2++;
   }else if(c === "3"){
    c3++;
   }else if(c === "4"){
    c4++;
   }else if(c === "5"){
    c5++;
   }else{
    c6++;
   }
}
const diceCount = `${c1}${c2}${c3}${c4}${c5}${c6}`;

let a1 = 0, a2 = 0, a3 = 0, a4 = 0, a5 = 0, a6 = 0;
for(let i = 0; i < 6; i++){
    const c = diceCount.charAt(i);
   if(c === "1"){
    a1++;
   }else if (c === "2"){
    a2++;
   }else if(c === "3"){
    a3++;
   }else if(c === "4"){
    a4++;
   }else if(c === "5"){
    a5++;
   }else if(c === "6"){
    a6++;
   }
}

const amount = `${a1}${a2}${a3}${a4}${a5}${a6}`;

if (amount.includes("6") === true ){
    if(hasStraight === false){
        hasStraight = true;
        printOut("---- Straight ----");
        printOut({ diceThrow, throwCount });
        printOut("------------------");
    }
}else if(amount === "010100"){
    if(hasTower === false){
        hasTower = true;
        printOut("---- Tower ----");
        printOut({ diceThrow, throwCount})
        printOut("----------------");
    }
}else if(amount === "030000"){
    if(has3Pairs === false){
        has3Pairs = true;
        printOut("---- 3 pairs ----");
        printOut({ diceThrow, throwCount });
        printOut("-----------------");
    }
}else if(amount === "000001"){
        if(hasYatzy === false){
        hasYatzy = true;
        printOut("---- yatzy ----");
        printOut({ diceThrow, throwCount });
        printOut("-----------------");
    }
    }


} while (hasStraight === false || hasTower === false || has3Pairs === false || hasYatzy === false);

