const fs = require('fs');
const writeBalance = require('./writeBalance');
const Table = require('cli-table');

const userInput = parseFloat(process.argv[3]);

let deposit = () => {

    let table = new Table({
        head: ['Deposited'], 
        colWidths: [20]
    });

    fs.readFile('./db/bank.json', function(err, data){
        if (err) throw err;
        
        deposit = JSON.parse(data);
        deposit.push(userInput);

        fs.writeFile('./db/bank.json', JSON.stringify(deposit), function(err){
            if (err) throw err;
            
            table.push(['+$' + userInput]);
            console.log(table.toString());
            writeBalance();
        });
    })    
}

module.exports = deposit;