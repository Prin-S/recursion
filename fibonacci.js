function fibs(num) {
    const fibArray = [];

    for (let i = 0; i < num; i++) {
        if (i < 2) {
            fibArray.push(i); // Push the first two numbers to get [ 0, 1 ].
        } else { // For the third number onwards,
            fibArray.push(fibArray[i - 2] + fibArray[i - 1]); // Add the previous two numbers in fibArray together and push the result into fibArray.
        }
    }

    return fibArray;
}

const readline = require('node:readline'); // From https://nodejs.org/en/learn/command-line/accept-input-from-the-command-line-in-nodejs

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`Enter a number:`, enteredNum => {
    console.log(fibs(enteredNum));
    rl.close();
});