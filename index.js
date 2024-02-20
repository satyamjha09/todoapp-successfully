const express = require("express");
const app = express();
// load config from env file

require("dotenv").config();
const PORT = process.env.PORT || 4000;
// middleware to parse json request
app.use(express.json());
// import routes for TODO API
const todoRoutes = require("./routes/todos");
// mount the todo ASPI ROUTES
app.use("/api/v1", todoRoutes);
// start server
app.listen(PORT, () => {
    console.log(`Server started successfuly at ${PORT}`)
})
// connection to the database
const dbConnect = require("./config/database");
dbConnect();
// defalut route
app.get("/", (req, res) => {
    res.send(`<h1> This is HomePage baby </h1>`);
} )