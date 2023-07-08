
//1- Write a program that allow to user enter number then print it

// var num = window.prompt();
// console.log(num);


//2- Write a program that take number from user then print yes if that number can divide by 3 and 4 otherwise print nov

// var numDiv = window .prompt ( "Enter number")
// if((numDiv/3  && numDiv/4) && numDiv%2==0){
// console.log("yes");
// }
// else{
//   console.log("no");
// }



//3- Write a program that allows the user to insert 2 integers then print the max


// function maxNumber(numberMax1,numberMax2) {
//   if(numberMax1 > numberMax2){
//     console.log(numberMax1);
//   }
//   else{
//     console.log(numberMax2);
//   }
// }
// maxNumber(Number(window.prompt()),Number(window.prompt()));

// 4- Write a program that allows the user to insert an integer then print negative if it is negative number otherwise print positive.

// var intNum = window.prompt();
// if(intNum < 0){
//   console.log("this is negative number");
// }
// else if(intNum > 0){
//   console.log("this is positive number");
// }


// 5-Write a program that take 3 integers from user then print the max element and the min element.

// function maxElement(num1,num2,num3){

// if((num1 > num2) && (num1 > num3)){
//   console.log(num1);
// }
// else if((num2 > num1) && (num2 > num3)){
//   console.log(num2);
// }
// else {
//   console.log(num3);
// }

// }
// maxElement(Number(prompt()),Number(prompt()),Number(prompt()))


// 6- Write a program that allows the user to insert integer number then check If a number is oven or odd

  // function check(num){
  //   if(num%2==0){
  //     console.log("even");
  //   }
  //   else{
  //     console.log("odd");
  //   }
  // }
  // check(window.prompt());



// 8- Write a program that take character from user then if it is vowel chars (a,e,I,o,u) then print vowel otherwise print consonant



// var num = prompt();

// if(num == "a" || num == "e" || num == "i" || num == "o" || num == "u"){
//   console.log("it is vowel chars");
// }
// else{
//   console.log("it is consonant");
// }





// 9- Write a program that allows user to insert integer then print all numbers between 1 to that’s number
  

    // function print(num){
    //   for(i=1; i<= num ; i++){
    //    console.log(i);
    //   }
    // }
    // print(window.prompt());



// 10- Write a program that allows user to insert integer then print a multiplication table up to 12.

    // var num =prompt();
    // for(i=1 ;i<=12; i++){
    //   console.log(i*num);
    // }


// 11-Write a program that allows to user to insert number then print all even numbers between 1 to this number


    // function printEven(num) {
    //   for(var i=1; i<num;i++){
    //     if(i%2==0){
    //       console.log(i);
    //     }
    //   }
    // }

    // printEven(prompt());


// 12 Write a program that take two integers then print the power
  

    // function power(num1,num2){
    //   var powerNum = num1**num2;
    //   console.log(powerNum);
    // }
    
    // power(4,3)

// 12- Write a program to enter marks of five subjects and calculate total, average and percentage.
// 14- Write a program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer, Find percentage and grade

// function calc(subj1,subj2,subj3,subj4,subj5){
//   var total = (subj1+ subj2 +subj3 + subj4 + subj5);
//   var average = total/5;
//   var percentage = (total/500) *100;
//   console.log("Total is " + total + " ,The Average is " + average + " And The percentage is "+ percentage );

//   if (percentage >= 90) {
//     console.log("grad A");
//   }
//   else if(percentage >=80){
//     console.log("grad B");
//   }
//   else if(percentage >=70){
//     console.log("grad C");
//   }
//   else if(percentage >=60){
//     console.log("grad D");
//   }
//   else if(percentage >=50){
//     console.log("grad E");
//   }
//   else {
//     console.log("grad F");
//   }
// }
// calc(Number(prompt()),Number(prompt()),Number(prompt()),Number(prompt()),Number(prompt()));


// 13-Write a program to input month number and print number of days in that month.


// (function(){
//   var month = Number(prompt())
//   if(month == 1|| month == 3 || month == 5 || month == 7 || month == 8 || month ==10 || month == 11 || month == 12)
//       {
//           console.log("31 days");
//       }
//       else if(month == 2)
//       {
//           console.log("28 or 29 days");
//       }
//       else if(month == 4 || month == 6 || month == 9)
//       {
//           console.log("30 days");
//       }
//       else
//       {
//           console.log("Invalid input! Please enter month number between (1-12).");
//       }
// })();

// 15- Write a program to print total number of days in month
// var month = Number(prompt())
// switch (month) {
//   case 1:
//   case 3:
//   case 5:
//   case 7:
//   case 8:
//   case 10:
//   case 12:
//     console.log("31 days");
//     break;
//   case 2:
//     console.log("28 or 29 days");
//     break;
//   case 4:
//   case 6:
//   case 9:
//   case 11:
//     console.log("30 days");
//     break;
//   default:
//     console.log("Invalid input! Please enter month number between (1-12).");
//     break;
// }




// 16- Write a program to check whether an alphabet is vowel or consonant

// var alphabet = prompt();

// switch (alphabet) {
//   case "a":
//   case "e":
//   case "i":
//   case "o":
//   case "u":
//     console.log("alphabet is vowel ");
//     break;
//   default: 
//     console.log("alphabet is consonant");
//     break;
// }


// 17- Write a program to find maximum between two numbers

// function maxx(num1,num2){
//   switch (num1> num2) {
//     case true:
//       console.log("num1 is larger than");
//       break;
  
//     default:
//       console.log("num2 is larger than");
//       break;
//   }
// }
// maxx(22,9);

// 18-Write a program to check whether a number is even or odd
// function checked(num){
//   switch(num%2==0){
//     case true:
//       console.log("even");
//       break;
//       default:
//       console.log("odd");
//       break;

//   }
// }
// checked(5);

// 19- Write a program to check whether a number is positive or negative or zero

// function checkNum(num) {
//   switch(num){
//     case 0:
//         console.log("zero");
//         break;
//     default:
//        switch(num > 0){
//         case true:
//           console.log("positive");
//         break;
//         default:
//           console.log("negative");
//        }
//     break;
  
//   }
// }
//   checkNum(Number(prompt()));



// 20- Write a program to create Simple Calculator


// var op = prompt('Enter operator ( either +, -, * or / ): ');

// var firstNum = Number(prompt());
// var secondNum = Number(prompt());
// var result;
// switch(op){
//   case "+":
//     result = firstNum + secondNum
//     console.log(" this is result = " + result);
//   break;
//   case "-":
//     result = firstNum - secondNum
//     console.log(" this is result = " + result);
//   break;
//   case "*":
//     result = firstNum * secondNum
//     console.log( " this is result = " + result);
//   break;
//   case "/":
//     result = firstNum / secondNum
//     console.log(" this is result = " + result);
//   break;
  
//   default:
//     console.log("Error! operator is not correct");
// }