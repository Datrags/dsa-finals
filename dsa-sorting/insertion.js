function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1;
        // Shift elements 
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        // Place the current element in its correct position
        arr[j + 1] = current;
    }
    return arr;
}

module.exports = insertionSort;