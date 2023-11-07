// 1. Convert celsius to fahrenheit
// ex: 60 cel -> 140 f

let celcius = 60;
console.log(`${(9 / 5) * celcius + 32} fahrenheit`);

// 2. check whether the number is odd or even
let number = 2;
let result = number % 2 === 0 ? "genap" : "ganjil";
console.log(`${number} adalah bilangan ${result} `);

// 3. Check whether the number is prime or not
// ex: 7 -> return 7 is a prime number
// ex: 6 -> return 6 is a prime number

number = 3;
let isPrime = true;
if (number < 2) isPrime = false
  else {
    for(let i = 2; i < number; i++){
      if (number % i == 0) {
        isPrime = false;
        break;
      }
    }
  }

console.log(number, isPrime ? "is a prime" : "is NOT prime");

// 4. find the sum of the numbers 1 to N
// ex : 5 -> 1 + 2 + 3 + 4 + 5 = 15
// ex : 3 -> 1 + 2 + 3 = 6

number = 5;
result = 0;
let message = `${number} -> `
for (let i = 1; i <= number; i++){
  message += i === number ? i : `${i} + `
  result += i
}

console.log(`${message} = ${result}`);

// 5. find the factorial of a number
// ex: 4! -> 4 x 3 x 2 x 1 = 24
// ex: 6! -> 6 x 5 x 4 x 3 x 2 x 1 = 720
number = 4;
message = "-> ";
result = 1;
for (let i = 1; i <= number; i++) {
  result *= i;
  message += i === number ? i : `${i} x `;
}
console.log(`${number} ${message} = ${result}`);

// 6. Write a code to print the first N fibonacci numbers
// ○ Example: 15 → 610
number = 15;
let beforeNumb = 0;
let currentNumb = 1;
let nextNumb;

for (let i = 2; i <= number; i++){
  nextNumb = beforeNumb + currentNumb
  beforeNumb = currentNumb
  currentNumb = nextNumb 
}
console.log(nextNumb);
