const fs = require('fs');

const writeBalance = () => {
    fs.readFile('./db/bank.json', function(err, data) {
        if (err) throw err;
        
        let transactionHistory = JSON.parse(data);
        let balance = 0;

            for(each of transactionHistory) {
                balance += each;
            }

        fs.writeFile('./db/balance.txt', balance, function(err){
            if (err) throw err;
            
        })
    })
}

module.exports = writeBalance;