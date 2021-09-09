const express = require("express");
require("dotenv").config();

// Axios for API calls to fetch data from Google
const axios = require("axios").default;

const router = express.Router();

// Returns the query in the format with +
// Example: "Elon Musk" will become "Elon+Musk"
const getQuery = (words) => {
    let q = "";

    // Concatenates all the words and a +
    for (const word of words.split(" ")) {
        q += "+" + word;
    }

    // Removes the first + as it is unnecessary
    return q.slice(1);
};

// Return the complete url necessary for the API call
// Example: "https://www.googleapis.com/customsearch/v1?key=YOUR_API_KEY&cx=YOUR_CX&q=WHAT_TO_SEARCH&num=NUMBER_OF_PAGES"
const getUrl = (words = "Futureproof", num = 10) => {

    // num parameter is the number of items we want to retrieve from the API call

    const url = "https://www.googleapis.com/customsearch/v1";
    const cx = "976bfbc0cd2b02f54"; // Google's Programmable Search Engine ID
    const query = getQuery(words);

    return `${url}?key=${process.env.API_KEY}&cx=${cx}&q=${query}&num=${num}`;
};

// Will return only the data that will be used in the webpage, removing the unnecessary ones
const filterItems = (items) => {
    const filteredItems = [];

    // Adds a new object with only the necessary keys
    items.forEach((item) => filteredItems.push({
        title: item.title,
        link: item.link,
        displayLink: item.displayLink,
        snippet: item.snippet,
    }));

    return filteredItems;
};


// Routes
router.get("/:string", (req, res) => {

    // What to search from Google
    const toSearch = req.params.string;

    axios.get(getUrl(toSearch))
        .then(response => {
            // Getting the array with the elements, 10 elements on a request
            const items = response.data.items;

            // console.log(items);

            // Filter all the items keeping only the necessary properties
            const filteredItems = filterItems(items);

            res.send(filteredItems);
        })
        .catch(error => res.send(error)); // Sending back the error in case the API fails
});

module.exports = router;