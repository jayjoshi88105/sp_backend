const mongoose = require('mongoose');


mongoose
    .connect('mongodb+srv://jayjoshi88105:PzjSHKKQnuwXA24R@cluster0.096pxii.mongodb.net/techproductsdb')
    .then(() => {
        console.log('Connected to the Database successfully');
    });
