const express = require('express');
const cors = require("cors");

const app = express();

app.use(cors());

// Parsing to json
app.use(express.json());

// Routes
app.get("/", (req, res) => {
    res.send("Hello World!");
});

// If it is an invalid GET request
app.get("*", (req, res) => res.status(404).send({
    error: "This route does not exist"
}));

module.exports = app;