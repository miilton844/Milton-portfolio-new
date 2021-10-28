const projectDb = require('../services/project.db');

const getProjects = async () => {
    return await projectDb.getProjects();
}

module.exports = {
    getProjects,
}