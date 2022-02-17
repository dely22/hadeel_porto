const express = require("express");
const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');
app.listen("5000");
app.use(express.static('views/css'));
app.use(express.static('views/js'));
app.use(express.static('views/images'));

console.log("server work");

app.get("/", (req, res) => {
    res.render("home");
})
