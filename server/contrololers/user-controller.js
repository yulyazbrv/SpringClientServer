const userService = require("../service/user-service");

class UserController {
  async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const userData = await userService.login(email, password);
      return res.json(userData);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new UserController()