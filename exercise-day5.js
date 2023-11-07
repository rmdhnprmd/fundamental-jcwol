/*
  Write a function to get the lowest, highest and average value in the array 
  (with and without sort function).
  a. Example : arr = [12, 5, 23, 18, 4, 45, 32] 
  → {lowest : 4, highest: 45, average: 19.8xxx}
*/
let arr = [12, 5, 23, 18, 4, 45, 32];

{
  const calc = (param) => {
    let result = { lowest: 0, highest: 0, average: 0 };
    let total = 0;
    for (let i = 0; i < param.length; i++) {
      if (param[i] > param[i + 1]) result.highest = param[i];
      else if (param[i] < param[i + 1]) result.lowest = param[i];

      total += param[i];
      result.average = parseFloat((total / param.length).toFixed(4));
    }
    return result;
  };
  console.log(calc(arr));
}

{
  const calc = (param) => {
    param.sort((a, b) => a - b);
    const lowest = param[0];
    const highest = param[param.length - 1];
    const sum = param.reduce((before, after) => before + after);
    const average = parseFloat((sum / param.length).toFixed(4));
    const result = { lowest: lowest, highest: highest, average: average };
    return result;
  };
  console.log(calc(arr));
}
{
  // cara purwadhika
  const lowest = arr.sort((a, b) => a - b)[0];
  const highest = arr.sort((a, b) => b - a)[0];
  const avg = (arr.reduce((sum, number) => sum + number) / arr.length).toFixed(
    4
  );
  console.log(`lowest: ${lowest}, highest: ${highest}, average: ${avg}`);
}
/*
  Write a function that takes an array of words and returns a string by concatenating the words in the array, separated by commas and - the last word - by an 'and'.¸separated by commas and - the last word - by an 'and'.
  Example : arr = ["apple", "banana", "cherry", "date"] → “apple,banana,cherry, and date”
*/
{
  let arr = ["apple", "banana", "cherry", "date"];
  const fruits = (param) => {
    let result = "";
    for (let i = 0; i < param.length; i++) {
      result += i === param.length - 1 ? ` and ${param[i]}` : `${param[i]},`;
      // if (i === (arr.length - 1)){
      //   result += `and ${arr[i]}`
      // } else {
      //   result += `${arr[i]}, `
      // }
    }
    return result;
  };
  console.log(fruits(arr));
}

/*
  Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are of the same length.
  Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4]
*/
{
  let arr_1 = [1, 2, 3];
  let arr_2 = [3, 2, 1];

  // use for loop
  const arrTwoSum = (param1, param2) => {
    let result = [];
    for (let i = 0; i < param1.length; i++) {
      result.push(param1[i] + param2[i]);
    }
    return result;
  };

  console.log(arrTwoSum(arr_1, arr_2));

  // use method map
  let result = arr_1.map((value, index) => value + arr_2[index])
  console.log(result)
}

/*
  Write a function that adds an element to the end of an array. However, the element should only be added if it is not already in the array.
a. Example : arr = [1, 2, 3, 4], newElement = 4 → [1, 2, 3, 4]
b. Example : arr = [1, 2, 3, 4], newElement = 7 → [1, 2, 3, 4, 7]
*/
{
  let arr = [1, 2, 3, 4];
  const addsEl = (array, input) => {
    if (!array.includes(input)) array.push(input);
  };
  addsEl(arr, 4);
  console.log(arr);
}

/*
  Write a function to remove all odd numbers in an array and return a new array that contains even numbers only
a. Example : numbers = [1, 2, 3, 4, 5, 6] → [2, 4, 6]
*/
{
  let arr = [1, 2, 3, 4, 5, 6];

  // use for loop
  const evenOnly = (array) => {
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 == 1) {
        array.splice(i, 1);
      }
    }
  };
  evenOnly(arr);
  console.log(arr);

  // use method filter
  const result = arr.filter((value) => value % 2 == 0)
  console.log(result) 
}

/*
  Write a function to insert multiple given integer (not an array) 
  to an array and have a maximum size input. 
  The array can only have a maximum size from a given input. 
  (if the maximum size of the given input is 5 than the array can only contain 5 elements).
  a. Example :
  maxSize = 5, given integers is 5, 10, 24, 3, 6, 7, 8
  The function will return [5, 10, 24, 3, 6]
*/
{
  let arr = [5, 10, 24, 3, 6, 7, 8];
  let maxSize = 5;

  const multipleGiven_1 = (array, maxNum) => {
    let result = [];
    for (let i = 0; i < array.length; i++) {
      if (i < maxNum) result.push(arr[i]);
    }
    return result;
  };
  console.log(multipleGiven_1(arr, maxSize));

  // with filter method
  const multipleGiven_2 = (array, maxNum) => {
    return array.filter((value, index) => index < maxNum);
  };
  console.log(multipleGiven_2(arr, maxSize));

  // with cara purwadhika
  const insertArr = (maxNum, ...array) => {
    array.length = maxNum;
    return array;
  };
  console.log(insertArr(maxSize, ...arr));
}

/* 
  Write a function that will combine 2 given array into one array
a. Example : arr1 = [1, 2, 3], arr2 = [4, 5, 6] → [1, 2, 3, 4, 5, 6]
*/
{
  let arr1 = [1, 2, 3],
    arr2 = [4, 5, 6];
  // with spread syntax
  const combineArray_1 = (array1, array2) => {
    return (result = [...array1, ...array2]);
  };
  console.log(combineArray_1(arr1, arr2));

  // with concat method
  const combineArray_2 = (array1, array2) => {
    return (result = array1.concat(array2));
  };
  console.log(combineArray_2(arr1, arr2));
}

/*
// MASIH BINGUNG
  Write a function to find duplicate values in an array
a. Example : arr = [1, 2, 2, 2, 3, 3, 4, 5, 5] → [2, 3, 5]
*/
{
  let arrs = [1, 2, 2, 2, 3, 3, 4, 5, 5];
  const duplicateArr = (arrays) => {
    const duplicate = [];
    const seen = {};

    for (const arr of arrays) {
      if (seen[arr] === undefined) {
        seen[arr] = 1;
      } else {
        if (seen[arr] === 1) {
          duplicate.push(arr);
        }
        seen[arr]++;
      }
    }
    return duplicate;
    // console.log(seen)
  };
  console.log(duplicateArr(arrs));

  // with method filter
  const findDuplicates = (arr) => {
    const duplicates = arr.filter((value, index) => {
      return arr.indexOf(value) !== index && arr.lastIndexOf(value) === index;
    });
    return duplicates; 
  };
  console.log(findDuplicates(arrs));
}
/*
  Write a function to find the difference in 2 given array
a. Example : arr1 = [1, 2, 3, 4, 5], arr2 = [3, 4, 5, 6, 7] → [1, 2, 6, 7]
*/
{
  // use for of
  let arr1 = [1, 2, 3, 4, 5],
    arr2 = [3, 4, 5, 6, 7];
  let resultDiff = [];

  for (const arr of arr1) {
    if (!arr2.includes(arr)) resultDiff.push(arr);
  }
  for (const arr of arr2) {
    if (!arr1.includes(arr)) resultDiff.push(arr);
  }
  console.log(resultDiff);
}
{
  // use filter method
  const findArrayDifference = (arr1 = [], arr2 = []) => {
    let difference1 = arr1.filter((item) => !arr2.includes(item)),
      difference2 = arr2.filter((item) => !arr1.includes(item));

    return [...difference1, ...difference2];
  };

  let arr1 = [1, 2, 3, 4, 5],
    arr2 = [3, 4, 5, 6, 7];
  console.log(findArrayDifference(arr1, arr2));
}

/*
  Based on the array below write a function that will return primitive data types only. let
  arr = [1, [], undefined, {}, "string", {}, []];
  a. The function will return [1, undefined, “string”]
*/
{
  let arr = [1, [], undefined, {}, "string", {}, []];
  const getPrimitiveValues = (arr) => {
    return arr.filter((item) => {
      return (
        (typeof item !== "object" && typeof item !== "function") ||
        item === null
      );
    });
  };
  console.log(getPrimitiveValues(arr));
}

/*
  Write a function from a given array of numbers and return the second smallest number
a. Example : numbers = [5, 3, 1, 7, 2, 6] → 2
*/
{
  //use slice & sort
  let numbers = [5, 3, 1, 7, 2, 6];
  const secondSmallest = (array) => {
    const sorted = array.slice().sort((a, b) => a - b);
    return sorted[1];
  };
  console.log(secondSmallest(numbers));
}

/*
  Write a function from a given array of mixed data types and return the sum of all the number
a. Example : mixedArray = ["3", 1, "string", null, false, undefined, 2] → 3
*/
{
  const mixedArray = ["3", 1, "string", null, false, undefined, 2];
  const sumOnlyNum = (array) => {
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
      if (typeof array[i] === "number") {
        sum += array[i];
      }
    }
    return sum;
  };
  console.log(sumOnlyNum(mixedArray));
}

/*
  Write a function from the below array of number that will return sum of duplicate values. let
  arr = [10, 20, 40, 10, 50, 30, 10, 60, 10];
a. The function will return 40
*/
{
  // use filter & reduce
  let arr = [10, 20, 40, 10, 50, 30, 10, 60, 10];

  const duplicate = (array) => {
    const duplicates = array.filter(
      (elm) => array.indexOf(elm) !== array.lastIndexOf(elm)
    );
    return duplicates.reduce((a, b) => a + b);
  };
  console.log(duplicate(arr));
}

/*
  Write a game of rock, paper, scissor function that will return 'Win' or 'Lose'. The function will randomly pick
  between rock, paper, or scissor.
  a. Example: if you throw a rock as an argument and the function pick a scissor then it will return 'Win'
*/
{
  function rockPaperScissors(playerChoice = '') {
    const options = ["rock", "paper", "scissors"];
    const playerIndex = options.indexOf(playerChoice.toLowerCase());
    const computerChoice = options[Math.floor(Math.random() * 3)];
    console.log(`Your chose: ${options[playerIndex]}`)
    console.log("Computer chose: " + computerChoice);

    if (playerChoice === computerChoice) {
      return "Tie";
    } else if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "scissors" && computerChoice === "paper")
    ) {
      return "You Win";
    } else {
      return "You Lose";
    }
  }
  console.log(`Hasil: ${rockPaperScissors('paper')}`);
}
