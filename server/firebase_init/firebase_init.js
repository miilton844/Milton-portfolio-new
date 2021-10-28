const admin = require("firebase-admin");
const serviceAccount = require("./key.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://portfolio-41f96.firebaseio.com",
});

// Get the database
const db = admin.firestore();

module.exports = { admin, db };





