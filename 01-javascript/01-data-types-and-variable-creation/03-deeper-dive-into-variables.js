const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const person = {
    name: "Bryce",
    age: 37,
    employer: {
        name: "workfront",
        address: "In Lehi",
        phone: "(801) 555 - 5555"
    }
}

// Create a variable ()

readline.question('What type of entry would you like to save for the user?', userInput => {
    console.log(`Hey there ${name}!`);
    readline.close();
  });