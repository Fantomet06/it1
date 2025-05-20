import './style.css'
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

function showList(list, swap, status) {
  document.querySelector('#app').innerHTML = ``;

  list.forEach((item) => {
    let number = document.createElement('div');
    number.classList.add('number')
    number.innerHTML = `<h1>${item}</h1>`;

    if (swap.includes(item)) {
      number.classList.add('swap');
    }
    document.querySelector('#app').appendChild(number);
    
  })
  if (status !== "finished") {
    bubbleSort(list);
  }
}

function bubbleSort(list) {
  let n = list.length;
  let swapped = false;
  
  for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
          if (list[j] > list[j + 1]) {
          // Swap list[j] and list[j + 1]
          let temp = list[j];
          list[j] = list[j + 1];
          list[j + 1] = temp;

          let swap = [list[j], list[j + 1]];
          console.log("Swapped:", swap);
          return setTimeout(function() {
                      showList(list, swap);
                  }, 1000);
        }
      }
      console.log("Sorted list:", list);
      showList(list, [], "finished");
      break;
  }
}

let list = [1, 5, 3, 4, 2];
showList(list, []);