import { oppdaterHandlekurv  } from "./handlekurv";

let billetter = [
  {navn: "Voksenbillett", pris: 295, antall: 0},
  {navn: "Barnebillett (3-16år)", pris: 149, antall: 0},
  {navn: "Barnebillett (0-3år)", pris: 0, antall: 0},
  {navn: "Badeland", pris: 139, antall: 0},
  {navn: "Overraskelsesposer", pris: 99, antall: 0}
]

let antallBilletter = JSON.parse(localStorage.getItem('handlekurv'))  || 0;

let local = JSON.parse(localStorage.getItem('handlekurv'))
if (local) {
  billetter = local
}

function oppdaterBillett(navn, delta) {
  const index = billetter.findIndex(billett => billett.navn === navn);

  const billett = billetter[index]

  if (billett.navn == "Badeland" || billett.navn == "Overraskelsesposer") {
    if (billetter[index].antall < antallBilletter || delta == -1) {
      billetter[index].antall += delta;
    }
  } else {
    billetter[index].antall += delta;
    antallBilletter += delta
    localStorage.setItem('antallBilletter', antallBilletter)
  }
  // hvis man antall er mindre enn null, sett den til null
  // kan ikke selge minus billetter
  if (billetter[index].antall <= 0) {
        billetter[index].antall = 0
    }
  localStorage.setItem('handlekurv', JSON.stringify(billetter));
  

  visBilletter();
  oppdaterHandlekurv();
}


function visBilletter() {
  const billetterEl = document.querySelector("#billetter");
  billetterEl.innerHTML = ``

  billetter.forEach(billett => {
      const billettEl = document.createElement('div');
      billettEl.id = `${billett.navn}`

      billettEl.innerHTML = `
          <h4>${billett.navn}</h4>
          <p>Price: ${billett.pris} NOK</p>
          <div>
              <button class="decrease">-</button>
              <span>${billett.antall}</span>
              <button class="increase">+</button>
          </div>
      `;

      billettEl.querySelectorAll('button').forEach(button => {
          button.addEventListener('click', () => {
              const add_or_decrease = button.classList.contains('increase') ? 1 : -1;
              oppdaterBillett(billett.navn, add_or_decrease);
          });
      });

      billetterEl.appendChild(billettEl);
  });
  //document.querySelector("#Badeland").innerHTML += `<img alt="bilde av barn som bader" src="/badeland.jpeg" />`
  //document.querySelector("#Overraskelsesposer").innerHTML += `<img alt="bilde av overraskelsespose" src="/overraskelsespose.jpeg" />`
}

const barnevogn = document.querySelector("#barnevogn");
barnevogn.addEventListener('change', oppdaterHandlekurv);

oppdaterHandlekurv();
visBilletter();

