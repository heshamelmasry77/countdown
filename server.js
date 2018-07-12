"use strict";

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 7000;


app.use(bodyParser.json()); // <--- Here
app.use(bodyParser.urlencoded({extended: true})); // handle URL-encoded data


app.use(express.static(path.resolve(__dirname, "./react-ui/build")));


app.get("*", function (request, response) {
	response.sendFile(path.resolve(__dirname, "./react-ui/build", "index.html"));
});

app.listen(port, () => console.log(`Listening on port ${port}`));