function fibs(num) {
    const fibArray = [];

    for (let i = 0; i < num; i++) {
        if (i < 2) {
            fibArray.push(i); // Push the first two numbers to get [0, 1].
        } else { // For the third number onwards,
            fibArray.push(fibArray[i - 2] + fibArray[i - 1]); // Add the previous two elements (numbers) in fibArray together and push the result into fibArray.
        }
    }

    return fibArray;
}

function fibsRec(num) {
    if (num == 2) {
        return [0, 1]; // Return [0, 1] once num decreases to 2.
    } else {
        // Return an array containing the spread (...) of the array resulting from fibsRec(num - 1) plus the addition of a new element (the sum of the previous two elements (numbers)).
        // When num == 2, [0, 1] is returned (see above).
        // When num == 3, [num - 3] equals element 0 while [num - 2] equals element 1 in [0, 1].
        // So, 0 + 1 = 1 -> This is added as the next element in the returned array.
        return [...fibsRec(num - 1), fibsRec(num - 1)[num - 3] + fibsRec(num - 1)[num - 2]];
    }
}

const readline = require('node:readline'); // From https://nodejs.org/en/learn/command-line/accept-input-from-the-command-line-in-nodejs

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Enter a number: ', enteredNum => {
    console.log('Iterative function: ', fibs(enteredNum));
    console.log('Recursive function: ', fibsRec(enteredNum));
    rl.close();
});