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
      ingridients: {
        addIngridientToKettle(nameOfIngridient, amount) {
            prop = nameOfIngridient;
            this[prop] = amount;
          for (let key in kitchen) {
            if (key === prop)
              kitchen[key] = kitchen[key] - amount;
          }
        },
        cook(recipe) {
          for (let prop in recipe) {
            if (this[prop] < recipe[prop]) {
              return console.warn('not enough ingredients');
            }
          }
          return console.log("Lets's cooking!");
        }
      }
    }
  };
  
  kitchen.kettle.ingridients.addIngridientToKettle("bone", 9);
  kitchen.kettle.ingridients.addIngridientToKettle("stone", 100);
  kitchen.kettle.ingridients.addIngridientToKettle("nail", 100);
  kitchen.kettle.ingridients.addIngridientToKettle("poo", 53);
  kitchen.kettle.ingridients.addIngridientToKettle("kuskus", 53);

  kitchen.kettle.ingridients.cook(magicBook.recipes.golem);