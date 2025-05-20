let books = [];

fetch('/books.json')
  .then(response => response.json())
  .then(data => {
    books = data;
    //console.log("Loaded books:", books);
    visBøker();
    updateCartIcon();
  })
  .catch(error => {
    console.error("Error fetching books:", error);
  });

// Variabel for handlekurv (initielt udefinert)
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

function addToCart(bookId) {
  for (const book of books) {
    if (book.id === bookId) {
      updateCart(book);
      updateCartIcon();
    }
  }
}

function updateCart(book) {

  const storedCart = localStorage.getItem("cart");
  let shoppingCart = storedCart ? JSON.parse(storedCart) : [];
  // exit = [item in shoppingCart if item.id == book.id]
  const exist = shoppingCart.find(item => item.id === book.id);
  if (exist) {
    exist.count += 1;
  } else {
    // shoppingCart.append({book, count: 1})
    shoppingCart.push({ ...book, count: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(shoppingCart));
}


function updateCartIcon () {
  let itemcount = Object.keys(JSON.parse(localStorage.getItem('cart'))).length || 0;
  console.log(itemcount);
  document.querySelector('#cart-icon').setAttribute("value", itemcount);
}