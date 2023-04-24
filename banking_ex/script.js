

/* let deposit_ = 1000;
let withdrawl_ = 1100;
let amount = 0;

function deposit (){
    amount = amount + deposit_;
    return amount;
}

function withdrawl (){
    if (amount > withdrawl_){
        amount = amount - withdrawl_;
    }else{
        console.log("non hai abbastanza soldi");
        amount = amount - withdrawl_;
    }
    return amount;
}
console.log(deposit(deposit_));
console.log(withdrawl(withdrawl_)); */

class BankAccount {
    constructor(owner, balance){
        this.owner = owner;
        this.balance = balance;
    }
    newAccount = new BankAccount("Luca", 500);
    
    showBalance(){
        console.log("il nostro saldo è " + amount + " Euro");
    }
    deposit(amount){
        console.log("il deposito è " + amount + " Euro");
        this.balance += amount;
        this.showBalance;
    }
    whitdrawl(amount){
        if(amount > this.balance){
            console.log("non hai soldi");
        }else{
            console.log("il saldo è " + amount + " Euro");
            this.balance -= amount;
            this.showBalance;
        }
    }
}