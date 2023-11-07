// Write a code to find area of rectangle
// ex: length = 5, width = 3 -> 15

let length = 5,
  width = 3;
console.log(`rectangle area: ${length * width}`);

// Perimeter of rectangle
// ex: length = 5, width = 3 -> 16
// rumus keliling persegi panjang = 2 * (panjang + lebar)

console.log(`perimeter rectangle: ${2 * (length + width)}`);

// Diameter, circumference & area of a circle
// ex: radius = 5 -> output : diameter = 10, circumference = 31.4159, area = 78.539
// rumus diameter = radius * 2
// rumus keliling lingkaran = 2 * Pi * radius
// rumus luas lingkaran = Pi * radius ** 2

let radius = 5;
let diameter = radius * 2;
let circumference = (2 * Math.PI * radius).toFixed(4);
let area = (Math.PI * radius ** 2).toFixed(3);

console.log(
  `diameter = ${diameter}, circumference = ${circumference}, area = ${area}`
);

// Angles of triangle if two angles are given
// ex: a = 80, b = 65 -> 35
// rumus sudut1 + sudut2 + sudut3 = 180

let a = 80,
  b = 65;
let c = 180 - a - b;
console.log(`angle triangle = ${c}`);

// Get difference between dates in days
// ex: date1 = 2022-01-20, date2 = 2022-01-22 -> 2

let date1 = new Date("2022-01-20"),
  date2 = new Date("2022-01-22");
// let getDateDiff = date2.getDate() - date1.getDate();
// console.log(`${getDateDiff} days`);
let getTime = date2.getTime() - date1.getTime();
getTime = getTime / (1000 * 60 * 60 * 24);
console.log(`${getTime} days`);

// Convert days to years, month and days
// (notes: 1 year = 365 days, 1 month, 30 days)

// mendapatkan tahun -> konversi dari jumlahHari ke tahun -> days / 365, hasil dibulatkan kebawah
// dapat sisaHari -> jumlahHari dimodulo dengan 365, hasil dibulatkan kebawah
// mendapatkan bulan -> konversi dari sisaHari kebulan -> sisaHari / 30, hasil dibulatkan kebawah
// dapat sisaHari -> sisaHari dimodulo 30, hasil dibulatkan kebawah
// log tahun bulan sisaHari

const daysCalculation = (days) => {
  // let days = value;
  let years = Math.floor(days / 365);
  let daysLeft = Math.floor(days % 365);
  let months = Math.floor(daysLeft / 30);
  daysLeft = Math.floor(daysLeft % 30);
  return `${days} = ${years} year, ${months} month, ${daysLeft} days`
}
console.log(daysCalculation(400))

// console.log(`${days} = ${years} year, ${months} month, ${daysLeft} days`);
