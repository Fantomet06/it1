import '../css/kort.css'

localStorage.setItem("myCat", "Tom");

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
                <label for="selectTrinn">Velg klassetrinn:</label>
                <select id="selectTrinn">
                  <option value="vg1">1. klasse</option>
                  <option value="vg2">2. klasse</option>
                  <option value="vg3">3. klasse</option>
                </select>
            </form>              
        <li>
            Om deg: <input type="text" id="new-bio" maxlength="25" />
        </li>
        <li>
            Last opp bilde: <input type="file" id="image-upload" accept="image/*">
        </li>
        <li>
            Velg bakgrunnsfarge: <input type="color" id="bg-color-picker" value="#ffffff">
        </li>
    </ul>
`


const inputs = document.querySelectorAll('input');
const select = document.querySelector('#selectTrinn'); // <== add this

inputs.forEach(input => {
    input.addEventListener('input', updateValue);
});

select.addEventListener('change', updateValue); // <== this line is new

function updateValue(e) {
    const nameEl = document.querySelector('#name');
    const tlfEl = document.querySelector('#tlf');
    const bioEl = document.querySelector('#bio');
    const trinnEl = document.querySelector('#trinn');
    const profilePic = document.querySelector('#profile-pic');
    const boxEl = document.querySelector('.red-box');


    nameEl.textContent = "Navn: " + document.querySelector('#new-name').value;
    tlfEl.textContent = "Tlf: " + document.querySelector('#new-phone').value;
    bioEl.textContent = "Om personen: " + document.querySelector('#new-bio').value;
    trinnEl.textContent = "Trinn: " + document.querySelector('#selectTrinn').value;
    boxEl.style.backgroundColor = this.value;

    const file = this.files[0];
    if (file) {
        const reader = new FileReader();

        reader.addEventListener('load', function () {
        profilePic.src = reader.result;
        });

        reader.readAsDataURL(file);
    }
}

