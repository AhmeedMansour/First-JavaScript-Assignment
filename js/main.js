function fun1() {
  var number = Number(window.prompt("Enter a number:"));
  document.getElementById("epsilon").innerHTML = "You entered: " + number;
}
/////////////////////////////////////////////////////////////////
// 2-Write a program that take number from user then print yes if that number can divide by 3 and 4 otherwise print no
function fun2() {
  var num = window.prompt("Enter Number");
  if (num % 3 == 0 && num % 4 == 0) {
    document.getElementById("demo").innerHTML = "Output is : Yes";
  } else {
    document.getElementById("demo").innerHTML = "Output is : No";
  }
}

///////////////////////////////////////////////////////////////////////////////////////////
// 3-Write a program that allows the user to insert 2 integers then print the max

function fun3() {
  var num1 = Number(window.prompt("Enter 1st Number"));
  var num2 = Number(window.prompt("Enter 2nd Number"));
  if (num1 > num2) {
    document.getElementById("beta").innerHTML =
      "The Max Number is" + " " + num1;
  } else if (num1 < num2) {
    document.getElementById("beta").innerHTML =
      "The Max Number is" + " " + num2;
  }else if (num1 == num2) {
    document.getElementById("beta").innerHTML =
      "The two Numbers are equal:" + " " + num2;
  }
  else{
    document.getElementById("beta").innerHTML = (`Invalid Number`)
  }
}
///////////////////////////////////////////////////////////////////////////////////////////
// 4- Write a program that allows the user to insert an integer then print negative if it is negative number otherwise print positive.


function fun4() {
  var num = Number(window.prompt("Enter a Number"));

  if (num < 0) {
    document.getElementById('gamma').innerHTML = ('Output: Negative')
  }
  else if (num > 0) {
    document.getElementById('gamma').innerHTML = ('Output: Positive')
  }
  else {
    document.getElementById('gamma').innerHTML = ('Output: Zero')
  }
}
///////////////////////////////////////////////////////////////////////////////////////////
// 5-Write a program that take 3 integers from user then print the max element and the min element.
function fun5() {
  var num1 = Number( window.prompt("Enter 1st Number") )
  var num2 = Number( window.prompt("Enter 2nd Number") )
  var num3 = Number( window.prompt("Enter 3rd Number") )
  if (num1 > num2 && num1 > num3) {
    document.getElementById('fun51').innerHTML = ('The Max Number is') + (' ') + num1
    if (num2 < num1 && num2 < num3) {
      document.getElementById('fun52').innerHTML = ('The Min Number is') + (' ') + num2
    }
    else {
      document.getElementById('fun52').innerHTML = ('The Min Number is') + (' ') + num3
    }
  }
  else if (num2 > num3 && num2 > num1) {
    document.getElementById('fun51').innerHTML = ('The Max Number is') + (' ') + num2
    if (num1 < num2 && num1 < num3) {
      document.getElementById('fun52').innerHTML = ('The Min Number is') + (' ') + num1
    }
    else {
      document.getElementById('fun52').innerHTML = ('The Min Number is') + (' ') + num3
    }
  }
  else if (num3 > num2 && num3 > num1) {
    document.getElementById('fun51').innerHTML = ('The Max Number is') + (' ') + num3
    if (num2 < num1 && num2 < num3) {
      document.getElementById('fun52').innerHTML = ('The Min Number is') + (' ') + num2
    }
    else {
      document.getElementById('fun52').innerHTML = ('The Min Number is') + (' ') + num1
    }
  }
}
///////////////////////////////////////////////////////////////////////////////////////////
// 6-Write a program that allows the user to insert integer number then check If a number is oven or odd


function fun6() {
  var num = Number(window.prompt("Enter Number"));
  if (num % 2 == 0) {
    document.getElementById('fun6').innerHTML = ('Output: even')
  }
  else {
    document.getElementById('fun6').innerHTML = ('Output: odd')
  }
}
///////////////////////////////////////////////////////////////////////////////////////////
// 8-Write a program that take character from user then if it is vowel chars (a,e,I,o,u) then print vowel otherwise print consonant

function fun7() {
  var letter = window.prompt("Enter a letter");
  if (letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u" || letter == "A" || letter == "E" || letter == "I" || letter == "O" || letter == "U") {
    document.getElementById('fun7').innerHTML = ('Output: vowel')
  }
  else {
    document.getElementById('fun7').innerHTML = ('Output: consonant')
  }
}

///////////////////////////////////////////////////////////////////////////////////////////
//9- Write a program that allows user to insert integer then print all numbers between 1 to that’s number

function fun8() {
  var output = " "
  var num = window.prompt('Enter a Number')
  for (var i = 1; i <= num; i++) {
    output += i + (" ")
    document.getElementById('fun8').innerHTML = ("Output is:") + output
  }
}

/////////////////////////////////////////////////////////////////////////////////////////////
// 10 -Write a program that allows user to insert integer then print a multiplication table up to 12.

function fun9() {
  var output = " "
  var num = window.prompt('Enter a Number')
  for (var i = 1; i <= 12; i++) {

    var mult = (num * i)
    output += mult + (" ")
    document.getElementById('fun9').innerHTML = ("Output is:") + output

  }
}

/////////////////////////////////////////////////////////////////////////////////////////////
// 11-Write a program that allows to user to insert number then print all even numbers between 1 to this number


function fun10() {
  var output = " ";
  var num = window.prompt("Enter a Number");
  for (var i = 1; i <= num; i++) {
    if (i % 2 == 0) {
      output += i + (" ")
      document.getElementById('fun10').innerHTML = ("Output is:") + output
    }

  }
}

///////////////////////////////////////////////////////////////////////////////////////////
// 12-Write a program that take two integers then print the power

function fun11() {
  var num1 = window.prompt("Enter First Number");
  var num2 = window.prompt("Enter Second Number");
  var output = " ";
  output = num1 ** num2
  document.getElementById('fun11').innerHTML = ("Output is: ") + output
}

///////////////////////////////////////////////////////////////////////////////////////////
// 13-Write a program to enter marks of five subjects and calculate total, average and percentage.


function fun12() {
  var num1 = Number ( window.prompt("Enter First Subject Mark"));
  var num2 = Number ( window.prompt("Enter Second Subject Mark"));
  var num3 = Number ( window.prompt("Enter Third Subject Mark"));
  var num4 = Number ( window.prompt("Enter Fifth Subject Mark"));
  var num5 = Number ( window.prompt("Enter Sixth Subject Mark"));

  sum = (Number(num1) + Number(num2) + Number(num3) + Number(num4) + Number(num5));
  avg = (Number(num1) + Number(num2) + Number(num3) + Number(num4) + Number(num5)) / 5
  percentage = (Number(num1) + Number(num2) + Number(num3) + Number(num4) + Number(num5)) / 500 * 100
  document.getElementById('fun121').innerHTML = ("Total Marks =  ") + sum
  document.getElementById('fun122').innerHTML = ("Average Marks =  ") + avg
  document.getElementById('fun123').innerHTML = ("Percentage =  ") + percentage + ("%")

}


///////////////////////////////////////////////////////////////////////////////////////////
// 14- Write a program to input month number and print number of days in that month.


function fun13() {
  var num = window.prompt("Enter Month Number");
  var output = " ";
  if (num == 1 || num == 3 || num == 5 || num == 7 || num == 8 || num == 10 || num == 12) {

    output = 31
    document.getElementById('fun13').innerHTML = ("Days in Month: ") + output
  }
  else if (num == 2) {
    output = 29
    document.getElementById('fun13').innerHTML = ("Days in Month: ") + output
  }

  else if (num == 4 || num == 6 || num == 9 || num == 11) {
    output = 30
    document.getElementById('fun13').innerHTML = ("Days in Month: ") + output
  }
  else {
    document.getElementById('fun13').innerHTML = ("InValid Number")
  }
}

///////////////////////////////////////////////////////////////////////////////////////////
// 15- Write a program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer , Find percentage and grade


function fun14() {
  var output = " ";
  var num1 = window.prompt("Enter First Subject Mark");
  var num2 = window.prompt("Enter Second Subject Mark");
  var num3 = window.prompt("Enter Third Subject Mark");
  var num4 = window.prompt("Enter Forth Subject Mark");
  var num5 = window.prompt("Enter Fifth Subject Mark");

  if (num1 >= 90) {
    document.getElementById('fun141').innerHTML = ("Percentage >= ") + Number(num1) + (`% :`) + (" ") + ("Grade A")
  }
  else if (num1 >= 70) {
    document.getElementById('fun141').innerHTML = ("Percentage >= ") + Number(num1) + (`% :`) + (" ") + ("Grade B")
  }
  else if (num1 >= 60) {
    document.getElementById('fun141').innerHTML = ("Percentage >= ") + Number(num1) + (`% :`) + (" ") + ("Grade C")
  }
  else if (num1 >= 50) {
    document.getElementById('fun141').innerHTML = ("Percentage >= ") + Number(num1) + (`% :`) + (" ") + ("Grade D")
  }
  else if (num1 >= 40) {
    document.getElementById('fun141').innerHTML = ("Percentage >= ") + Number(num1) + (`% :`) + (" ") + ("Grade E")
  }
  else if (num1 < 40) {
    document.getElementById('fun141').innerHTML = ("Percentage >= ") + Number(num1) + (`% :`) + (" ") + ("Grade F")
  }
  else {
    document.getElementById('fun141').innerHTML = ("InValid Number")
  }

  if (num2 >= 90) {
    document.getElementById('fun142').innerHTML = ("Percentage >= ") + Number(num2) + (`% :`) + (" ") + ("Grade A")
  }
  else if (num2 >= 70) {
    document.getElementById('fun142').innerHTML = ("Percentage >= ") + Number(num2) + (`% :`) + (" ") + ("Grade B")
  }
  else if (num2 >= 60) {
    document.getElementById('fun142').innerHTML = ("Percentage >= ") + Number(num2) + (`% :`) + (" ") + ("Grade C")
  }
  else if (num2 >= 50) {
    document.getElementById('fun142').innerHTML = ("Percentage >= ") + Number(num2) + (`% :`) + (" ") + ("Grade D")
  }
  else if (num2 >= 40) {
    document.getElementById('fun142').innerHTML = ("Percentage >= ") + Number(num2) + (`% :`) + (" ") + ("Grade E")
  }
  else if (num2 < 40) {
    document.getElementById('fun142').innerHTML = ("Percentage >= ") + Number(num2) + (`% :`) + (" ") + ("Grade F")
  }
  else {
    document.getElementById('fun142').innerHTML = ("InValid Number")
  }

  if (num3 >= 90) {
    document.getElementById('fun143').innerHTML = ("Percentage >= ") + Number(num3) + (`% :`) + (" ") + ("Grade A")
  }
  else if (num3 >= 70) {
    document.getElementById('fun143').innerHTML = ("Percentage >= ") + Number(num3) + (`% :`) + (" ") + ("Grade B")
  }
  else if (num3 >= 60) {
    document.getElementById('fun143').innerHTML = ("Percentage >= ") + Number(num3) + (`% :`) + (" ") + ("Grade C")
  }
  else if (num3 >= 50) {
    document.getElementById('fun143').innerHTML = ("Percentage >= ") + Number(num3) + (`% :`) + (" ") + ("Grade D")
  }
  else if (num3 >= 40) {
    document.getElementById('fun143').innerHTML = ("Percentage >= ") + Number(num3) + (`% :`) + (" ") + ("Grade E")
  }
  else if (num3 < 40) {
    document.getElementById('fun143').innerHTML = ("Percentage >= ") + Number(num3) + (`% :`) + (" ") + ("Grade F")
  }
  else {
    document.getElementById('fun143').innerHTML = ("InValid Number")
  }

  if (num4 >= 90) {
    document.getElementById('fun144').innerHTML = ("Percentage >= ") + Number(num4) + (`% :`) + (" ") + ("Grade A")
  }
  else if (num4 >= 70) {
    document.getElementById('fun144').innerHTML = ("Percentage >= ") + Number(num4) + (`% :`) + (" ") + ("Grade B")
  }
  else if (num4 >= 60) {
    document.getElementById('fun144').innerHTML = ("Percentage >= ") + Number(num4) + (`% :`) + (" ") + ("Grade C")
  }
  else if (num4 >= 50) {
    document.getElementById('fun144').innerHTML = ("Percentage >= ") + Number(num4) + (`% :`) + (" ") + ("Grade D")
  }
  else if (num4 >= 40) {
    document.getElementById('fun144').innerHTML = ("Percentage >= ") + Number(num4) + (`% :`) + (" ") + ("Grade E")
  }
  else if (num4 < 40) {
    document.getElementById('fun144').innerHTML = ("Percentage >= ") + Number(num4) + (`% :`) + (" ") + ("Grade F")
  }
  else {
    document.getElementById('fun144').innerHTML = ("InValid Number")
  }

  if (num5 >= 90) {
    document.getElementById('fun145').innerHTML = ("Percentage >= ") + Number(num5) + (`% :`) + (" ") + ("Grade A")
  }
  else if (num5 >= 70) {
    document.getElementById('fun145').innerHTML = ("Percentage >= ") + Number(num5) + (`% :`) + (" ") + ("Grade B")
  }
  else if (num5 >= 60) {
    document.getElementById('fun145').innerHTML = ("Percentage >= ") + Number(num5) + (`% :`) + (" ") + ("Grade C")
  }
  else if (num5 >= 50) {
    document.getElementById('fun145').innerHTML = ("Percentage >= ") + Number(num5) + (`% :`) + (" ") + ("Grade D")
  }
  else if (num5 >= 40) {
    document.getElementById('fun145').innerHTML = ("Percentage >= ") + Number(num5) + (`% :`) + (" ") + ("Grade E")
  }
  else if (num5 < 40) {
    document.getElementById('fun145').innerHTML = ("Percentage >= ") + Number(num5) + (`% :`) + (" ") + ("Grade F")
  }
  else {
    document.getElementById('fun145').innerHTML = ("InValid Number")
  }
}

///////////////////////////////////////////////////////////////////////////////////////////
// ******************************** Using switch case*******************************
///////////////////////////////////////////////////////////////////////////////////////////
// 16- Write a program to print total number of days in month

function fun15() {
  var output = " ";
  var month = Number(window.prompt("Enter Month Number"))
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      output = 31;
      document.getElementById('fun15').innerHTML = ("Days in Month: ") + output
      break;

    case 2:
      output = 28;
      document.getElementById('fun15').innerHTML = ("Days in Month: ") + output
      break;

    case 4:
    case 6:
    case 9:
    case 11:
      output = 30;
      document.getElementById('fun15').innerHTML = ("Days in Month: ") + output
      break;

    default:
      document.getElementById('fun15').innerHTML = ("Invalid Number")
  }

}
// 17-Write a program to check whether an alphabet is vowel or consonant


function fun16() {
  var letter = window.prompt("Enter a Letter");
  switch (letter) {
      case "a":
      case "e":
      case "i":    
      case "o":
      case "u":
      case "A":
      case "E":
      case "I":
      case "O":
      case "U":
      document.getElementById("fun16").innerHTML = "Output: vowel";
      break;
  
      
      default:
          document.getElementById("fun16").innerHTML = "Output: Consonant";
  }

}

///////////////////////////////////////////////////////////////////////////////////////////
// 17 -Write a program to find maximum between two numbers


function fun17() {
  var num1 = Number(window.prompt("Enter First Number"));
  var num2 = Number(window.prompt("Enter Second Number"));
 switch (true) {
  case (num1 > num2):
  document.getElementById("fun17").innerHTML = "Maximum Number is : " + num1;
  break;

  case (num2 > num1):
    document.getElementById("fun17").innerHTML = "Maximum Number is : " + num2;
    break;
  default:
    document.getElementById("fun19").innerHTML = "Invalid Number";

    break;
 }

}


///////////////////////////////////////////////////////////////////////////////////////////
// 18 - Write a program to check whether a number is even or odd


function fun18() {
  var num = Number(window.prompt("Enter a Number"));

  switch (num % 2) {
    case 0:
      document.getElementById("fun18").innerHTML = "Output: Even";
      break;
    case 1:
      document.getElementById("fun18").innerHTML = "Output: Odd";
      break;
    default:
      document.getElementById("fun18").innerHTML = "Invalid input";
      break;
  }

}

///////////////////////////////////////////////////////////////////////////////////////////
// 19 - Write a program to check whether a number is positive or negative or zero


function fun19() {
  var num = Number(window.prompt("Enter a Number"));
  switch (true) {
      case (num > 0):
          document.getElementById("fun19").innerHTML = "Output: Positive";
          break;
          case (num < 0):
          document.getElementById("fun19").innerHTML = "Output: Negative";
          break;
          case (num == 0):
          document.getElementById("fun19").innerHTML = "Output: Zero";
          break;
  
      default:
          document.getElementById("fun19").innerHTML = "Invalid input";
          break;
  }

}
///////////////////////////////////////////////////////////////////////////////////////////
// 20 -Write a program to create Simple Calculator
// to write a calc you need 3 things >> 1- first input ----------- 2- 2nd input -------------- 3- operator

function fun20() {
  var num1 = Number(window.prompt("Enter First Number"));
  var operator = window.prompt("Enter the Operator + , - , * , /");
  var num2 = Number(window.prompt("Enter Second Number"));
  
  
  switch (operator) {
    case "+":
      var output = num1 + num2;
      document.getElementById("fun20").innerHTML = "Output: " + output;
      break;
    case "-":
      var output = num1 - num2;
      document.getElementById("fun20").innerHTML = "Output: " + output;
      break;
    case "*":
      var output = num1 * num2;
      document.getElementById("fun20").innerHTML = "Output: " + output;
      break;
    case "/":
      var output = num1 / num2;
      document.getElementById("fun20").innerHTML = "Output: " + output;
      break;
    default:
      document.getElementById("fun20").innerHTML = "Invalid input";
      break;
  }

}
///////////////////////////////////////////////////////////////////////////////////////////
