const projectsModel = require("../models/projects");

class ProjectsService {
  async getAllProjects() {
    const projects = projectsModel;
    return projects;
  }
}

module.exports = new ProjectsService();
