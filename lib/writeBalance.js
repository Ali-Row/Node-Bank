let fs = require('fs');

let writeBalance = () => {
    fs.readFile('bank.json', function(err, data) {
        if (err) {
            console.log(err);
        }
        let transactionHistory = JSON.parse(data);
        let balance = 0;

            for(each of transactionHistory) {
                balance += each;
            }

        fs.writeFile('balance.txt', balance, function(err){
            if (err) {
                throw err;
            }
        })
    })
}

module.exports = writeBalance;