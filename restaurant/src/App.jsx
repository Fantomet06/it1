import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const queryParams = new URLSearchParams(window.location.search)
  const term = queryParams.get("term")

  return (
    <>
      <h1>Reservasjon</h1>
      <p>Value of term: {term}</p>
      <form action="reservation">
        <input type="text" placeholder="Navn" name="name" />
        <input type="text" placeholder="Epost" name="email" />
        <input
          id="time"
          type="datetime-local"
          name="revervation-time"/>

        <button onClick={() => setCount((count) => count + 1)}>
          Reserver
        </button>
      </form>
    </>
  )
}

export default App
