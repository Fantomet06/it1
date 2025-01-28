export function changeName(button, element, newname) {
  button.addEventListener('click', () => {
      const name = document.querySelector("#new-name").value;

      const info = document.querySelector("#info");
      info.innerHTML = `
        <p>Tittel</p>
        <p>Navn: ${name}</p>
        <p>tlf: </p>
        <p>Trinn: </p>
        <p>Om personen</p>
      `
  });
}