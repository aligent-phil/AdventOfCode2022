const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
  });

  let highestTotal = 0;
  let currentTotal = 0;

  rl.on('line', (line) => {
    const calories = parseInt(line);
    if(!calories) {
        if (highestTotal < currentTotal) {
            highestTotal = currentTotal;
        }
        currentTotal = 0;
    }
    else currentTotal += calories;
  });

  rl.on('close', () => {
    console.log(highestTotal);
  })
