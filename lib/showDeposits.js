const fs = require('fs');
const Table = require('cli-table');

let showDeposits = () => {

    fs.readFile('./db/bank.json', function(err, data) {
        let table = new Table({
            head: ['All deposits on this account'], 
            colWidths: [30]
        });

        if (err) {
            throw err;
        }
        let allTransactions = JSON.parse(data);

        for(each of allTransactions) {
            table.push(['+$' + each]);
        }
        console.log(table.toString() + '\n');
    })
}

module.exports = showDeposits;