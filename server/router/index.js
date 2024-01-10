const projectsController = require("../contrololers/projects-controller");
const userController = require("../contrololers/user-controller");
const Router = require("express").Router;
const router = new Router();

router.get("/getProjects", projectsController.getProjects);
router.post('/login', userController.login)
router.post('/signup', userController.registration)
router.get("/refresh", userController.refresh);

module.exports = router;
