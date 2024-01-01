class UserService {
  async login(email, password) {
    if (email != 'admin' && password != '1234'){
      throw new Error(`Incorrect email or password`);
    }
    return;
  }
}

module.exports = new UserService()