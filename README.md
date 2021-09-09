# Search Engine using Goole's API

## Installation & Usage

### Installation

* Clone or download the repo.
* Open terminal and navigate to `server` folder.
* Run `npm install` to install dependencies.

### Usage

* Navigate to `server` folder and create `.env` file.
* Add the following line of code `API_KEY="YOUR_API_KEY"` and replace `YOUR_API_KEY` with your personal API key provided by Google and save.
* OPTIONAL - In file `searchRoutes.js` inside `server/routes` folder, replace `cx` in function `getUrl` with your own ID provided by Google.
* Run `npm start` to launch server on port 3000.
* Run `index.html` on a different port using `liveserver` or `python`.

## Wins & Challenges

### Wins

* Managed to call Google's API to fetch data from their search engine.

### Challenges

* Google's documentation is not beginner friendly. Took a lot of time to understand and figure out how to call the API.
* Initially, the API results were not as expected.