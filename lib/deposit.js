let fs = require('fs');
let writeBalance = require('./writeBalance');

let userInput = parseInt(process.argv[3]);

let deposit = () => {
    fs.readFile('bank.json', function(err, data){
        if (err) {
            throw err;
        }
        transaction = JSON.parse(data);
        transaction.push(userInput);
        fs.writeFile('bank.json', JSON.stringify(transaction), function(err){
            if (err) {
                throw err;
            }
            console.log(`\nDeposited: $${userInput}`);
            writeBalance();
        });
    })    
}

module.exports = deposit;