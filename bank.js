const deposit = require('./lib/deposit');
const showBalance = require('./lib/showBalance');
const withdraw = require('./lib/withdraw');
const showDeposits = require('./lib/showDeposits');

const init = () => {
    
    const method = process.argv[2];
    
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
