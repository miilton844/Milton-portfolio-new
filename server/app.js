const express = require("express");
const cors = require("cors");
const app = express();
var projectRouter = require('./routes/project.route');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = "3001";
const newServer = app.listen(port);
console.log(`Running users graphql API server at http://localhost:${port}`);

app.use('/projects/', projectRouter);

