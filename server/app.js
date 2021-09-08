const express = require('express');
const cors = require("cors");

const searchRoutes = require("./routes/searchRoutes");

const app = express();

app.use(cors());

// Parsing to json
app.use(express.json());

// Routes
app.get("/", (req, res) => {
    res.send("Hello World!");
});

// Routes for search engine
app.use("/search", searchRoutes);

// If it is an invalid GET request
app.get("*", (req, res) => res.status(404).send({
    error: "This route does not exist"
}));

module.exports = app;