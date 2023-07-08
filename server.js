const express = require("express");
const contacts = require("./data/contacts.json")

const app = express();

app.get("/", (req, res) => {
    console.log("Server is running");
    res.json(contacts);
})

app.listen(3006)