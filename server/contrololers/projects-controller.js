const projectsService = require("../service/projects-service");

class ProjectsController {
  async getProjects(req, res, next) {
    try {
      const authHeader = req.headers["authorization"];
      if (!authHeader) {
        return res.status(401).json({ error: 'Access token is missing' });
      }
      const projects = await projectsService.getAllProjects(authHeader);
      return res.json(projects);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new ProjectsController();
