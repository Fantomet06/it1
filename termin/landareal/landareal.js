let land = [
    { navn: "Danmark", areal: 42933 },
    { navn: "Norge", areal: 385207 },
    { navn: "Sverige", areal: 450295 },
    { navn: "Finland", areal: 338440 },
    { navn: "Island", areal: 103000 }
]

function find_smallest_area(land) {
    let smallest_area = land[0].areal
    let smallest_country = land[0]
    land.forEach(element => {
        if (element.areal < smallest_area) {
            smallest_area = element.areal
            smallest_country = element
        }
    });

    return smallest_country
}

let minst_land = find_smallest_area(land)
console.log("Landet med minst areal er: ", minst_land.navn, "med", minst_land.areal, "km^2")