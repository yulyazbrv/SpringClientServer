const { login } = require("../contrololers/user-controller");
jest.mock("../contrololers/user-controller");

describe("Login API", () => {
  it("should successful authentication", async () => {
    login.mockResolvedValue({ success: true });

    const result = await login({ username: "ggg@gmail.com", password: "1q1q" });

    expect(result).toEqual({ success: true });
    expect(login).toHaveBeenCalledWith({ username: "ggg@gmail.com", password: "1q1q" });
  });

  it("should authentication failure", async () => {
    const error = new Error("Authentication failed");
    error.response = { status: 500, data: { message: "Login failed" } };
    login.mockRejectedValue(error);

    try {
      await login({ username: "testuser", password: "wrongpassword" });
    } catch (error) {
      expect(error.response.status).toEqual(500);
      expect(error.response.data.message).toEqual("Login failed");
    }

    expect(login).toHaveBeenCalledWith({
      username: "testuser",
      password: "wrongpassword",
    });
  });
});