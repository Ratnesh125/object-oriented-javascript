//constrctor function
function createAccount(name , balance){
    this.AccHolderName = name;
    this.balance = balance
}

//this returns object 
const AccHolder1 = new createAccount("ratnesh",1000);

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//adding methods
function createAccount(name , balance){
    this.AccHolderName = name;
    this.balance = balance

    this.deposit = function(amount){
        this.balance += amount;
    }
    this.withdrawl = function (amount){
        this.balance -= amount;
    }
}
this is memory extensive as when we create property or method in object, it needs memory, but the methods are same for all the created objects.
that's why we use prototype of the constructor to create methods in it, so that each object should only have data.
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

//creating methods in prototype 
createAccount.prototype.deposit =function(amount){
        this.balance += amount;
    }
createAccount.prototype.withdrawl =function(amount){
        this.balance -= amount;
    }

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

//using class
class createAccount{
    
    AccHolderName;
    balance;
    AccountNumber;
    
    constructor(name, amount){
        this.AccHolderName = name;
        this.balance = amount;
        this.AccountNumber = Date.now();
    }
    
    deposit(amount){
        this.balance += amount;
    }
    
    withdrawl(amount){
        this.balance -= amount;
    }
}

const AccountHolder1 = new createAccount("ratnesh",1000);
AccountHolder1.deposit(5000);
AccountHolder1.withdrawl(2000);

console.log(AccountHolder1)

------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//inheritance
class SavingAccount extends createAccount {
    transactionLimit = 100000;

    constructor(customerName, balance = 0) {
        super(customerName, balance);
    }

    takePersonalLoan(amount) {
        console.log('Taking personal loan: ' + amount);
    }
}

const AccountHolder1 = new SavingAccount("ratnesh",1000);
AccountHolder1.deposit(5000);
AccountHolder1.withdrawl(2000);

console.log(AccountHolder1)
