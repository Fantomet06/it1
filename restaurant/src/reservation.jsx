import './index.css'
import './reservation.css'

import { createRoot } from 'react-dom/client'

function Reservation() {

    const queryParams = new URLSearchParams(window.location.search)
    const name = queryParams.get("name")
    const email = queryParams.get("email")
    const time = queryParams.get("revervation-time")



    fetch('http://localhost:5000/save-reservation', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(name)
    })

    return (
        <>
            <div class="reservation">
                <h1>Reservasjon</h1>
                <p>Navn: {name}</p>
                <p>Epost: {email}</p>
                <p>Tid:{time} </p>
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
