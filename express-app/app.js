const express = require('express'); // Import Express framework.
const bodyParser = require('body-parser'); // Import body-parser middleware.

const userRoutes = require('./routes/userRoutes'); // Import the routes.

const app = express(); // Create an Express application.
const PORT = 3000; // Define the port number for the server.

// Middleware to parse form data (for POST requests).
app.use(bodyParser.urlencoded({ extended: true }));

// Use the routes defined in userRoutes.
app.use('/', userRoutes);

// Start the server and listen for requests.
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
