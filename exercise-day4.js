/*
Create a function that can create a triangle pattern according to the height we provide like the
following :
  1
  1 2
  1 2 3
  1 2 3 4
  1 2 3 4 5

 Parameters : height → triangle height
 Example input: 5
*/

const trianglePattern = (value) => {
  let result = "";
  for (i = 1; i <= value; i++) {
    for (j = 1; j <= i; j++) {
      result += ` ${j}`;
    }
    result += `\n`;
  }
  return console.log(result);
};
trianglePattern(5);

/*
Create a function that receiving array
as input, and this function can find
maximum value in array without
using built in method in javascript.
 Parameters : array
 Output: number

 Example input: [10, 55, 79, 32]
 Example output: 79
*/
// let arrs = [10, 55, 79, 32];

const maxNumb = (...value) => {
  let maxValue = 0;

  for (let i = 0; i < value.length; i++)
    if (maxValue < value[i]) maxValue = value[i];
  return console.log(maxValue);
};
maxNumb(10, 55, 79, 32);

/*
Create a function that can create a triangle pattern according to the height we provide like the
following :
  01
  02 03
  04 05 06
  07 08 09 10

Parameters : height → triangle height
*/

const triangleNumber = (height) => {
  let currentNumb = 1;
  for (let i = 1; i <= height; i++) {
    let row = "";
    for (j = 1; j <= i; j++) {
      row += currentNumb > 9 ? `${currentNumb} ` : `0${currentNumb} `;
      currentNumb++;
    }
    console.log(row);
  }
};
triangleNumber(4);

/*
Create a function that can loop the number of times according 
to the input we provide, and will replace multiples of 3 with "Fizz", 
multiples of 5 with "Buzz", multiples of 3 and 5 with "FizzBuzz".
● Parameters : n → total looping
○ Example: n = 6 →1, 2, Fizz, 4, Buzz, Fizz
○ Example: n = 15 → 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 12, 13, 14, FizzBuzz

Jika suatu angka dapat dibagi 3, gantikan dengan kata Fizz
Jika suatu angka dapat dibagi 5, gantikan dengan kata Buzz
Jika suatu angka dapat dibagi 3 dan 5, gantikan dengan kata FizzBuzz
Jika kita ingin mencari nilai yang dapat dibagi oleh dua angka tertentu, maka bagilah dengan angka hasil perkalian dari dua nilai tersebut.
*/

const fizzBuzz = (value) => {
  let arrResult = []
  for (i = 1; i <= value; i++) {
    let result = i;
    if (i % 15 == 0) result = 'FizzBuzz';
    else if (i % 3 == 0) result = 'Fizz';
    else if (i % 5 == 0) result = 'Buzz';
    arrResult.push(result);
  }
  return arrResult.toString().replace(/,/g,' ')
};
console.log(fizzBuzz(20));

/*
  Create a function to calculate Body Mass Index (BMI)
  Formula : BMI = weight (kg) / (height (meter))2
  Don't forget to change from centimeter to meter
  Parameters : weight & height
  Return values :
○ < 18.5 return “less weight”
○ 18.5 - 24.9 return “ideal”
○ 25.0 - 29.9 return “overweight”
○ 30.0 - 39.9 return “very overweight”
○ > 39.9 return “obesity”
*/

const bmiCalc = (weight, height) => {
  let bmi = weight / Math.pow(height / 100, 2);
  if (bmi < 18.5) return "less weight";
  else if (bmi >= 18.5 && bmi <= 24.9) return "ideal";
  else if (bmi >= 25.0 && bmi <= 29.0) return "overweight";
  else if (bmi >= 30.0 && bmi <= 39.9) return "very overweight";
  else return "obesity";
};

console.log(bmiCalc(60, 160));

/*
Write a function to remove all odd numbers in an array and return a new array that contains even
numbers only
○ Example : [1,2,3,4,5,6,7,8,9,10] → [2,4,6,8,10]
*/

// use filter method
const evenArray = (...value) => {
  return value.filter((number) => number % 2 == 0);
};
console.log(evenArray(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// use for loop
let evenList = (...arrs) => {
  let even = [];
  for (let i = 0; i < arrs.length; i++) {
    if (arrs[i] % 2 == 0) {
      even.push(arrs[i]);
    }
  }
  return even;
};
console.log(evenList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13));

/*
  Write a function to split a string and convert it into an array of words
  Example : “Hello World” → [“Hello”, “World”]
*/
{
  let arr = "Hello World";
  const inputStr = (param) => param.split(" ");
  console.log(inputStr(arr));
}