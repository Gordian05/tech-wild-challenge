const User = require("../database/models/user.model");

const router = require("express").Router();

router.get("/", (req, res) => {
	User.find().then((users) => res.json(users));
});

router.post("/", (req, res) => {
	const newUsers = new User({ name: req.body.name });

	newUsers.save().then((user) => res.json(user));
});

module.exports = router;
