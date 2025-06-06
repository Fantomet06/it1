import './style.css'

let sorted = false;

let land_unsorted = [
    { navn: "Danmark", areal: 42933 },
    { navn: "Norge", areal: 385207 },
    { navn: "Sverige", areal: 450295 },
    { navn: "Finland", areal: 338440 },
    { navn: "Island", areal: 103000 }
]

// tar land a, sammenlikner med land b
let land_sorted = [...land_unsorted].sort((a, b) => a.navn.localeCompare(b.navn))

// function to generate HTML
function generate_table(land) {
  document.querySelector('#table-content').innerHTML = `` //fjern alt som er der

  land.forEach(element => {
    document.querySelector('#table-content').innerHTML += `
        <tr>
          <th scope="row">${element.navn}</th>
          <td>${element.areal}</td>
        </tr>
    `
  });
}

document.querySelector("#sort-button").addEventListener('click', function (e) {
  
  if (sorted == true) { 
    // if already sorted -> unsort
    generate_table(land_unsorted)
    sorted = false
  } else { 
    // if not sorted -> use the sorted list
    generate_table(land_sorted)
    sorted = true
  }
})

//when first loading the page
generate_table(land_unsorted)