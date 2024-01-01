const projectsService = require("../service/projects-service");

class ProjectsController {
  async getProjects(req, res, next) {
    try {
      const projects = await projectsService.getAllProjects();
      return res.json(projects);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new ProjectsController();
