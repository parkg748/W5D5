const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
  if (sum === undefined) {
    sum = 0;
  }
  
  if (numsLeft > 0) {
    reader.question("Give me a number: ", function (number) {
      const num = parseInt(number);
      sum += num;
      numsLeft -= 1;
      console.log(sum);
      addNumbers(sum, numsLeft, completionCallback);
    });
  }
  if (numsLeft === 0) {
    completionCallback(sum);
  }
}

addNumbers(0, 3, function (sum) {
  console.log(`Total Sum: ${sum}`);
  reader.close();
});