import { burgersService } from "../services/BurgersService.js";
import BaseController from "../utils/BaseController.js";


export class BurgersController extends BaseController {
  constructor() {
    super('api/burgers')
    this.router
      .get('', this.getBurgers)
      .get('/:burgerId', this.getBurgerById)
      .post('', this.createBurger)
      .delete('/:burgerId', this.deleteBurger)
      .put('/:burgerId', this.updateBurger)
  }

  async getBurgerById(req, res, next) {
    try {
      const burgerId = req.params.burgerId
      const burger = await burgersService.getBurgerById(burgerId)
      return res.send(burger)
    } catch (error) {
      next(error)
    }
  }

  async getBurgers(req, res, next) {
    try {
      const query = req.query
      const burgers = await burgersService.getBurgers(query)
      return res.send(burgers)
    } catch (error) {
      next(error)
    }
  }

  async createBurger(req, res, next) {
    try {
      const burgerData = req.body
      const burger = await burgersService.createBurger(burgerData)
      return res.send(burger)
    } catch (error) {
      next(error)
    }
  }

  async deleteBurger(req, res, next) {
    try {
      const burgerId = req.params.burgerId
      const burger = await burgersService.deleteBurger(burgerId)
      return res.send('Burger deleted')
    } catch (error) {
      next(error)
    }
  }

  async updateBurger(req, res, next) {
    try {
      const burgerData = req.body
      const burger = await burgersService.updateBurger(burgerData)
      return res.send(burger)
    } catch (error) {
      next(error)
    }
  }

}