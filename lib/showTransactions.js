let fs = require('fs');

let showTransactions = () => {
    fs.readFile('./db/bank.json', function(err, data) {
        if (err) {
            throw err;
        }
        let allTransactions = JSON.parse(data);

        console.log('\nAll deposits on this account:');
        for(each of allTransactions) {
            console.log('$' + each)
        }
        console.log('\n');
    })
}

module.exports = showTransactions;