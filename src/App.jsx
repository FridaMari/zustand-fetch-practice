import { User } from "./components/User"

import "./App.css"
import { SecondCount } from "./components/SecondCount"

export const App = () => {
  return (
    <>
      <h1>Zustand fetch practice</h1>
      <p>Create a store with a state that matches User.jsx</p>
      <User />
      <SecondCount />
    </>
  )
}
