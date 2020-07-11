let fs = require('fs');

let showBalance = () => {
    fs.readFile('balance.txt', function(err, data) {
        if (err) {
            throw err;
        }
        console.log(`Balance: $${data}`)
    })
}

module.exports = showBalance;