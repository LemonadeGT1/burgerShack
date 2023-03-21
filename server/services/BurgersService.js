import { Burger, fakeDB } from "../db/FakeDB.js"
import { BadRequest } from "../utils/Errors.js"

class BurgersService {


  async getBurgers(query) {
    let burgers = []
    if (query.bun) {
      burgers = await fakeDB.burgers.filter(b => b.bun == query.bun)
    } else {
      burgers = await fakeDB.burgers
    }
    return burgers
  }

  async getBurgerById(burgerId) {
    const burger = await fakeDB.burgers.find(b => b.id == burgerId)
    if (!burger) {
      throw new BadRequest('The burger was not found in the database')
    }
    return burger
  }

  async createBurger(burgerData) {
    // if (!burgerData.name || !burgerData.id) {
    //   throw new BadRequest("Incomplete burger information provided")
    // }
    const newBurger = new Burger(burgerData)
    await fakeDB.burgers.push(newBurger)
    return newBurger
  }

  async deleteBurger(burgerId) {
    const burgerIndex = await fakeDB.burgers.findIndex(b => b.id == burgerId)
    if (burgerIndex == -1) {
      throw new BadRequest("No burger found")
    }
    fakeDB.burgers.splice(burgerIndex, 1)
  }

  async updateBurger(burgerData) {
    const newBurgerId = burgerData.id
    const updatedBurgerIndex = await fakeDB.burgers.findIndex(b => b.id == newBurgerId)
    if (updatedBurgerIndex == -1) {
      throw new BadRequest("No burger found to update")
    }
    fakeDB.burgers.splice(updatedBurgerIndex, 1, burgerData)
    return burgerData
  }

}

export const burgersService = new BurgersService()