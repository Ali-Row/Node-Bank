let deposit = require('../lib/deposit');
let showBalance = require('../lib/showBalance');
let withdraw = require('../lib/withdraw');
let showTransactions = require('../lib/showTransactions')

const init = () => {

    let method = process.argv[2];
    
    switch(method) {
        case 'balance':
            showBalance();
        break;
        case 'deposit':
            deposit();
        break;
        case 'withdraw':
            withdraw();
        break;
        case 'history':
            showTransactions();
        break;
    }
}

init();
