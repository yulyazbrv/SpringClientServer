import { useQuery } from 'react-query';
import { getProjects } from '../api/projectsApi/getProjects';

export const useProjects = () => {
  return useQuery('/getProjects', async () => {
    const projects = await getProjects();
    return projects;
  });
};