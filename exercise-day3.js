//  1
/*
Write a code to display the multiplication table of a given integer.
○ Example : Number → 9
○ Output :
■ 9 x 1
■ 9 x 2
■ ...
■ 9 x 10
 */
let number = 9;
for (let i = 1; i <= 9; i++){
  console.log(`${number} x ${i} = ${number * i}`)
}

// 2
// Write a code to check whether a string is a palindrome or not.
// ○ Example : ‘madam’ → palindrome
let text = "makan";
let reverseText = "";
for (let i = text.length - 1; i >= 0; i--){
  reverseText += text.charAt(i)
}
console.log(reverseText === text ? `${text} is palindrome` : `${text} not palindrome`)

// 3
// Write a code to convert centimeter to kilometer.
// ○ Example : 100000 → “1 km”
let centimeter = 100000;
console.log(`${centimeter / 100000} km`);

// 4
// Write a code to format number as currency (IDR)
// ○ Example : 1000 → “Rp. 1.000,00”
number = 1000;
const formattedNumber = `${number} -> Rp. ${number.toLocaleString("id-ID")},00`;

console.log(formattedNumber);

// 5
// Write a code to remove the first occurrence of a given “search string” from a string
// ○ Example : string = “Hello world”, search string = “ell” → “Ho world”
text = "Hello world";
let search = "ell";
console.log(text.replace(search, ""));

let newText = "";

for (let i = 0; i < text.length; i++) {
  if (text.slice(i, i + search.length) === search) {
    i += search.length - 1;
  } else {
    newText += text[i];
  }
}

console.log(newText);


// 6
// Write a code to capitalize the first letter of each word in a string
// ○ Example : “hello world” → “Hello World”
text = "hello world";
let capitalize = "";
for (let i = 0; i < text.length; i++){
  if (i == 0 || text.charAt(i - 1) == ' ') {
    capitalize += text.charAt(i).toUpperCase()
  } else capitalize += text.charAt(i).toLowerCase() 
}

console.log(capitalize);

// 7
// Write a code to reverse a string.
// ○ Example : “hello” → “olleh”
text = "hello";
let reverse = "";
for(i = text.length -1; i >= 0;i--){
  reverse += text.charAt(i)
}
console.log(`${text} -> ${reverse}`);

// 8
// Write a code to swap the case of each character from string
// ○ Example : ‘The QuiCk BrOwN Fox’ -> ‘ tHE qUIcK bRoWn fOX’
text = "The QuiCk BrOwN Fox";
let swap = "";
for (i = 0; i < text.length; i++) {
  if (text.charAt(i) === text.charAt(i).toUpperCase())
    swap += text.charAt(i).toLocaleLowerCase();
  else swap += text.charAt(i).toUpperCase();
}
console.log(swap);

// 9
// Write a code to find the largest of two given integers
// ○ Example : num1 = 42, num2 = 27 → 42
let num1 = 42,
  num2 = 27;
console.log(num1, num2, "->", num1 > num2 ? num1 : num2);

// 10
// Write a conditional statement to sort three numbers
// ○ Example : num1 = 42, num2 = 27, num3 = 18 → 18, 27, 42
let num3 = 18;
let lowest = num1, middle = num1, highest = num1;
// lowest
if (num1 > num2) lowest = num2;
if (lowest > num3) lowest = num3;

// highest
if (num1 > num2) highest = num1;
if (highest < num3) highest = num3;

// middle
if (lowest != num1 && highest != num1) middle = num1;
else if (lowest != num2 && highest != num2) middle = num2;
else middle = num3
console.log(lowest, middle, highest);

// 11
// Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data
// type.
// ○ Example : “hello” → 1
let input = 'hello';
if(typeof input === 'string') console.log(1)
else if (typeof input === "number") console.log(2)
else console.log(3)

// 12
// Write a code to change every letter a into * from a string of input
// ○ Example : ‘An apple a day keeps the doctor away’ -> `*n *pple * d*y keeps the doctor *w*y`
text = 'An apple a day keeps the doctor away'
let replace = ''
for (let i = 0; i < text.length; i++){
  if (text.charAt(i).toLowerCase() == 'a') replace += '*'
  else replace += text.charAt(i)
}

console.log(replace);
console.log(text.replace(/a/gi, '*'))
