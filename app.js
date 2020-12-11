const magicBook = {
  recipes: {
    golem: {
      bone: 10,
      stone: 100,
      nail: 100,
      poo: 53
    },
    littleDevil: {
      lava: 10,
      evil: 999
    },
  }
};

const kitchen = {
  bone: 999,
  stone: 999,
  nail: 999,
  poo: 999,
  lava: 999,
  evil: 999,
  kettle: {
    material: 'metal',
    ingridients: {}
},
  addIngridientToKettle(nameOfIngridient, amount) {
    this[nameOfIngridient] = this[nameOfIngridient] - amount;
    this.kettle.ingridients[nameOfIngridient] =  amount;
},
  cook(recipe) { 
    for (let prop in recipe) {
      if (this.kettle.ingridients[prop]  < recipe[prop]) {
        return console.warn('not enough ingredients');
      }
    }
    return console.log("Lets's cooking!");
  }
}

kitchen.addIngridientToKettle('bone', 1);
kitchen.addIngridientToKettle("stone", 100);
kitchen.addIngridientToKettle("nail", 100);
kitchen.addIngridientToKettle("poo", 53);

kitchen.cook(magicBook.recipes.golem);

console.log(kitchen); 