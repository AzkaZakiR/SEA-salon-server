const express = require("express");
const path = require("path");
const cors = require("cors");
const morgan = require("morgan");
// const apiError = require("../controllers/errorController");
const apiError = require("../controllers/errorController")

// const router = require("../routes/index");
const router = require('../routes/index')
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use(flash());
app.use(morgan("dev"));
app.use(express.static(`${__dirname}/public`));

app.use(router);

app.use('/masuk', (req, res) => {
    res.status(200).send("App successful")
})

app.use(apiError.onLost);
app.use(apiError.onError);

module.exports = app;
