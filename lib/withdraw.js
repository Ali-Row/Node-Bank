const fs = require('fs');
const Table = require('cli-table');
const userInput = parseInt(process.argv[3]);

let withdraw = () => {

    let table = new Table({
        head: ['Withdrew', 'Your new balance'], 
        colWidths: [20, 20]
    });

    fs.readFile('./db/balance.txt', function(err, data) {
        if (err) {
            throw err;
        }
        let newBalance = data - userInput;
        if (userInput > 500) {
            console.log('\nThe max you can withdraw is $500\n')
        } else if (userInput > data) {
            console.log('\nYou don\'t have sufficient funds!\n')
        } else {
            table.push(['-$' + userInput, '$' + newBalance]);
            console.log(table.toString() + '\n');
            fs.writeFile('./db/balance.txt', newBalance, function(err) {
                if (err) {
                    throw err;
                }
            })
        }  
    })
}

module.exports = withdraw;