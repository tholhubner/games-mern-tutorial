import React from "react"
import { Link } from "react-router-dom"

const NavOptions = () => {
	return (
		<React.Fragment>
			<div className="flex-1">
				<Link to="/" className="">GamesDB</Link>
			</div>
			<div className="flex-none">
				<ul className="menu menu-horizontal px-1">
					<li>
						<Link to="/games" className="nav-link">Games List</Link>
					</li>
					<li>
						<Link to="/games/create" className="nav-link">Add Game</Link>
					</li>
				</ul>
			</div>
		</React.Fragment>
	)
}

export { NavOptions }
