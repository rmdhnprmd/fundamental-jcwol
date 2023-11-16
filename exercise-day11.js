/*
● Given an array nums of size n, return the majority element. The majority element is the element that
appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
● Example 1:
○ Input: nums = [3,2,3]
○ Output: 3
● Example 2:
○ Input: nums = [2,2,1,1,1,2,2]
○ Output: 2
*/
{
  // Boyer-Moore Voting Algorithm
  const majorityElement = (nums = []) => {
    let candidate,
      count = 0;

    for (let num of nums) {
      if (count === 0) candidate = num;
      count += num === candidate ? 1 : -1;
    }
    return candidate;
  };
  console.log(majorityElement([2, 2, 2, 1, 1, 1, 2]));
}

/*
  Create a function to convert roman numeral to integer.

  Example 1:
  Input: s = "III”
  Output: 3
  Explanation: III = 3.

  Example 2:
  Input: s = "LVIII"
  Output: 58
  Explanation: L = 50, V= 5, III = 3.

  Example 3:
  Input: s = "MCMXCIV"
  Output: 1994
  Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
*/
{
  function romanToInt(s) {
    const romanValues = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };

    let result = 0;

    for (let i = 0; i < s.length; i++) {
      const currentChar = s[i];
      const nextChar = s[i + 1];

      // If a smaller numeral appears before a larger numeral, subtract its value.
      if (romanValues[currentChar] < romanValues[nextChar]) {
        result += romanValues[nextChar] - romanValues[currentChar];
        i++; // Skip the next character as it has been considered.
      } else {
        result += romanValues[currentChar];
      }
    }

    return result;
  }

  // Example usage:
  const roman1 = "III";
  // console.log(romanToInt(roman1)); // Output: 3

  const roman2 = "LVIII";
  console.log(romanToInt(roman2)); // Output: 58

  const roman3 = "MCMXCIV";
  // console.log(romanToInt(roman3)); // Output: 1994
}
{

}

/*
   Given an integer numRows, return the first numRows of
  Pascal's triangle.
  In Pascal's triangle, each number is the sum of the two
  numbers directly above it as shown  →

  Example 1:
  Input: numRows = 5
  Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

  Example 2:
  Input: numRows = 1
  Output: [[1]]
*/
{
  function generatePascalsTriangle(numRows) {
    if (numRows <= 0) {
      return [];
    }

    const triangle = [[1]];

    for (let i = 1; i < numRows; i++) {
      const prevRow = triangle[i - 1];
      const currentRow = [1];

      for (let j = 1; j < i; j++) {
        currentRow[j] = prevRow[j - 1] + prevRow[j];
      }

      currentRow.push(1);
      triangle.push(currentRow);
    }

    return triangle;
  }

  // Example usage:
  const numRows1 = 5;
  console.log(generatePascalsTriangle(numRows1));
  // Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

  const numRows2 = 1;
  console.log(generatePascalsTriangle(numRows2));
  // Output: [[1]]
}
/*
  You are given an array prices where prices[i] is the price of a given stock on the ith day.
  You want to maximize your profit by choosing a single day to buy one stock and choosing a different
  day in the future to sell that stock.
  Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit,
  return 0.
  
  Example 1:
    Input: prices = [7,1,5,3,6,4]
    Output: 5
    Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
  Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you
  sell.
  Example 2:
    Input: prices = [7,6,4,3,1]
    Output: 0
    Explanation: In this case, no transactions are done and the max profit = 0.
*/
{
  const maxProfit = (prices = []) => {
    let min = Infinity;
    let max = 0;

    prices.forEach((val) => {
      if (val < min) {
        min = val;
        max = val
      }
      if (val > max) {
        max = val;
      }
      console.log(val, min, max)
    });
    return max - min;
  }
  console.log(maxProfit([7,1,5,3,6,4]))
}

class Biodata {
  #nama;
  #tanggalLahir;
  #alamat;
  #mobile;
  #email;
  constructor(nama, tanggalLahir, alamat, mobile, email){
    this.#nama = nama;
    this.#tanggalLahir = new Date(tanggalLahir);
    this.#alamat = alamat;
    this.#mobile = parseInt(mobile);
    this.#email = email
  }
  say(){
    let currYears = new Date();
    console.log(`halo nama saya ${this.#nama}, umur saya ${Math.floor((currYears - this.#tanggalLahir) / 1000 / 3600 / 24 / 365)} tahun, alamat saya di ${this.#alamat}`)
  }
  data(){
    return {
      nama: this.#nama,
      tanggalLahir: this.#tanggalLahir,
      alamat: this.#alamat,
      mobile: this.#mobile,
      email: this.#email,
    }
  }
}

class Dokter extends Biodata {
  #profesi;
  constructor(nama, tanggalLahir, alamat, mobile, email, profesi){
    super(nama, tanggalLahir, alamat, mobile, email);
    this.#profesi = profesi
  }

  say(){
    console.log(`halo nama saya ${this.data().nama}, saya berpropesi sebagai ${this.#profesi} dan beroperasi di ${this.data().alamat}`)
  }
}

class Ojol extends Biodata {
  #kendaraan;
  #platNomor;
  #profesi;
  constructor(nama, tanggalLahir, alamat, mobile, email, kendaraan, platNomor, profesi){
    super(nama, tanggalLahir, alamat, mobile, email);
    this.#kendaraan = kendaraan;
    this.#platNomor = platNomor;
    this.#profesi = profesi;
  }
  say(){
    console.log(`halo nama saya ${this.data().nama}, saya berprofesi sebagai ${this.#profesi} didaerah ${this.data().alamat}, dengan kendaraan ${this.#kendaraan} berplat nomor ${this.#platNomor}`)
  }
}

const udin = new Biodata('udin', '07 February 1997', 'bekasi', '0214412', 'udin@mail.com')
console.log(udin.data())
udin.say()

const boyke = new Dokter('dr.boyke', '13 July 1975', 'jakarta', '6282618213412', 'boyke@mail.com', 'Dokter Seksolog')
console.log(boyke.data())
boyke.say()

const agus = new Ojol('agus', '16 August 1980', 'tambun', '6288812093', '', 'honda vario 150', 'B124KVB', 'ojol')
console.log(agus.data())
agus.say()