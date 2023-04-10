import React, { useEffect, useState } from "react"
import api from "../api"
import { GamesTable } from "../components"

const GamesList = () => {
	const [games, setGames] = useState([])
	const [showTable, setShowTable] = useState(false)

	useEffect(() => {
		async function fetchGamesList() {
			const request = await api.getAllGames()
			if (request.data.values.length) {
				console.log("Games Got :: ", request.data.values)
				setGames(request.data.values)
				setShowTable(true)
			}
		}
		fetchGamesList()
	}, [])

	return (
		<>
			{showTable && (
				<GamesTable items={games} />
			)}
		</>
	)
}

export { GamesList }
