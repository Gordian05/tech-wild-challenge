const mongoose = require("mongoose");

const schema = mongoose.Schema;

const UserSchema = schema({
	name: {
		type: String,
		required: [true, "Champ requis"],
	},
});

const User = mongoose.model("user", UserSchema);

module.exports = User;