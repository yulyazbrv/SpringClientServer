const bcrypt = require("bcrypt");
const { UserModel } = require("../models/model");
const {
  generateAccessToken,
  generateRefreshToken,
  verifyRefreshToken,
} = require("./token-service");

class UserService {
  async registration(name, surname, email, password, age) {
    try {
      if (name.length < 3) {
        throw new Error("Name should contain at least 3 characters");
      }
  
      if (password.length < 4) {
        throw new Error("Password should contain at least 4 characters");
      }
  
      const hasLetter = /[a-zA-Z]/.test(password);
      const hasNumber = /\d/.test(password);
      if (!hasLetter || !hasNumber) {
        throw new Error("Password should contain at least 1 letter and 1 number");
      }
      const candidate = await UserModel.findOne({where: {email: email}});
      if (candidate) {
        throw new Error(`User with ${email} already exists`);
      }

      const hashPassword = await bcrypt.hash(password, 10);
      const user = await UserModel.create({
        email,
        password: hashPassword,
        name,
        surname,
        age,
      });

      const accessToken = generateAccessToken({ userId: user.id });
      const refreshToken = generateRefreshToken({ userId: user.id });

      return { user, accessToken, refreshToken };
    } catch (error) {
      console.error("Registration Error", error);
      throw error;
    }
  }

  async login(email, password) {
    try {
      const candidate = await UserModel.findOne({ email });
      if (!candidate) {
        throw new Error(`User with ${email} is not registered`);
      }

      const isPasswordEquals = await bcrypt.compare(
        password,
        candidate.password
      );
      if (!isPasswordEquals) {
        throw new Error("Incorrect password");
      }

      const accessToken = generateAccessToken({ userId: candidate.id });
      const refreshToken = generateRefreshToken({ userId: candidate.id });

      return { user: candidate, accessToken, refreshToken };
    } catch (error) {
      console.error("Ошибка при входе в систему", error);
      throw error;
    }
  }

  async refreshToken(refreshToken) {
    try {
      const decodedRefreshToken = verifyRefreshToken(refreshToken);
      const newAccessToken = generateAccessToken(decodedRefreshToken);
      const newRefreshToken = generateRefreshToken(decodedRefreshToken);
  
      return { accessToken: newAccessToken, refreshToken: newRefreshToken };
    } catch (error) {
      console.error('Ошибка обновления токена:', error);
      throw error;
    }
  }
}

module.exports = new UserService();
