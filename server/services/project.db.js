const { db ,admin } = require('../firebase_init/firebase_init')


const getProjects = async () => {
  const path = 'projects';
  let projects = [];
  const snapshot = await db.collection(path).get();
  snapshot.forEach((doc) => {
    console.log(doc.id, "=>", doc.data());
    projects.push(doc.data())
  });
  return projects;
}

module.exports = {
  getProjects,
}