// Write a js program to find maximum between two numbers.

// var userFirstNumber =+ prompt("Write First Number");
// var userSecondNumber =+ prompt("Write Second Number");
// if (userFirstNumber>userSecondNumber) {
//     console.log(userFirstNumber,"is greater than",userSecondNumber)
// }
// else{
//     console.log(userSecondNumber,"is greater than",userFirstNumber)
// }


// Write a js program to find maximum between three numbers.

// var userFirstNumber =+ prompt("Write First Number");
// var userSecondNumber =+ prompt("Write Second Number");
// var userThirdNumber =+ prompt("Write third Number");
// if (userFirstNumber>userSecondNumber&&userSecondNumber>userThirdNumber) {
//     console.log(userFirstNumber,"is a maximum number")
// }
// else if(userSecondNumber>userFirstNumber&&userFirstNumber>userThirdNumber){
//     console.log(userSecondNumber,"is a maximum number")
// }
// else{
//     console.log(userThirdNumber,"is a maximun number")
// }

// Write a js program to check whether a number is negative, positive or zero.

// var userNumber =+ prompt("Write a Number");
// if(userNumber<0){
//     console.log("It is a negative number")
// }
// else if(userNumber>0){
//     console.log("It is a positive number")
// }
// else{
//     console.log("It is a Zero")
// }

// Write a js program to check whether a number is divisible by 5 and 11 or not.

// var userNumber =+ prompt("Write a Number");
// if(userNumber%5==0){
//     console.log(userNumber,"is divisible by 5")
// }
// else if(userNumber%11==0){
//     console.log(userNumber,"is divisible by 11")
// }
// else{
//     console.log(userNumber,"is not divided by 5 nor 11")
// }

// Write a js program to check whether a number is even or odd.


// var userNumber =+ prompt("Write a number");
// if(userNumber%2==0){
//     console.log("It is a even number")
// }
// else{
//     console.log("It is a odd number")
// }

// Write a js program to check whether a year is leap year or not.


// var year = prompt("Enter a year");
// if (year%4 == 0 || year%400 == 0 && year%100 != 0) {
//     console.log(year,"is a leap year")
// }
// else{
//     console.log(year,"is not a leap year")
// }


// Write a js program to check whether a character is alphabet or not.


// var userInput = prompt("Write a character");
// if (userInput>="A"&&userInput<="Z" || userInput>="a"&&userInput<="z") {
//     console.log("It is an alphabet")
// }
// else{
//     console.log("It is not an alphabet")
// }


// Write a js program to input any alphabet and check whether it is vowel or consonant.


// var userInput = prompt("Write a character").toLowerCase();
// if (userInput === "a" || userInput === "e" || userInput === "i" || userInput === "o" || userInput === "u"){
//     console.log("It is a Vowel")
// }
// else{
//     console.log("It is not an alphabet")
// }


// Write a js program to input any character and check whether it is alphabet, digit or special character.

// var userInput = prompt("Write a character");
// if (userInput>="A"&&userInput<="Z" || userInput>="a"&&userInput<="z") {
//     console.log("It is an alphabet")
// }
// else if(userInput>=0 || userInput<=9){
//     console.log("It is a Digit")
// }
// else{
//     console.log("It is a special character")
// }

// Write a js program to check whether a character is uppercase or lowercase alphabet.


// var userInput = prompt("Write a character");
// if (userInput>="A"&&userInput<="Z") {
//     console.log("It is an Upper Case Alphabet alphabet")
// }
// else if(userInput>="a"&&userInput<="z"){
//     console.log(" It is an Lower Case Alphabet alphabet")
// }


// Write a js program to input week number and print week day.



// // Prompt the user to input a week number
// const weekNumber = prompt("Enter a week number (0-6):");

// // Convert the input to a number
// const weekNum = Number(weekNumber);

// // Check if the input is valid
// if (weekNum >= 0 && weekNum <= 6) {
//   // Define weekday names
//   const sunday = "Sunday";
//   const monday = "Monday";
//   const tuesday = "Tuesday";
//   const wednesday = "Wednesday";
//   const thursday = "Thursday";
//   const friday = "Friday";
//   const saturday = "Saturday";
  
//   // Calculate the corresponding weekday
//   let dayOfWeek;
//   if (weekNum === 0) {
//     dayOfWeek = sunday;
//   } else if (weekNum === 1) {
//     dayOfWeek = monday;
//   } else if (weekNum === 2) {
//     dayOfWeek = tuesday;
//   } else if (weekNum === 3) {
//     dayOfWeek = wednesday;
//   } else if (weekNum === 4) {
//     dayOfWeek = thursday;
//   } else if (weekNum === 5) {
//     dayOfWeek = friday;
//   } else if (weekNum === 6) {
//     dayOfWeek = saturday;
//   }
  
//   // Print the corresponding weekday
//   console.log(`Weekday for week number ${weekNum} is ${dayOfWeek}`);
// } else {
//   console.log("Invalid week number entered.");
// }





// Write a js program to input month number and print number of days in that month.


// var monthNumber =+ prompt("Enter Month number");
// if (monthNumber===1 || monthNumber===3 || monthNumber===5 || monthNumber===7 || monthNumber===8 || monthNumber===10 || monthNumber===12) {
//     console.log("There are 31 days in this month")
// }
// else if(monthNumber===2){
//     console.log("This month has 28 Days and in Leap year it has 29 days")
// }
// else{
//     console.log("This month has 30 days")
// }


// Write a js program to count total number of notes in given amount.



// Prompt the user to input an amount
// const amount = prompt("Enter the amount:");

// // Convert the input to a number
// const amt = Number(amount);

// // Define the denominations of the notes as constants
// const note2000 = 2000;
// const note500 = 500;
// const note200 = 200;
// const note100 = 100;
// const note50 = 50;
// const note20 = 20;
// const note10 = 10;
// const note5 = 5;
// const note2 = 2;
// const note1 = 1;

// // Initialize a variable to keep track of the total number of notes
// let totalNotes = 0;

// // Count the number of 2000 rupee notes
// totalNotes += Math.floor(amt / note2000);
// amt %= note2000;

// // Count the number of 500 rupee notes
// totalNotes += Math.floor(amt / note500);
// amt %= note500;

// // Count the number of 200 rupee notes
// totalNotes += Math.floor(amt / note200);
// amt %= note200;

// // Count the number of 100 rupee notes
// totalNotes += Math.floor(amt / note100);
// amt %= note100;

// // Count the number of 50 rupee notes
// totalNotes += Math.floor(amt / note50);
// amt %= note50;

// // Count the number of 20 rupee notes
// totalNotes += Math.floor(amt / note20);
// amt %= note20;

// // Count the number of 10 rupee notes
// totalNotes += Math.floor(amt / note10);
// amt %= note10;

// // Count the number of 5 rupee notes
// totalNotes += Math.floor(amt / note5);
// amt %= note5;

// // Count the number of 2 rupee notes
// totalNotes += Math.floor(amt / note2);
// amt %= note2;

// // Count the number of 1 rupee notes
// totalNotes += amt;

// // Print the total number of notes to the console
// console.log(`Total number of notes: ${totalNotes}`);



// Write a js program to input angles of a triangle and check whether triangle is valid or not.


// var firstAngle =+ prompt("Input First Angle");
// var secondAngle =+ prompt("Input Second Angle");
// var thirdAngle =+ prompt("Input Third Angle");
// if (firstAngle+secondAngle+thirdAngle == 180) {
//     console.log("It is a triangle");
// }
// else{
//     console.log("It is not a triangle");
// }

// Write a js program to input all sides of a triangle and check whether triangle is valid or not.


// var firstSide =+ prompt("Input First side");
// var secondSide =+ prompt("Input Second side");
// var thirdSide =+ prompt("Input Third side");
// if (firstSide+secondSide>thirdSide ||
//     secondSide+thirdSide>firstSide ||
//     thirdSide+firstSide>secondSide)
//      {
//     console.log("It is a triangle");
// }
// else{
//     console.log("It is not a triangle");
// }


// Write a js program to check whether the triangle is equilateral, isosceles or scalene triangle.


// var firstSide =+ prompt("Input First side");
// var secondSide =+ prompt("Input Second side");
// var thirdSide =+ prompt("Input Third side");
// if(firstSide==secondSide && secondSide==thirdSide){
//     console.log("It is a equilateral triangle");
// }
// else if (firstSide==secondSide ||
//     secondSide==thirdSide ||
//     firstSide==thirdSide)
//      {
//     console.log("It is a isosceles triangle");
// }
// else{
//     console.log("It is a scalene triangle")
// }

// Write a js program to find all roots of a quadratic equation.


// var a =+ prompt("put value of a");
// var b =+ prompt("put value of b");
// var c =+ prompt("put value of c");

// function findRoots(a, b, c) {
//     var discriminant = b * b - 4 * a * c;
//     var root1, root2;
    
//     if (discriminant > 0) {
//       root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
//       root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
//       console.log("The roots are: " + root1 + " and " + root2);
//     } else if (discriminant == 0) {
//       root1 = -b / (2 * a);
//       console.log("The root is: " + root1);
//     } else {
//       var realPart = -b / (2 * a);
//       var imaginaryPart = Math.sqrt(-discriminant) / (2 * a);
//       console.log("The roots are: " + realPart + " + " + imaginaryPart + "i and " + realPart + " - " + imaginaryPart + "i");
//     }
//   }
//   findRoots(a, b, c);


// Write a js program to calculate profit or loss.


// var costPrice =+ prompt("enter cost price");
// var sellingPrice =+ prompt("enter selling price");

// function calculateProfitOrLoss(costPrice, sellingPrice) {
//     var profitOrLoss = sellingPrice - costPrice;
    
//     if (profitOrLoss > 0) {
//       console.log("You made a profit of " + profitOrLoss.toFixed(2) + " rupees.");
//     } else if (profitOrLoss < 0) {
//       console.log("You loss a loss of " + (-profitOrLoss.toFixed(2)) + " rupees.");
//     } else {
//       console.log("Tu Masti Kariya Shorya.");
//     }
//   }
//   calculateProfitOrLoss(costPrice, sellingPrice);

// Write a js program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following:
// Percentage >= 90% : Grade A
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage >= 40% : Grade E
// Percentage < 40% : Grade F

// var phy = 0;
// var che = 0;
// var bio = 0;
// var mat = 0;
// var com = 0;
// var totalEachMarks = 500;

// function gradeAndPercentage(phy, che, bio, mat, com) {
//   var totalGrade = phy + che + bio + mat + com;
//   var totalPercentage = (totalGrade / totalEachMarks) * 100;
  
//   if (totalPercentage < 40) {
//     console.log("Grade F");
//   } 
//   else if (totalPercentage >= 40 && totalPercentage < 60) {
//     console.log("Grade E");
//   }
//   else if (totalPercentage >= 60 && totalPercentage < 70) {
//     console.log("Grade D");
//   }
//   else if (totalPercentage >= 70 && totalPercentage < 80) {
//     console.log("Grade C");
//   }
//   else if (totalPercentage >= 80 && totalPercentage < 90) {
//     console.log("Grade B");
//   }
//   else if (totalPercentage >= 90 && totalPercentage <= 100) {
//     console.log("Grade A");
//   }
//   else{
//     console.log("Invalid marks entered");
//   }
// }

// phy =+ prompt("Enter marks of physics (out of 100)");
// if (phy > 100) {
//   console.log("Invalid marks entered for Physics");
// }
// else {
//   che =+ prompt("Enter marks of chemistry (out of 100)");
//   if (che > 100) {
//     console.log("Invalid marks entered for Chemistry");
//   }
//   else {
//     bio =+ prompt("Enter marks of biology (out of 100)");
//     if (bio > 100) {
//       console.log("Invalid marks entered for Biology");
//     }
//     else {
//       mat = +prompt("Enter marks of math (out of 100)");
//       if (mat > 100) {
//         console.log("Invalid marks entered for Math");
//       }
//       else {
//         com = +prompt("Enter marks of computer (out of 100)");
//         if (com > 100) {
//           console.log("Invalid marks entered for Computer");
//         }
//         else {
//         }
//     }
// }
// }
// }

// gradeAndPercentage(phy, che, bio, mat, com);


// Write a js program to input basic salary of an employee and calculate its Gross salary according to following:
// Basic Salary <= 10000 : HRA = 20%, DA = 80%
// Basic Salary <= 20000 : HRA = 25%, DA = 90%
// Basic Salary > 20000 : HRA = 30%, DA = 95%



// var basicSalary = prompt("Enter Your Basic Salary");

// function grossSalary(basicSalary) {
//   if (basicSalary <= 10000) {
//     var hra = (20/100) * basicSalary;
//     var da = (80/100) * basicSalary;
//     console.log(hra, "HRA");
//     console.log(da, "DA");
//   } 
//   else if(basicSalary <= 20000){
//     var hra = (25/100) * basicSalary;
//     var da = (90/100) * basicSalary;
//     console.log(hra, "HRA");
//     console.log(da, "DA");
//       }
//       else if(basicSalary>20000){
//         var hra = (30/100) * basicSalary;
//     var da = (95/100) * basicSalary;
//     console.log(hra, "HRA");
//     console.log(da, "DA");
//     }
//     else{
//         console.log("Invalid salary");
//     }
// }
    
// grossSalary(basicSalary);



//  Write a js program to input electricity unit charges and calculate total electricity bill according to the given condition:
// For first 50 units Rs. 0.50/unit
// For next 100 units Rs. 0.75/unit
// For next 100 units Rs. 1.20/unit
// For unit above 250 Rs. 1.50/unit
// An additional surcharge of 20% is added to the bill

// var unitCharges =+ prompt("enter the units");

// function totalAmount(unitCharges){
//     if (unitCharges<=50) {
//         var amountInRupee = unitCharges * 0.50;
//         // console.log(amountInRupee,"Rs");
//     }
//     else if(unitCharges<=100){
//         var amountInRupee = (50 * 0.50) + ((unitCharges - 50) * 0.75);
//         // console.log(amountInRupee,"Rs");
//     }
//     else if(unitCharges<=250){
//         var amountInRupee = (50 * 0.50) + (100 * 0.75) + ((unitCharges - 150) * 1.20);
//         // console.log(amountInRupee,"Rs");
//     }
//     else{
//         var amountInRupee = (50 * 0.50) + (100 * 0.75) + (100 * 1.20) + ((unitCharges - 250) * 1.50);
//         // console.log(amountInRupee,"Rs");
//     }
//     amountInRupee *= 1.20;
//     console.log("Total Electricity Bill: Rs. " + amountInRupee.toFixed(2));
// }

// totalAmount(unitCharges);






