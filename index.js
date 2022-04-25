const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const passport = require('passport');
const jwt = require('jsonwebtoken');

require('dotenv').config() // process.env

if(process.env.DB_SERVER === 'local'){
  mongoose.connect(`mongodb://127.0.0.1:27017/${process.env.DB_NAME}`);
} else {
mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_SERVER}/test?retryWrites=true`,
  {
        dbName: process.env.DB_NAME,
        useNewUrlParser: true
    });

  }
// Models

const topics = require('./models/topics');


const app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());

// Setup passport auth

app.use(require('express-session')({
    secret: process.env.ENCRYPTION_KEY,
    resave: true,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(function (req, res, next) {
    res.locals.user = req.session.user;
    res.locals.isauth = req.isAuthenticated();
    next();
});

app.use('/api', require('./routes/api'));

app.get('/', (req, res) => {
    res.json({
        message: 'Behold The MEVN Stack!'
    });
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`listening on ${port}`);
});
