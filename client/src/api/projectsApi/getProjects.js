import { getHelper } from "../../helpers/apiHelper";

export const getProjects = async () => {
  const response = await getHelper(`/getProjects`);
  return response;
};
