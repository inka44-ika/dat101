"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";


printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const orgMathExp = "2 + 3 * 2 - 4 * 6";
const newMathExp = "2 + (3 * 2 - 4) * 6";
const part1Answer = 2 + (3 * 2 - 4) * 6;
printOut(orgMathExp);
printOut(newMathExp);
printOut(part1Answer);

const newMathExp2 = "2 + 3 * (2 - 4) * 6";
const part2Answer = 2 + 3 * (2 - 4) * 6;
printOut(newMathExp2);
printOut(part2Answer);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const millimeters = (25*1000) + (34*10);
const millPrInch = 25.4
const sumPart2 = millimeters / millPrInch
/*printOut(millimeters);
printOut(millPrInch);*/ 
printOut(sumPart2.toFixed(2) + " inches");

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const dayToMin = (24 * 60) * 3;
const HourToMin = 12 * 60;
const secToMin = 45/60;
const sumPart3 = dayToMin + HourToMin + secToMin + 14;
/*printOut(dayToMin);
printOut(HourToMin); 
printOut(secToMin);*/ 
printOut(sumPart3 + " minutes");

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const totalDays = 6322.52 / (24 * 60);
const wholeDays = Math.floor (4);
const leftoverFraction = totalDays - wholeDays;
const totalHours = leftoverFraction * 24;
const wholeHours = Math.floor (9);
const leftOverHours = totalHours - wholeHours;
const totalMin = leftOverHours * 60;
const wholeMin = Math.floor (22);
const leftOverMin = totalMin - wholeMin;
const totalSec = leftOverMin * 60; 
const wholeSec = Math.floor (31);


/*printOut(totalDays);*/
printOut(wholeDays + " days");
/*printOut(leftoverFraction);
printOut(totalHours);*/
printOut(wholeHours + " hours");
/*printOut(leftOverHours);
printOut(totalMin);*/
printOut(wholeMin + " minutes");
/*printOut(leftOverMin.toFixed(2));
printOut(totalSec.toFixed(2));*/
printOut(wholeSec + " seconds");

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const NOK = 76 / 8.6;
const USD = 8.6 / 76;
const usdToNok = Math.round (NOK * 54);

printOut(NOK + " kroner");
printOut(USD + " dollar");
printOut(usdToNok + " kroner");

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let text = "There is much between heaven and earth that we do not understand";

printOut(text);
printOut(text.length); 
printOut(text.charAt(19)); 
printOut(text.substring(35, 43));
printOut(text.indexOf("earth"));

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
if(5>3);
    printOut("5 is greater than 3");

if(7>=7);
    printOut("7 is greater or equal to 7");

if("a" > "b");
    printOut("a is greater than b");

if("1" < "a");
    printOut("1 is less than a");

if("2500" < "abcd");
    printOut("2500 is less than abcd");

if("arne"!="thomas");
    printOut("arne is not equal thomas");

if(2===5)
    printOut("2 is equal 5");
else 
    printOut("2 is not equal 5");

if("abcd">"bcd");
    printOut("abcd is greather than bcd");

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const text1 = Number.parseInt ("254");
printOut (text1);

const text2 = Number.parseFloat ("254");
printOut (text2);

const text3 = Number.parseInt ("57.23");
printOut (text3);

const text4 = Number.parseFloat ("57.23");
printOut (text4);

const text5 = Number.parseInt ("25 kroner");
printOut (text5 + " kroner")

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const r = Math.floor(Math.random() * 360) +1;

printOut(r);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const divison = Math.floor(131 / 7)

let fullweeks = divison
let modulus = 131 % 7

printOut(fullweeks);
printOut(modulus);