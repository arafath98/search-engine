const express = require("express");

const router = express.Router();

// Routes
router.get("/", (req, res) => {
    res.send("Please use POST requests");
});

router.post("/", (req, res) => {
    res.send("Here your searches");
});

module.exports = router;