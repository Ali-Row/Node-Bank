const fs = require('fs');
const writeBalance = require('./writeBalance');
const Table = require('cli-table');
const { BADFLAGS } = require('dns');
const showBalance = require('./showBalance');

const userInput = parseInt(process.argv[3]);

let deposit = () => {

    let table = new Table({
        head: ['Deposited', 'Your new balance'], 
        colWidths: [20, 20]
    });

    fs.readFile('./db/bank.json', function(err, data){
        if (err) {
            throw err;
        }
        deposit = JSON.parse(data);
        deposit.push(userInput);
        fs.writeFile('./db/bank.json', JSON.stringify(deposit), function(err){
            if (err) {
                throw err;
            }

            fs.readFile('./db/balance.txt', function(err, balance) {
                if (err) {
                    throw err;
                }
                table.push(['+$' + userInput, '$' + balance]);
                console.log(table.toString());
                writeBalance();
            })
        });
    })    
}

module.exports = deposit;