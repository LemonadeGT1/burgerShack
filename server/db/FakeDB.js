

export class Burger {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.base = data.base || 'none'
    this.extras = data.extras || 'none'
    this.bun = data.bun || 'none'
  }
}

class FakeDB {
  burgers = [
    new Burger({
      id: 1,
      name: 'Great Western',
      base: 'Double Bison 16oz',
      extras: 'Bacon, Cheese, Lettuce, Tomato, Western Sauce',
      bun: 'White'
    }),
    new Burger({
      id: 2,
      name: 'Royal',
      base: 'Beef 8oz',
      extras: 'Egg, Bacon, Onions, Lettuce, Fry Sauce',
      bun: 'Pretzel'
    }),
    new Burger({
      id: 3,
      name: 'Southern BBQ',
      base: 'Beef 2oz',
      extras: 'Onions, Lettuce, Tomato, BBQ Sauce',
      bun: 'Texas'
    })
  ]
}

export const fakeDB = new FakeDB()