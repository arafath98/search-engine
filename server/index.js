const app = require("./app");
const port = 3000; // Port where the server will be listening

// Start listening
app.listen(port, () => console.log(`The app is listening at http://localhost:${port}`));