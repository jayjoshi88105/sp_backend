const mongoose = require('mongoose');



mongoose
    .connect('mongodb+srv://jayjoshi88105:QrVQcuTgyPM64jLU@cluster0.096pxii.mongodb.net/techproductsdb')
    .then(() => {
        console.log('Connected to the Database successfully');
    });
