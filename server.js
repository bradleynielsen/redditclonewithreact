const express = require('express');
const mongoose = require('mongoose')
const app = express();
const logger = require('morgan')
const posts = require('./api/routes/posts');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use(logger('dev'));
app.use(express.static('public'));

app.use('/posts', posts);

mongoose.connect('mongodb://localhost/reddit');

app.listen(PORT, () => {
	console.log('server started on port: ', PORT);
});
