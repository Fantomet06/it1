export function oppdaterHandlekurv() {
  let handlekurv = JSON.parse(localStorage.getItem('handlekurv')) || [];

  let kurvEl = document.querySelector("#handlekurv")
  let total = 0

  kurvEl.innerHTML = `` //fjern det som er der fra før
  handlekurv.forEach(billett => {
    if (billett.antall != 0) {
      kurvEl.innerHTML += `<h4>${billett.navn}:</h4> <br>${billett.antall} billetter for ${billett.pris*billett.antall} NOK <br><br>`
      total += billett.pris*billett.antall
    }
  });

  kurvEl.innerHTML += `<br>Total: ${total} - Barnevogn: ${document.querySelector("#barnevogn").value}`
}