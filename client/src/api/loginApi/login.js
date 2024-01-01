import { postHelper } from "../../helpers/apiHelper";

export const loginUser = async (email, password) => {
  const response = await postHelper("/login", { email, password });
  return response
};
