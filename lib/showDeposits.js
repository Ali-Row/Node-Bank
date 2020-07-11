const fs = require('fs');
const Table = require('cli-table');

const showDeposits = () => {

    fs.readFile('./db/bank.json', function(err, data) {
        if (err) {
            throw err;
        }

        let table = new Table({
            head: ['All deposits on this account'], 
            colWidths: [30]
        });

        let allTransactions = JSON.parse(data);

        for(each of allTransactions) {
            table.push(['+$' + each]);
        }
        console.log(table.toString() + '\n');
    })
}

module.exports = showDeposits;