export function changeName(name) {
  const info = document.querySelector("#info");
      info.innerHTML = `
        <p>Tittel</p>
        <p>Navn: ${name}</p>
        <p>tlf: </p>
        <p>Trinn: </p>
        <p>Om personen</p>
      `
}