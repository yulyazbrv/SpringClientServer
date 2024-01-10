const jwt = require('jsonwebtoken');

function generateAccessToken(user) {
  const accessToken = jwt.sign(user, 'your_access_token_secret', { expiresIn: '15m' });
  return accessToken;
}

function generateRefreshToken(user) {
  const refreshToken = jwt.sign(user, 'your_refresh_token_secret');
  return refreshToken;
}

function verifyAccessToken(token) {
  try {
    const decoded = jwt.verify(token, 'your_access_token_secret');
    return decoded;
  } catch (error) {
    console.error('Ошибка верификации токена доступа', error);
    throw error;
  }
}

function verifyRefreshToken(token) {
  try {
    const decoded = jwt.verify(token, 'your_refresh_token_secret');
    return decoded;
  } catch (error) {
    console.error('Ошибка верификации токена обновления', error);
    throw error;
  }
}

module.exports = {
  generateAccessToken,
  generateRefreshToken,
  verifyAccessToken,
  verifyRefreshToken,
};