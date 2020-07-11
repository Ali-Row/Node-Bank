const fs = require('fs');
const Table = require('cli-table');

const showBalance = () => {

    let table = new Table({
        head: ['Current balance'], 
        colWidths: [20]
    });

    fs.readFile('./db/balance.txt', function(err, data) {
        if (err) {
            throw err;
        }
        table.push(['$' + data]);
        console.log(table.toString() + '\n');
    })
}

module.exports = showBalance;