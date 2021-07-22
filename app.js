// initial setup -- boilerplate
const express = require('express');
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const app = express();
const User = require('./models/User');
const passport = require('passport');

// routes
const users = require('./routes/api/users');
const tweets = require('./routes/api/tweets');

mongoose
	.connect(db, { useNewUrlParser: true })
	.then(() => console.log('Connected to MongoDB successfully'))
	.catch((err) => console.log(err));

app.get('/', (req, res) => res.send('Hello World!!'));

app.use(passport.initialize());
require('./config/passport')(passport);

// middleware
// with new express, includes body parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api/users', users);
app.use('/api/tweets', tweets);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
