import './App.css'
import './index.css'
import './reservation.css'
import fs from 'fs';

import { createRoot } from 'react-dom/client'

function Reservation() {

    const queryParams = new URLSearchParams(window.location.search)
    const term = queryParams.get("name")

    fetch('http://localhost:5000/save-reservation', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(term)
    })

    return (
        <>
            <div class="reservation">
                <h1>Reservasjon</h1>
                <p>Value of term: {term}</p>
                <form action="reservation">
                    <button>
                    Avbestill
                    </button>
                </form>
            </div>
        </>
    )
}

createRoot(document.getElementById('root')).render(
    <Reservation />
)
