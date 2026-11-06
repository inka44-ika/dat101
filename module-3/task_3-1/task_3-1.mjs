"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");

const wakeUpTime = 7;
const time = 10;
if (wakeUpTime === time) { 
    printOut("Take the bus!");
}else if (time === 8){ 
    printOut("Take the train!");
}else{ 
    printOut ("Take the car!");
}



printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");

const part4Number = 0;
if(part4Number > 0){ 
    printOut("The number is positive.");
}else if(part4Number < 0){ 
    printOut("The number is negative.")
}else{ 
    printOut("The number is zero!");
}


printOut("--- Part 6 og 7----------------------------------------------------------------------------------------------");

const imageMinSize = 4;
const imageMaxSize = 6;
const imageUserSize = Math.floor(Math.random() * 8) + 1;
printOut(`Image User Size = ${imageUserSize}`);
if(imageUserSize >= imageMinSize){ 
    if(imageUserSize <= imageMaxSize){
        printOut("Thank you");
    }else {
        printOut("The image is too large");
    }
}else{
    printOut("The image is too small!");
}


printOut("--- Part 8 ----------------------------------------------------------------------------------------------");

const monthlist = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const no0Month = monthlist.length;
const monthName = monthlist[Math.floor(Math.random() * no0Month)];

if (monthName.includes("r")) {
    printOut("The month is " + monthName + " and you need to take vitamin D");
} else {
    printOut("The month is " + monthName + " and you do not need to take vitamin D")
}


printOut("--- Part 9 ----------------------------------------------------------------------------------------------");

switch(monthName){
case "January":
case "March":
case "May":
case "July":
case "August":
case "October":
case "December":
    printOut("31 Days in month.");
    break;
case "February":
    printOut("31 Days in month.");
    break;
default:
printOut("30 Days in month.");
}

printOut("--- Part 10 ---------------------------------------------------------------------------------------------");

if(monthName === "March" || monthName === "May"){
    printOut("Sorry, the gallery is closed!");
}  else if( monthName === "April"){
    printOut("Sorry the gallery is closed, you are welcome into the premiss next door!");
}   else {
    printOut("Welcome to my gallery! 👅")
} 