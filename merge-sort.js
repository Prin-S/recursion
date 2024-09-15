function mergeSort(arr) {
    if (arr.length == 1) { // When an array contains one element, e.g. when an array with an odd number of elements is entered at the beginning
        return arr;
    } else if (arr.length == 2) { // When an array contains two elements, return an array containing the smaller number as the first element and the larger number as the second element.
        if (arr[0] <= arr[1]) { // If the first element is smaller
            return [arr[0], arr[1]];
        } else { // If the second element is smaller
            return [arr[1], arr[0]];
        }
    } else {
        const half = Math.ceil(arr.length/2); // An array with an odd number of elements may be entered at the beginning.

        let arr1 = mergeSort(arr.slice(0, half)); // Separate the entered array into two halves.
        let arr2 = mergeSort(arr.slice(half));

        return sortTwoArrays(arr1, arr2);
    }
}

function sortTwoArrays(arr1, arr2) {
    const sortedArr = [];

    while (arr1.length > 0 && arr2.length > 0) { // As long as both arrays have at least one element,
        if (arr1[0] <= arr2[0]) { // If the first element in arr1 is smaller than the first element in arr2,
            sortedArr.push(arr1.shift()); // Remove the first element from arr1 and push it into sortedArr.
        } else if (arr2[0] <= arr1[0]) { // If the first element in arr2 is smaller than the first element in arr1,
            sortedArr.push(arr2.shift()); // Remove the first element from arr2 and push it into sortedArr.
        }
    }
    
    if (arr1.length == 0) { // After the while loop finishes, if arr1 has no elements left,
        arr2.forEach(element => sortedArr.push(element)); // Push the remaining elements in arr2 into sortedArr.
    } else if (arr2.length == 0) { // If arr2 has no elements left,
        arr1.forEach(element => sortedArr.push(element)); // Push the remaining elements in arr1 into sortedArr.
    }

    return sortedArr;
}

const readline = require('node:readline'); // From https://nodejs.org/en/learn/command-line/accept-input-from-the-command-line-in-nodejs

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Enter an array: ', enteredArr => {
    try {
        if (Array.isArray(JSON.parse(enteredArr))) {
            console.log(mergeSort(JSON.parse(enteredArr)));
        } else { // Such as when a number is entered
            console.log('This is not an array.');
        }
    } catch (err) {
        if (err instanceof SyntaxError) { // Such as when a string is entered
            console.log('This is not an array.');
        }
    }

    rl.close();
});