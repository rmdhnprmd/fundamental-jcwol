/*
  ● Create a function to check if two objects are equal
    ● Example
      ○ Input : { a: 2 } & { a: 1 }
      ○ Output: false
    ● Example
      ○ Input : { a: “Hello” } & { a: 1 }
      ○ Output: false
    ● Example
      ○ Input : { a: 1 } & { a: 1 }
      ○ Output: true
*/
{
  const checkObject = (obj1 = {}, obj2 = {}) => {
    const keys1 = Object.keys(obj1); // 'a'

    for (const key of keys1) {
      if (obj1[key] !== obj2[key]) return false;
    }
    return true;
  };

  console.log(checkObject({ a: 2 }, { a: 1 }));
  console.log(checkObject({ a: "hello" }, { a: 1 }));
  console.log(checkObject({ a: 1 }, { a: 1 }));
}

/*
  ● Create a function to get the intersection of two objects
  ● Example
    ○ Input : { a: 1, b: 2 } & { a: 1, c: 3 }
    ○ Output: { a: 1 }
*/
{
  const checkSameKey = (obj1 = {}, obj2 = {}) => {
    const instersection = {};

    for (const key in obj1) {
      if (obj2.hasOwnProperty(key) && obj1[key] === obj2[key]) {
        instersection[key] = obj1[key];
      }
    }

    return instersection;
  };
  console.log(checkSameKey({ a: 1, b: 2 }, { a: 1, c: 3 }));
}

/*
  ● Create a function to merge two array of student data and remove duplicate data
  ● Student data : name & email
  ● Example :
    Array1 → [
      { name: ‘Student 1’, email : ‘student1@mail.com’ },
      { name: ‘Student 2’, email : ‘student2@mail.com’ }
    ]
    Array2 → [
      { name: ‘Student 1’, email : ‘student1@mail.com’ },
      { name: ‘Student 3’, email : ‘student3@mail.com’ }
    ]
  ● Result :
    ArrayResult → [
      { name: ‘Student 1’, email : ‘student1@mail.com’ },
      { name: ‘Student 2’, email : ‘student2@mail.com’ },
      { name: ‘Student 3’, email : ‘student3@mail.com’ }
    ]
  */
{
  const array1 = [
    { name: "Student 1", email: "student1@mail.com" },
    { name: "Student 2", email: "student2@mail.com" },
  ];

  const array2 = [
    { name: "Student 1", email: "student1@mail.com" },
    { name: "Student 3", email: "student3@mail.com" },
  ];

  const mergeUnique = (array1 = [], array2 = []) => {
    const uniqueStudents = {};

    array1.forEach(student => {
      uniqueStudents[student.name] = student;
    });

    array2.forEach(student => {
      uniqueStudents[student.name] = student;
    })
    // console.log(uniqueStudents)
    const mergedArray = Object.values(uniqueStudents);
    return mergedArray;
  }
  console.log(mergeUnique(array1, array2))
}

/*
  ● Create a function that can accept input as an array of objects and switch all values into property and
    property into value
  ● Example :
    ○ Input : [{ name: ‘David’, age: 20 }]
    ○ Output : [{ David: ‘name’, 20: ‘age’}]  
*/
{
  const switchPropValue = (inputArray) => {
    return inputArray.map(val => {
      const switchObj = {};
      for (const key in val) {
        switchObj[val[key]] = key;
      }
      return switchObj;
    })
  }

  const array = [{name: 'David', age: 20}];
  console.log(switchPropValue(array))
}

/*
  ● Create a function to find a factorial number using recursion
  ● Example
    ○ Input : 5
    ○ Output: 5! = 5 x 4 x 3 x 2 x 1 = 120
 */
{
  const recursive = (n) => {
    if (n === 1) return 1;
    return n * recursive(n - 1);
  };
  console.log(recursive(5));
}

/*
  ● Specifications :
    ○ Create a shooting game between two player
    ○ Each player has three properties : name, health and power
    ○ Each player will take turns to shooting
    ○ Before shooting, players get a chance to get random items (health +10 or power +10)
    ○ The game will continue until one of the players has health <= 0
  ● Requirements :
    ○ Create ShootingGame & Player class
    ○ ShootingGame class :
      ■ constructor(player1, player2) → player objects as a parameter
      ■ getRandomItem() → return { health: 0 or 10, power: 0 or 10 }
      ■ start() → start shooting games
    ○ Player class :
      ■ Property → name, health (default 100), power (default 10)
      ■ damage(power) → subtract player health
      ■ useItem(item) → apply item to player (increase health or power, based on result from getRandomItem())
      ■ showStatus() → show player status (ex : “Player A (Health => 100, Power => 10) ”)
    ○ ShootingGame start() function flow :
      ■ In every turn :
  ● Show each player status before shooting
  ● Get random item for each player before shooting
  ● Show each player status after shooting
      ■ Show winner name
*/
{ 
  class Player {
    constructor(name){
      this.name = name;
      this.health = 100;
      this.power = 10;
    }

    damage(power){
      this.health -= power;
      if (this.health < 0) this.health = 0;
    }

    useItem(item = {}){
      for (const key in item) {
        if (item[key]){
          console.log(`${this.name} get ${key} : ${item[key]}`)
        }
        
      }
      this.health += item.health;
      this.power += item.power;
    }

    showStatus(){
      console.log(`Player ${this.name} (Health => ${this.health}, Power => ${this.power})`);
    }
  }

  class ShootingGame {
    constructor(player1, player2){
      this.player1 = player1;
      this.player2 = player2;
    }

    getRandomItem(){
      return Math.floor(Math.random() * 2) ? {health: 0, power: 10} : {health: 10, power: 0};
    }

    start(){
      let first = Math.floor(Math.random() * 2);
      // jika 0 maka player 2 akan jalan duluan
      // jika 1 maka player 1 akan jalan duluan
      while (this.player1.health > 0 && this.player2.health > 0){
        this.player1.showStatus();
        this.player2.showStatus();
        this.player1.useItem(this.getRandomItem());
        this.player2.useItem(this.getRandomItem());
        if (first){
          this.player2.damage(this.player1.power);
          if (this.player2.health > 0) this.player1.damage(this.player2.power);
          else break;
        } else {
          this.player1.damage(this.player2.power);
          if (this.player1.health > 0) this.player2.damage(this.player1.power);
          else break; 
        }
      }
      this.player1.showStatus();
      this.player2.showStatus();
      console.log(this.player1.health <= 0 ? `The Winner Is ${this.player2.name}` : `The Winner Is ${this.player1.name}`);
    }
  }

  let game = new ShootingGame(new Player('Udin'), new Player('Ujang'));
  game.start()
  
}

