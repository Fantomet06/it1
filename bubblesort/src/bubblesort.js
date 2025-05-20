export function bubbleSort(list) {
    let n = list.length;
    let swapped = false;
    
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (list[j] > list[j + 1]) {
            // Swap list[j] and list[j + 1]
            let temp = list[j];
            list[j] = list[j + 1];
            list[j + 1] = temp;
            swapped = true;
            }
        }
        // If no two elements were swapped in the inner loop, then break
        if (!swapped) {
            break;
        }
    }
    console.log("Sorted list:", list);
}

let list = [5, 3, 8, 4, 2];
