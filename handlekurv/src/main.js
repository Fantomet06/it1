const books = [
  { id: 1, tittel: "1984", forfatter: "George Orwell", pris: 199 },
  { id: 2, tittel: "Dune", forfatter: "Frank Herbert", pris: 249 },
  { id: 3, tittel: "Harry Potter", forfatter: "J.K. Rowling", pris: 159 },
  { id: 4, tittel: "2001: En romodyssé",forfatter: "Arthur C. Clarke",pris: 219,},
  { id: 5, tittel: "2010: Andre romodysseen",forfatter: "Arthur C. Clarke",pris: 229,},
  { id: 6, tittel: "Blade Runner", forfatter: "Philip K. Dick", pris: 189 },
];

// Variabel for handlekurv (initielt udefinert)
let shoppingCart = [];
let total = 0;

function visBøker() {
  const bokListe = document.querySelector("#book-list");
  bokListe.innerHTML = "";
  for (const bok of books) {
    const bokElement = document.createElement("div");
    bokElement.classList.add("book");
    // Legg til bokinfo med template literal
    bokElement.innerHTML = `
            <h3>${bok.tittel}</h3>
            <p>Av: ${bok.forfatter}</p>
            <p>Pris: ${bok.pris} NOK</p>
        `;
    // Opprett knapp med createElement
    const knapp = document.createElement("button");
    knapp.textContent = "Legg til i handlekurv";
    // Legg til en anonym funksjon i addEventListener
    knapp.addEventListener("click", function () {
      addToCart(bok.id);
    });
    // Legg knappen til bokElement
    bokElement.appendChild(knapp);
    // Legg bokElement til bokListe
    bokListe.appendChild(bokElement);
  }
}

visBøker();

function addToCart(bookId) {
  for (const book of books) {
    if (book.id === bookId) {
      shoppingCart.push(book);
      updateCart(book);
    }
  }
}

function updateCart(book) {

  // UPDATE LOCALSTORAGE
  if (shoppingCart === undefined) {
    const storedCart = localStorage.getItem("cart");
    shoppingCart = storedCart ? JSON.parse(storedCart) : [];
  }
  localStorage.setItem("cart", JSON.stringify(shoppingCart));

  // UPDATE HTML
  const cart = document.querySelector("#cart-list");
  const bookElement = document.createElement("div");
  bookElement.classList.add("cart-item");
  bookElement.innerHTML = `
        <h4>${book.tittel}</h4>
        <p>Pris: ${book.pris} NOK</p>
    `;
  cart.appendChild(bookElement);
  total += book.pris;
  document.querySelector("#totalpris").textContent = `${total}`;
}