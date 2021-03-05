const key = require("../key");
const mongoose = require("mongoose");
mongoose
	.connect(
		key.mongo,
		{ useUnifiedTopology: true, useNewUrlParser: true },
	)
	.then(() => console.log("connexion db ok!"))
	.catch((err) => console.log(err));
