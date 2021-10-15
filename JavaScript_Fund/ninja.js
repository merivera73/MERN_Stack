class Ninja {
  constructor(name, health, speed) {
    this.name = Mikey;
    this.health = 0;
    this.speed = 3;
    this.strength = 3;
  }
  
  drinkSake() {
    this.health += 10;
  }
  
  sayName() {
    console.log(`This Ninja's name is ${this.name}!!!`);
  }
  
  showStats() {
    console.log(`${this.name}, ${this.strength}, ${this.speed}, ${this.health}`);
  }
  
}

class Sensei extends Ninja {
    constructor (name) {
        super("These");
        this.wisdom = 10;
    }
}


// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"