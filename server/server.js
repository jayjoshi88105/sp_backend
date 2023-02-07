// server/server.js
const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const path = require('path')
require('./models/db');
const User = require('./models/userModel')
const routes = require('./routes/route.js');

require("dotenv").config({
    path: path.join(__dirname, "../.env")
});

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(async (req, res, next) => {
    if (req.headers["x-access-token"]) {
        const accessToken = req.headers["x-access-token"];
        const { userId, exp } = await jwt.verify(accessToken, process.env.JWT_SECRET);
        // Check if token has expired
        if (exp < Date.now().valueOf() / 1000) {
            return res.status(401).json({ error: "JWT token has expired, please login to obtain a new one" });
        }
        res.locals.loggedInUser = await User.findById(userId); next();
    } else {
        next();
    }
});

app.use('/', routes); app.listen(PORT, () => {
    console.log('Server is listening on Port:', PORT)
})