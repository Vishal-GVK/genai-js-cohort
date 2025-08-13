// This is a simple Express server setup to serve static files from the public directory.
const express = require("express");
const app = express();
const port = 3000;

// Serve static files (HTML, JS, CSS) from the public folder
app.use(express.static("public"));

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});