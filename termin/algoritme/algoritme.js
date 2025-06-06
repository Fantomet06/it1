let inputtall = 0.00000000027

function standardform(inputtall) {
    let tall = inputtall
    let n = 0

    while (tall >= 10) {
        tall = tall/10
        n++;
    }

    while (tall <= 1) {
        tall = tall*10
        n--;
    }

    tall = Number.parseFloat(tall).toFixed(2);
    return [tall, n]
}

let tall = standardform(inputtall)
console.log(`${inputtall} er ${tall[0]}*10^${tall[1]} i standardform`)