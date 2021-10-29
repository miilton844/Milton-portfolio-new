const { db } = require('../firebase_init/firebase_init')


const getProjects = async () => {
  const path = 'projects';
  let projects = [];
  const snapshot = await db.collection(path).get();
  console.log(snapshot)
  snapshot.forEach((doc) => {
    projects.push(doc.data())
    projects[projects.length - 1].id = parseInt(doc.id)
  });
  return projects;
}

module.exports = {
  getProjects,
}