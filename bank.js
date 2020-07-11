let deposit = require('./lib/deposit');
let showBalance = require('./lib/showBalance');
let withdraw = require('./lib/withdraw');
let showDeposits = require('./lib/showDeposits');

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
            showDeposits();
        break;
    }
}

init();
