class Tokopedia {
  constructor() {
    this.products = [];
    this.cart = [];
  }

  addProduct(name, stock, category, attributes) {
    if (this.validateCategory(category, attributes)) {
      this.products.push({ name, stock, category, attributes });
      console.log("Produk berhasil ditambahkan.");
    } else {
      console.log(
        "Gagal menambahkan produk. Attribut tidak sesuai dengan kategori"
      );
    }
  }

  editProduct(name, newAttributes) {
    const product = this.findProductName(name);
    if (product) {
      product.attributes = { ...product.attributes, ...newAttributes };
      console.log("Produk berhasil diubah.");
    } else console.log("Produk tidak ditemukan");
  }

  deleteProduct(name) {
    this.products.forEach((val, idx) => {
      if (name === val.name) {
        this.products.splice(idx, 1);
        console.log("Produk berhasil dihapus");
      } else console.log("Produk tidak ditemukan");
    });
  }

  addToCart(name, quantity) {
    const product = this.findProductName(name);
    if (product) {
      if (product.stock >= quantity) {
        product.stock -= quantity;
        this.cart.push({ name, quantity });
        console.log("Produk ditambah ke keranjang");
      } else console.log("Gagal menambahkan produk ke keranjang");
    } else console.log("Produk tidak ditemukan");
  }

  checkOut() {
    this.cart.forEach((item) => {
      const product = this.findProductName(item.name);
      product.stock -= item.quantity;
    });
    this.cart = [];
    console.log("Checkout berhasil. Keranjang belanja kosong.");
  }

  validateCategory(category, attributes) {
    if (
      category === "pakaian" &&
      attributes.hasOwnProperty("ukuran") &&
      attributes.hasOwnProperty("brand")
    )
      return true;
    else if (
      category === "buku" &&
      attributes.hasOwnProperty("author") &&
      attributes.hasOwnProperty("totalPage")
    )
      return true;
    return false;
  }

  findProductName(name) {
    return this.products.find((products) => products.name === name);
  }
}

const toko = new Tokopedia();
toko.addProduct("buku harry potter", 5, "buku", {
  author: "jk rowling",
  totalPage: 450,
});
toko.addProduct("kemeja", 10, "pakaian", { ukuran: "M", brand: "Uniqlo" });
toko.addProduct("celana", 3, "pakaian", { ukuran: "L", brand: "dickies" });

toko.editProduct("kemeja", { ukuran: "XL", brand: "H&M" });

toko.deleteProduct("celana");

toko.addToCart("buku harry potter", 2);
toko.checkOut();
console.log(toko.products);

/*
● Create a function javascript to convert Excel sheet column title to its corresponding column number.
● Example :
A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28
...
● Example :
○ Input : AB
○ Output : 28
*/
{
  const titleToNumber = (columnTitle) => {
    let result = 0;
    for (let i = 0; i < columnTitle.length; i++) {
      const char = columnTitle[i];
      result = result * 26 + (char.charCodeAt(0) - "A".charCodeAt(0) + 1);
    }
    return result;
  };

  const columnTitle = "AB";
  const columnNumber = titleToNumber(columnTitle);
  console.log(columnNumber);
}

/*
● Given a non-empty array of integers nums, every element appears twice except for one. Find that
single one.
● Example 1:
○ Input: nums = [2,2,1]
○ Output: 1
*/
{
  const findSingleNumber = (nums) => {
    let result = 0;
    for (let num of nums) {
      result ^= num;
    }
    return result;
  };
  console.log(findSingleNumber([2, 2, 1]));
  console.log(findSingleNumber([4, 1, 2, 1, 2]));
  console.log(findSingleNumber([1]));
}

/*
● Given two strings s and t, return true if t is an anagram of s, and false otherwise.
● An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
typically using all the original letters exactly once.
● Example 1:
○ Input: s = "anagram", t = "nagaram"
○ Output: true
*/
{
  const isAnagram = (s, t) => {
    if (s.length !== t.length) return false;

    const sortedS = s.split('').sort().join('');
    const sortedT = t.split('').sort().join('');

    return sortedS === sortedT
  };

  console.log(isAnagram('anagram', 'nagaram'))
  console.log(isAnagram('rat', 'car'))
}

/*
● You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2
steps. In how many distinct ways can you climb to the top?
● Example 1:
○ Input: n = 2
○ Output: 2
○ Explanation: There are two ways to climb to the top.
■ 1. 1 step + 1 step
■ 2. 2 steps

● Example 2:
○ Input: n = 3
○ Output: 3
○ Explanation: There are three ways to climb to the top.
■ 1. 1 step + 1 step + 1 step
■ 2. 1 step + 2 steps
■ 3. 2 steps + 1 step
*/
{
  const climbStairs = (n) => {
    if (n === 1) return 1

    let dp = new Array(n+1);
    dp[1] = 1; 
    dp[2] = 2;

    for (let i = 3; i <= n; i++){
      dp[i] = dp[i - 1] + dp[i - 2]
    }
    return dp[n]
  }
  console.log(climbStairs(4))
}