const express = require('express')
const router = express.Router();

const Post = require('../models/post');

router.get('/by-subreddit/:subreddit', (req, res) => {
	let subredditId = req.params.subreddit.toLowerCase();
	subredditId = subredditId.replace(/ /g, '');

	Post.find({
		subredditId: subredditId
	}, (err, results) => {
		res.json(results);
	});
});


router.post('/new', (req, res) => {
	var newPost = new Post(req.body);
	newPost.save((err,results) => {
		if (err) {
			res.send(err);

		} else {
			res.json(results);
			
		}
	})
});

module.exports = router;
