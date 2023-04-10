import React, { useEffect, useState } from "react"
import api from "../api"
import { useParams } from "react-router-dom"

const GamesForm = () => {
	const { id } = useParams()
	const [title, setTitle] = useState("")
	const [rating, setRating] = useState(0)
	const [esrb, setEsrb] = useState("")
	const [publisher, setPublisher] = useState("")
	const [developer, setDeveloper] = useState("")
	const [platform, setPlatform] = useState("")
	const [loading, setLoading] = useState(false)

	const onSubmitHandler = async () => {
		setLoading(true)
		if (title, rating, esrb, publisher, developer, platform) {
			let platformArray = []
			platform.split(",").forEach(item => platformArray.push(String(item).trim()))
			const payload = { title, rating, esrb, publisher, developer, platform: platformArray }
			if (id) {
				await api.updateGameById(id, payload)
					.then(res => {
						window.alert("Game updated successfully")
						window.location.href = "/games"
					})
			} else {
				await api.insertGame(payload)
					.then(res => {
						window.alert("Game created successfully")
						setTitle("")
						setRating(0)
						setEsrb("")
						setPublisher("")
						setDeveloper("")
						setPlatform("")
						setLoading(false)
					})
			}
		} else {
			setLoading(false)
		}
	}

	useEffect(() => {
		async function getGameById() {
			if (id) {
				const game = await api.getGameById(id)
				if (game) {
					setTitle(game.data.values.title)
					setRating(game.data.values.rating)
					setEsrb(game.data.values.esrb)
					setPublisher(game.data.values.esrb)
					setDeveloper(game.data.values.developer)
					setPlatform(game.data.values.platform.join(", "))
				}
			}
		}
		getGameById()
	}, [])

	return (
		<div className="form-control w-1/2">
			<label>Game Title</label>
			<input
				type="text" 
				className="input input-bordered mb-5"
				value={title}
				onChange={(event) => setTitle(event.target.value)}
			/>
			<label>Rating</label>
			<input
				type="range"
				min="0"
				max="10"
				step="0.1"
				value={rating}
				className="range range-lg"
				onChange={(event) => setRating(event.target.value)}
			/>
			<div className="w-full flex justify-between text-xs px-2 mb-5">
				<span>|</span>
				<span>|</span>
				<span>|</span>
				<span>|</span>
				<span>|</span>
				<span>|</span>
				<span>|</span>
				<span>|</span>
				<span>|</span>
				<span>|</span>
			</div>
			<label>ESRB Rating</label>
			<div className="form-control">
				<label className="label cursor-pointer">
					<span className="label-text">Everyone</span> 
					<input
						type="radio"
						name="radio-10"
						className="radio checked:bg-green-500"
						checked={esrb === "Everyone"}
						onChange={() => setEsrb("Everyone")}
					/>
				</label>
			</div>
			<div className="form-control">
				<label className="label cursor-pointer">
					<span className="label-text">Everyone 10+</span> 
					<input
						type="radio"
						name="radio-10"
						className="radio checked:bg-blue-500"
						checked={esrb === "E10+"}
						onChange={() => setEsrb("E10+")}
					/>
				</label>
			</div>
			<div className="form-control">
				<label className="label cursor-pointer">
					<span className="label-text">Teen</span> 
					<input
						type="radio"
						name="radio-10"
						className="radio checked:bg-yellow-500"
						checked={esrb === "Teen"}
						onChange={() => setEsrb("Teen")}
					/>
				</label>
			</div>
			<div className="form-control mb-5">
				<label className="label cursor-pointer">
					<span className="label-text">Mature</span> 
					<input
						type="radio"
						name="radio-10"
						className="radio checked:bg-red-500"
						checked={esrb === "Mature"}
						onChange={() => setEsrb("Mature")}
					/>
				</label>
			</div>
			<label>Publisher</label>
			<input
				type="text"
				className="input input-bordered mb-5"
				value={publisher}
				onChange={(event) => setPublisher(event.target.value)}
			/>
			<label>Developer/Studio</label>
			<input
				type="text"
				className="input input-bordered mb-5"
				value={developer}
				onChange={(event) => setDeveloper(event.target.value)}
			/>
			<label>Game Platforms</label>
			<input
				type="text"
				className="input input-bordered mb-5"
				value={platform}
				onChange={(event) => setPlatform(event.target.value)}
			/>
			<div className="btn-group justify-end">
				<button
					className={
						loading ?
						(id ? "btn btn-secondary loading" : "btn btn-primary loading") :
						(id ? "btn btn-secondary" : "btn btn-primary")
					}
					onClick={() => onSubmitHandler()}
				>
					{ id ? "Update" : "Submit" }
				</button>
				<button className="btn btn-error" onClick={() => window.location.href = "/games"}>Cancel</button>
			</div>
		</div>
	)
}

export { GamesForm }
