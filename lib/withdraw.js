let fs = require('fs');
let userInput = parseInt(process.argv[3]);

let withdraw = () => {
    fs.readFile('balance.txt', function(err, data) {
        if (err) {
            throw err;
        }
        let newBalance = data - userInput;
        if (userInput > 500) {
            console.log('\nThe max you can withdraw is $500\n')
        } else if (userInput > data) {
            console.log('\nYou don\'t have sufficient funds!\n')
        } else {
            console.log(`\nWithdrew: $${userInput}\n\nYour new balance is: $${newBalance}\n`)
            fs.writeFile('balance.txt', newBalance, function(err) {
                if (err) {
                    throw err;
                }
            })
        }  
    })
}

module.exports = withdraw;