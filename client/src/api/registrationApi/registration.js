import { postHelper } from '../../helpers/apiHelper';

export const registrationUser = async (name, surname, email, password, age) => {
  const response = await postHelper('/signup', {
    name,
    surname,
    email,
    password,
    age,
  });
  localStorage.setItem("token", response.accessToken);
  return response;
};
