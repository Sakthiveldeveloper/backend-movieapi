const express = require('express');
const mongoose = require('mongoose');
const usersRoutes = require('./routes/user-routes');
const bodyParser = require('body-parser');
const movieRoutes = require('./routes/movies-routes');
// const mongo = require('mongodb');
// const MongoClient = mongo.MongoClient;

const app = express();
app.use(bodyParser.json());

app.use('/api/users', usersRoutes);
// const url = 'mongodb://127.0.0.1:27017/movie'
const PORT = process.env.PORT || 5000;
mongoose
    .connect(
        "mongodb+srv://edureka:1234@cluster0.t9dwc.mongodb.net/movie?retryWrites=true&w=majority",
        // "mongodb://127.0.0.1:27017/movie",
        {
            // useNewUrlParser: true,
            // useUnifiedTopology: true
            useUnifiedTopology: true, 
            useNewUrlParser: true, 
        })
    .then(() => {
        app.listen(PORT, () => console.log('server is running'))
    })
    .catch(err => {
        console.log(err);
        console.log('hii')
    });
app.use('/api/movie', movieRoutes);
