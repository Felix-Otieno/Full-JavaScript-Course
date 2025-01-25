// Home Route (GET /): Logs a placeholder message.
const getHome = (req, res) => {
    console.log("usernames will be logged here - wip");
    res.send("Check the terminal for logged usernames - wip");
};

// Form Route (GET /new): Sends back the form HTML file.
const getNewForm = (req, res) => {
    res.sendFile(__dirname + '/../views/new.html'); // Send the HTML file.
};

// Form Submission Route (POST /new): Logs the username sent in the form.
const postNewUser = (req, res) => {
    console.log("username to be saved: ", req.body.username); // Log username.
    res.send("Username received and logged to the console!"); // Respond to the user.
};

module.exports = { getHome, getNewForm, postNewUser }; // Export the functions.

const db = require("../db/queries"); // Import the database queries module.

// Function to get and log all usernames in the DB.
async function getUsernames(req, res) {
    const { search } = req.query;
  
    const usernames = search
      ? await db.searchUsernames(search)
      : await db.getAllUsernames();
  
    console.log("Usernames: ", usernames);
    res.send(
      "Usernames: " + usernames.map((user) => user.username).join(", ")
    );
  }
  

// Function to render the form for creating a username (GET /new).
async function createUsernameGet(req, res) {
  res.sendFile(__dirname + '/../views/new.html'); // Render the form HTML file.
}

// Function to handle form submission and add a username to the DB (POST /new).
async function createUsernamePost(req, res) {
  const { username } = req.body; // Extract username from the request body.
  await db.insertUsername(username); // Save the username to the DB.
  res.redirect("/"); // Redirect the user to the home route.
}

async function deleteAllUsernames(req, res) {
    await db.deleteAllUsernames();
    res.send("All usernames deleted!");
  }
  

module.exports = {
  getUsernames,
  createUsernameGet,
  createUsernamePost,
};
