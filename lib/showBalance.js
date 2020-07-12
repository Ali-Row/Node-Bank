const fs = require('fs');
const Table = require('cli-table');

const showBalance = () => {

    let table = new Table({
        head: ['Current balance'], 
        colWidths: [20]
    });

    fs.readFile('./db/balance.txt', function(err, balance) {
        if (err) throw err;
        balance = JSON.parse(balance).toFixed(2);
        table.push(['$' + balance]);
        console.log(table.toString() + '\n');
    })
}

module.exports = showBalance;