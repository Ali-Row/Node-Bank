const fs = require('fs');
const Table = require('cli-table');

const showDeposits = () => {

    fs.readFile('./db/bank.json', function(err, data) {
        if (err) throw err;
        

        let table = new Table({
            head: ['All transactions on this account'], 
            colWidths: [34]
        });

        let allTransactions = JSON.parse(data);

        for(i in allTransactions) {
            let index = allTransactions[i].toString();
            if(index[0] === '-') {
                table.push(['Withdraw: -$' + index.substring(1)]);
            } else {
                table.push(['Deposit: +$' + index]);
            }
        }
        console.log('\n' + table.toString() + '\n');
    })
}

module.exports = showDeposits;