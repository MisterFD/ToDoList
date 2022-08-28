const express = require("express");
const bodyParser = require("body-parser");

/* bind the file date.js inside app.js
so that we can use the result returned*/
const date = require(__dirname + "/date.js");
const app = express();

const items = ["Buy Food", "Cook Food", "Eat Food"];
const workItems = [];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({
  extended: true
}));

// this allow the EJS to acces the css file and img
app.use(express.static("public"));


// the get request
app.get("/", function(req, res) {
  let day = date.getDate();
  res.render("list", {
    listTitle: day,
    newListItems: items
  });

}); // end of get request

// the post request
app.post("/", function(req, res) {
  console.log(req.body);

  let item = req.body.newItem;
  console.log(req.body.list);
/* If the list from the newItem come from
is work directory then add it to workItems launched
redirected it to work directory
if not return it to route directory
and store the item in items.*/
  if (req.body.list === "work") {
    //body.list just return the first word of listTitle: "work list", which is word.

    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }

}); // end of post request

// Work route
app.get("/work", function(req, res) {

  /*target EJS file call list
    and add to EJS variable listTitle the string "work list"
    and to newListItems the variable workItems.
  */
  res.render("list", {
    listTitle: "work list",
    newListItems: workItems
  })
});
app.post("/work", function(req, res) {
  let item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
});

app.get("/about",function(req,res){
  res.render("about");
})
// Listen request
app.listen(3000, function() {
  console.log("Server is launched in port 3000");
});
