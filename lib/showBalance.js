const fs = require('fs');

const showBalance = () => {
    fs.readFile('./db/balance.txt', function(err, data) {
        if (err) {
            throw err;
        }
        console.log(`Balance: $${data}`)
    })
}

module.exports = showBalance;