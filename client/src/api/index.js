import axios from "axios"

const api = axios.create({
	baseURL: "http://localhost:3000/api"
})

const insertGame = payload => api.post("/game", payload)
const getAllGames = () => api.get("/games")
const getGameById = id => api.get(`/game/${id}`)
const updateGameById = (id, payload) => api.put(`/game/${id}`, payload)
const deleteGameById = id => api.delete(`/game/${id}`)

const apis = {
	insertGame,
	getAllGames,
	getGameById,
	updateGameById,
	deleteGameById
}

export default apis