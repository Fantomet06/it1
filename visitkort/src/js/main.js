import '../css/kort.css'

import { changeName } from './updates.js'

document.querySelector('#app').innerHTML = `
<ul>
        <li>
            <input type="text" id="new-name" />
        </li>

        <li>
            <input type="text" id="new-phone" />
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
            <input type="text" id="new-name" />
            <button id="change-name">Oppdater bio</button>
        </li>
    </ul>
`

const input = document.querySelector('#new-name');
const log = document.querySelector('#name');

input.addEventListener('input', updateValue);

function updateValue(e) {
    
}

//changeName(document.querySelector("#change-name"), document.querySelector("#name"), document.querySelector("#new-name"));
