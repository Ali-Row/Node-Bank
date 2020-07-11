const fs = require('fs');
const writeBalance = require('./writeBalance');

const userInput = parseInt(process.argv[3]);

const deposit = () => {
    fs.readFile('./db/bank.json', function(err, data){
        if (err) {
            throw err;
        }
        transaction = JSON.parse(data);
        transaction.push(userInput);
        fs.writeFile('./db/bank.json', JSON.stringify(transaction), function(err){
            if (err) {
                throw err;
            }
            console.log(`\nDeposited: $${userInput}`);
            writeBalance();
        });
    })    
}

module.exports = deposit;