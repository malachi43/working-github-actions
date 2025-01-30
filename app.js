const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const errorhandler = require("./middlewares/errorhandler");
const notFound = require("./middlewares/notFound");

app.use(cors());
app.use(helmet());

//mountpath for static files
app.use(express.static("public"));

//print routes to the console
app.use(morgan("common"));

app.use("/health", (_req, res) => {
    const timezoneOffset = new Date().getTimezoneOffset();
    const milliseconds = Date.now();
    const utc_date_time = new Date(milliseconds + timezoneOffset);

    res.status(200).json({
        health: "ok",
        status: "running",
        date_time: utc_date_time
    })
})


app.use(notFound);
app.use(errorhandler);


module.exports = app;