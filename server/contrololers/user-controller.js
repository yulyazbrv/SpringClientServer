const userService = require("../service/user-service");

class UserController {
  async registration(req, res, next) {
    try {
      const { name, surname, email, password, age } = req.body;
      const userData = await userService.registration(
        name,
        surname,
        email,
        password,
        age
      );
      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: false,
      });
      return res.json({
        accessToken: userData.accessToken,
        user: userData.user,
      });
    } catch (error) {
      next(error);
    }
  }

  async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const userData = await userService.login(email, password);
      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: false,
      });

      return res.json({
        accessToken: userData.accessToken,
        user: userData.user,
      });
    } catch (e) {
      next(e);
    }
  }

  async refresh(req, res, next) {
    try {
      const { refreshToken } = req.cookies;
      const userData = await userService.refreshToken(refreshToken);
      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: false,
      });
      return res.json(userData);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new UserController();
