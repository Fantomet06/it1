import '../css/style.css';
import { changeName } from './changename.js';

document.querySelector('#app').innerHTML = `
  <p>Spiller 1</p>
  <p id="name">Sigurd</p>
  <div style="display: flex">
    <input type="text" id="new-name" />
    <button id="change-name">Endre navn</button>
  </div>
`;

const nameElement = document.querySelector('#name');
const buttonElement = document.querySelector('#change-name');
const inputElement = document.querySelector('#new-name');

changeName(buttonElement, nameElement, inputElement);
