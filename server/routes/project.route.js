const express = require('express');
const router = express.Router();
const ProjectController = require('../controllers/project.controller');
const Response = require('../helpers/response');

router.get('/list/', async function (req, res) {
    try {
        const projects = await ProjectController.getProjects();
        res.status(200).json(new Response(true, projects));
    } catch (error) {
        res.status(400).json(new Response(false, {}, error.message));
    }
})


module.exports = router;