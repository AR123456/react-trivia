const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const MONGODB_URI = require("./config/keys");

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
app.use(routes);
if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI);
} else {
  mongoose.connect("mongodb://localhost/reacttrivia");
  console.log("mongoose connected");
}
//if deployed use deployed db , other wise use the local mongoheadlines db
// var db = MONGODB_URI || "mongodb://localhost/reacttrivia";
//connect mongoose to the db
// mongoose.connect(db, function(error) {
//   //log error if it happens
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("mongoose connected");
//   }
// });

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
