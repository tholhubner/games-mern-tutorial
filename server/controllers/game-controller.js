const Game = require("../models/Game")

createGame = (request, response) => {
	try {
		const requestBody = request.body
		if (!requestBody) {
			return response.status(400).json({
				success: false,
				error: "Please provide a game to create..."
			})
		}
		const game = new Game(body)
		if (!game) {
			return response.status(400).json({
				success: false,
				error: err,
			})
		}
		game.save()
			.then(() => {
				return response.status(200).json({
					success: true,
					id: game._id,
					message: "Game successfully added to DB!"
				})
				.catch(error => {
					return response.status(400).json({
						success: false,
						error,
						message: "Game creation failed, due to following error..."
					})
				})
			})
	} catch (error) {
		return response.status(400).json({
			success: false,
			error
		})
	}
}

getGameById = (request, response) => {

}

getAllGames = (request, response) => {

}

updateGame = (request, response) => {

}

deleteGame = (request, response) => {

}

module.exports = {
	createGame,
	getGameById,
	getAllGames,
	updateGame,
	deleteGame,
}
