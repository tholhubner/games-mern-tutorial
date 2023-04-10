import React from "react"
import api from "../api"

const Button = (props) => {
	const { id, type } = props
	const deleteItem = () => {
		if (window.confirm("Delete this game permanently?")) {
			api.deleteGameById(id)
			window.location.reload()
		}
	}

	const updateItem = () => {
		window.location.href = `/games/update/${id}`
	}

	switch(type) {
		case "delete":
			return (
				<span>
					<button
						className="btn btn-outline btn-xs btn-error my-1"
						onClick={() => deleteItem()}
					>
						Delete
					</button>
				</span>
			)
		case "update":
			return (
				<span>
					<button
						className="btn btn-outline btn-xs btn-secondary my-1"
						onClick={() => updateItem()}
					>
						Update
					</button>
				</span>
			)
	}
}

export { Button }
