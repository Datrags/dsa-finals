function merge(arr1, arr2) {

    let newArr = [];
    let i = 0, j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            newArr.push(arr1[i]);
            i++;
        } else {
            newArr.push(arr2[j]);
            j++;
        }
    }
    if (i < arr1.length) {
        newArr.push(...arr1.slice(i));
    }
    if (j < arr2.length) {
        newArr.push(...arr2.slice(j));
    }

    return newArr;
}

function mergeSort(arr) {

    if (arr.length <= 1) return arr;

    let arr1 = arr.slice(0, Math.floor(arr.length / 2));
    let arr2 = arr.slice(arr.length / 2);

    let sortLeft = mergeSort(arr1);
    let sortRight = mergeSort(arr2);

    return merge(sortLeft, sortRight);
}

module.exports = { merge, mergeSort};