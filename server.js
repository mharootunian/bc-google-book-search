const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const Book = require("./model/Book");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");

// Define API routes here
app.get("/api/books", (req, res) => {
  Books.find({})
      .then( (data) => res.json(data))
      .catch( (err) => console.log(err));
});

app.post("/api/books", (req, res) => {
/*  const newBook = Book({
    title: "meeros book",
    authors: ["meero", "dat dude"],
    description: "A book about my life.",
    image: "thumbnail_link.lol",
    link: "information_link"
  });*/

  Book.create(
      req.body
  ).then( (data) => {
    console.log(data);
  } ).catch( (err) => {
    console.error(err)
  });
});

app.delete("/api/books", (req, res) => {

});

// Send every other request to the React app
// Define any API routes before this runs
/*app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});*/


app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
