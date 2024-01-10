const { ProjectModel } = require("../models/model");
const { verifyAccessToken } = require("./token-service");

class ProjectsService {
  async getAllProjects(token) {
    try {
      const decoded = verifyAccessToken(token);
      const userId = decoded.userId;
      const projects = await ProjectModel.findAll();
      return projects;
    } catch (error) {
      console.error("Error getting projects", error);
    }
  }
}

module.exports = new ProjectsService();
