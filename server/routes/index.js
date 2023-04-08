const express = require("express")
const router = express.Router()
const GameController = require("../controllers/game-controller")

router.delete("/game/:id", GameController.deleteGame)
router.get("/game/:id", GameController.getGameById)
router.get("/games", GameController.getAllGames)
router.post("/game", GameController.createGame)
router.put("/game/:id", GameController.updateGame)

module.exports = router
