// Grabbing the search bar
const searchBar = document.getElementById("search-bar");

// Grabbing submit button
const searchButton = document.getElementById("search-button");

// Grabbing the feeling lucky button
const luckyButton = document.getElementById("lucky-button");

const updateInfo = (data) => {
    // Section where the results will be appended
    const searchSection = document.getElementById("search-results")

    // Cleaning in case there were previous search results
    searchSection.textContent = "";

    let toAppend = "";

    for (const element of data) {
        // Concatenating each element to a single string
        // Lazy way to do, not recommended
        toAppend += `

        <div class="row mx-3">
            <div class="col-9 col-sm-8 col-md-7 col-lg-6 col-xl-5">
                <a href="${element.link}" target="_blank">
                    <h6>${element.displayLink}</h6>
                    <h5 class="mt-2">${element.title}</h5>
                </a>
                <p>${element.snippet}</p>
            </div>
        </div>`;
    }

    // Empty the search bar
    searchBar.value = "";

    // Sppending the string as HTML to the section
    searchSection.innerHTML = toAppend;
};

const searchAndUpdate = (words) => {

    const url = "http://localhost:"
    const port = 3000;
    const path = "search"

    // Builds the full url used for the search
    const fullUrl = `${url}${port}/${path}/${words}`;

    // changing the search text to let the user to wait
    searchBar.value = "Searching...";

    // Calls the API and gets the data from the backend
    fetch(fullUrl)
        .then((response) => response.json())
        .then(data => updateInfo(data))
};

// Search after pressing the Enter key from the keyboard
searchBar.addEventListener("keypress", e => {
    e.preventDefault();

    if (e.key == "Enter") {
        // Won't process empty search query
        if (searchBar.value == "undefined")
            return;

        searchAndUpdate(searchBar.value);
    } else {
        searchBar.value += e.key;
    }
});

// Search after clicking the search button
searchButton.addEventListener("click", e => {
    e.preventDefault();

    // Won't process empty search query
    if (searchBar.value == "undefined")
        return;

    searchAndUpdate(searchBar.value);
});

// Lucky button gives the first element of the search
luckyButton.addEventListener("click", e => {
    e.preventDefault();

    const words = searchBar.value;

    // Won't process empty search query
    if (words == "undefined")
        return;

    // Repetitive, should be separated in a function, will be improved in later version
    const url = "http://localhost:"
    const port = 3000;
    const path = "search"

    // changing the search text to let the user to wait
    searchBar.value = "Searching...";

    // Builds the full url used for the search
    const fullUrl = `${url}${port}/${path}/${words}`;

    // After getting the data from the API, it redirects to the first element
    fetch(fullUrl)
        .then((response) => response.json())
        .then(data => window.location.replace(data[0].link));
});