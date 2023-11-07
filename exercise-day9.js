{
  const restaurant = { name: "kwetiaw 99", jarak: 5 };
  const ongkirPerKM = 2000;
  const cart = [];

  const addFood = (food = {}) => {
    let found = false;
    cart.forEach((val) => {
      if (food.name === val.name) {
        val.qty += food.qty;
        found = true;
      }
    });
    if (!found) {
      cart.push(food);
    }
  };

  const removeFood = (foodName) => {
    cart.forEach((val, idx) => {
      if (foodName === val.name) cart.splice(idx, 1);
    });
  };

  const editFoodQty = (foodName, qty) => {
    cart.forEach((val) => {
      if (foodName === val.name) val.qty = qty;
    });
  };

  const totalPrice = () => {
    let totalPriceFood = 0;
    for (const item of cart) {
      totalPriceFood += item.price * item.qty;
    }
    let totalOngkir = restaurant.jarak * ongkirPerKM;
    return totalPriceFood + totalOngkir;
  };

  console.log(cart);
  const food = { name: "capcay", price: 50000, qty: 2 };
  addFood(food);
  const food2 = { name: "mie goreng", price: 50000, qty: 5 };
  addFood(food2);
  editFoodQty("capcay", 7);
  console.log(cart);
  console.log(`Total : ${totalPrice()}`);
}

{
  const triangle = (height) => {
    let result = "";
    for (let i = 1; i <= height; i++) {
      for (let j = 1; j <= i; j++) {
        result += "*";
      }
      result += `\n`;
    }
    return result;
  };

  console.log(triangle(4));
}

{
  const triangle = (height) => {
    let result = "";
    for (let i = height; i >= 1; i--) {
      for (let j = 1; j <= i; j++) {
        result += "*";
      }
      result += `\n`;
    }
    return result;
  };

  console.log(triangle(4));
}

{
  // s s s *
  // s s * *
  // s * * *
  // * * * *
  // total baris i    = 4 baris
  // total bintang j  = 1 2 3 4
  // total spasi s    = 3 2 1 0 => (n - 1)

  const triangle = (height) => {
    let result = "";
    for (let i = 1; i <= height; i++) {
      for (let k = height - i; k >= 1; k--) {
        result += " ";
      }

      for (let j = 1; j <= i; j++) {
        result += "*";
      }
      result += `\n`;
    }
    return result;
  };
  console.log(triangle(4));
}

{
  const triangle = (height) => {
    let result = "";
    for (let i = height; i >= 1; i--) {
      for (let k = height - i; k >= 1; k--) {
        result += " ";
      }

      for (let j = 1; j <= i; j++) {
        result += "*";
      }
      result += `\n`;
    }
    return result;
  };
  console.log(triangle(4));
}

{
  // s s s *
  // s s * * *
  // s * * * * *
  // * * * * * * *
  // total baris i    = 4 baris
  // total bintang j  = 1 2 3 4
  // total spasi s    = 3 2 1 0 => (n - 1)

  /*
    i   formasi   * => (i - 1) * 2 + 1
    1    0 1 0    1    
    2    1 1 1    3
    3    2 1 2    5
    4    3 1 3    7
  */

  const triangle = (height) => {
    let result = ''
    for (let i = 1; i <= height; i++){
      for (let j = height; j >= i; j--){
        result += '   '
      }
      for (let k = 1; k <= (i - 1) * 2 + 1; k++){
        result += ' * '
      }

      result += `\n`
    }
    return result
  }
  console.log(triangle(4))
}