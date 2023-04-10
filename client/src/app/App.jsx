import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { NavBar } from "../components"
import { GamesForm, GamesList } from "../pages"

const App = () => {
  return (
    <div className="h-screen justify-top items-center flex flex-col mb-10 px-5">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/games" exact element={<GamesList />} />
          <Route path="/games/create" exact element={<GamesForm />} />
          <Route path="/games/update/:id" exact element={<GamesForm />} />
        </Routes>
      </Router>
    </div>
  )
}

export { App }
