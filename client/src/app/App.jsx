import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import { NavBar } from "../components"

const App = () => {
  return (
    <div className="h-screen justify-top items-center flex flex-col mb-10 px-5">
      <Router>
        <NavBar />
      </Router>
    </div>
  )
}

export { App }
