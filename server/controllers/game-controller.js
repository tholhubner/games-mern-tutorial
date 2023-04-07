const Game = require("../models/Game")

createGame = (request, response) => {
	try {
		const requestBody = request.body
		if (!requestBody) {
			return response.status(400)
			.json({
				success: false,
				error: "Please provide a game to create...",
			})
		}

		const game = new Game(body)
		if (!game) {
			return response.status(400)
			.json({
				success: false,
				error: err,
			})
		}

		game.save()
			.then(() => {
				return response.status(200)
					.json({
						success: true,
						id: game._id,
						message: "Game successfully added to DB!",
					})
				})
			.catch(error => {
				return response.status(400)
					.json({
						success: false,
						error,
						message: "Game creation failed.",
					})
				})
	} catch (error) {
		return response.status(400)
			.json({
				success: false,
				error,
			})
	}
}

deleteGame = async (request, response) => {
	try {
		const gameRemoved = await Game.findByIdAndDelete({ _id: request.params.id })
		if (!gameRemoved) {
			return response.status(404)
				.json({
					success: false,
					error: "No game found with that id",
				})
		}

		return response.status(200)
			.json({
				success: true,
				values: gameRemoved,
			})
	} catch (error) {
		return response.status(400)
			.json({
				success: false,
				error,
			})
	}
}

getGameById = async (request, response) => {
	try {
		const game = await Game.findById({ _id: request.params.id })
		if (!game) {
			return response.status(404)
				.json({
					success: false,
					error: "No game found with that id",
				})
		}
		
		return response.status(200)
			.json({
				success: true,
				values: game,
			})
	} catch (error) {
		return response.status(500)
			.json({
				success: false,
				message: error.message,
			})
	}
}

getAllGames = async (request, response) => {
	try {
		const games = await Game.find()

		if (!games.length) {
			return response.status(400)
				.json({
					success: false,
					error: "No games to return"
				})
		}

		return response.status(200)
			.json({
				success: true,
				values: games,
			})
	} catch (error) {
		return response.status(400)
			.json({
				success: false,
				error,
			})
	}
}

updateGame = (request, response) => {

}

module.exports = {
	createGame,
	deleteGame,
	getGameById,
	getAllGames,
	updateGame,
}
