/*
Exercise
Create a code that could handle a queue on food ordering process, with this specification:
● Create a class to handle queuing process in a file.
● Create file to handle and execute queue class.
● Each queue process takes a random interval from 1-10 seconds.
● Clue : Use while & promise

Exercise - Output
● Add orders to queue
● [Log] Print all data in queue
● Run process -> process queue based on random interval
● [Log] Queue 1 Done in XXX minutes
● [Log] Queue 2 Done in XXX minutes
● [Log] Queue 3 Done in XXX minutes
● [Log] Queue 4 Done in XXX minutes
 */

class FoodOrders {
  #foods = [];

  addFood(food){
    this.#foods.push(food);
    console.log(this.#foods);
  }

  async process(){
    let i = 0;

    do {
      if (i >= this.#foods.length) break;
      
      let interval = Math.floor(Math.random() * 11) * 1000;
      await new Promise((resolve) => setTimeout(() => {
        resolve(console.log(`Queue ${i + 1} ${this.#foods[i]} Done in ${interval / 1000} minutes`))
      }, interval));
      i++;
    } while (true)
  }
}

// const FoodOrders = require("./class");

const order = new FoodOrders();
order.addFood("bihun");
order.addFood("ayam goreng");
order.addFood("kfc");
order.addFood("cakwe");
order.process();
