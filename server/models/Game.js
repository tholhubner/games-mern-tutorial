const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Game = new Schema(
	{
		title: { type: String, required: true },
		rating: { type: Number, required: true },
		description: { type: String, required: true },
		esrb: { type: String, required: true },
		publisher: { type: String, required: true },
		platform: { type: [String], required: true },
	},
	{ timestamps: true },
)

module.exports = mongoose.model("movies", Movie)
