import '../css/kort.css'

import { changeName } from './updates.js'

document.querySelector('#app').innerHTML = `
<ul>
        <li>
            Navn: <input type="text" id="new-name" maxlength="25"/>
        </li>

        <li>
            Tlf: <input type="number" id="new-phone" />
        </li>

        <li>
            <form action="">
                <label for="cars">Velg klassetrinn:</label>
                <select name="cars" id="cars">
                  <option value="vg1">1. klasse</option>
                  <option value="vg2">2. klasse</option>
                  <option value="vg3">3. klasse</option>
                </select>
                <input type="submit" value="Oppdater">
            </form>              
        <li>
            Om deg: <input type="text" id="new-bio" maxlength="25" />
        </li>
    </ul>
`



const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
    input.addEventListener('input', updateValue);
});

function updateValue(e) {
    const nameEl = document.querySelector('#name');
    const tlfEl = document.querySelector('#tlf');
    const bioEl = document.querySelector('#bio');

    nameEl.textContent = "Navn: " + document.querySelector('#new-name').value;
    tlfEl.textContent = "Tlf: " + document.querySelector('#new-phone').value;
    bioEl.textContent = "Om personen: " + document.querySelector('#new-bio').value;
}

//changeName(document.querySelector("#change-name"), document.querySelector("#name"), document.querySelector("#new-name"));
