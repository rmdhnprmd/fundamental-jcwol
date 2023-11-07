/*
  ● Create a function to calculate array of student data
  ● The object has this following properties :
      Name → String
      Email → String
      Age → Date
      Score → Number
  ● Parameters : array of student
  ● Return values :
    ○ Object with this following properties :
      ■ Score
        ● Highest
        ● Lowest
        ● Average
      ■ Age
        ● Highest
        ● Lowest
        ● Average
*/

class Student {
  constructor(name, email, age, score) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.score = score;
  }
}

const students = [
  new Student("Naruto", "naruto@mail.com", 17, 60),
  new Student("Sasuke", "sasuke@mail.com", 18, 90),
  new Student("Sakura", "sakura@mail.com", 17, 100),
];

const hla = (students = [], key = "") => {
  students.sort((a, b) => b[key] - a[key]);
  const highest = students[0][key];
  const lowest = students[students.length - 1][key];
  const avg =
    students.reduce((sum, current) => sum + current[key], 0) / students.length;

  return { highest, lowest, avg };
};

console.log(hla(students, "score"));
console.log(hla(students, "age"));

/*
  ● Create a program to create transaction
  ● Product Class
    ○ Properties
      ■ Name
      ■ Price

  ● Transaction Class
    ○ Properties
      ■ Total
      ■ Product
        ● All product data
        ● Qty
  ○ Add to cart method → Add product to transaction
  ○ Show total method → Show total current transaction
  ○ Checkout method → Finalize transaction, return transaction data
  */

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class Transaction {
  #total = 0;
  #products = [];

  addToCart(product, qty) {
    if (product instanceof Product && qty > 0) {
      product.qty = qty;
      this.#products.push(product);
    } else console.log("Invalid Product");
    // console.log(product)
  }

  showTotal() {
    this.#total = this.#products.reduce(
      (sum, current) => sum + (current?.price * current?.qty),
      0
    );
    return this.#total;
  }

  checkout(pay = 0){
    this.showTotal();
    if (this.#total > pay) return console.log('Uang anda kurang bang');
    this.#products = [];
    console.log('Terima kasih sudah berbelanja', 'kembalian anda adalah Rp.' + (pay - this.#total).toLocaleString('id-ID'));
    return this.#total = 0;
  }

}
const transaction = new Transaction();
transaction.addToCart(new Product('Kemeja H&M', 300000), 2)
transaction.addToCart(new Product('Celana H&M', 400000), 1)
console.log(transaction.showTotal())
transaction.checkout(1200000)
