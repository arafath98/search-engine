const express = require("express");
require("dotenv").config();

// Axios for API calls to fetch data from Google
const axios = require("axios").default;

const router = express.Router();

const getQuery = (words) => {
    let q = "";

    for (const word of words.split(" ")) {
        q += "+" + word;
    }

    // Removes the first + as it is unnecessary
    return q.slice(1);
};

const getUrl = (words = "Futureproof", num = 10) => {

    // num parameter is the number of items we want to retrieve from the API call

    const url = "https://www.googleapis.com/customsearch/v1";
    const cx = "017576662512468239146:omuauf_lfve"; // Google's Programmable Search Engine ID
    const query = getQuery(words);

    return `${url}?key=${process.env.API_KEY}&cx=${cx}&q=${query}&num=${num}`;
};



// Routes
router.get("/", (req, res) => {
    axios.get(getUrl())
        .then(response => {
            // Getting the array with the elements, 10 elements on a request
            const items = response.data.items;

            console.log(items);
        })
        .catch(error => res.send(error)); // Sending back the error in case the API fails
});

router.post("/", (req, res) => {
    res.send("Here your searches");
});

module.exports = router;