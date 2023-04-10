import React from "react"

import { Logo } from "./Logo"
import { NavOptions } from "./NavOptions"

const NavBar = () => {
	return (
		<div className="navbar bg-zinc-700 border border-zinc-700 rounded-lg mt-2 mb-5">
			<div className="flex-1">
				<Logo />
				<NavOptions />
			</div>
		</div>
	)
}

export { NavBar }
