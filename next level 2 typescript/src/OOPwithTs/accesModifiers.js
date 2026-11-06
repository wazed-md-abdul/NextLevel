class BankAccount {
    userId;
    userName;
    userBalance;
    constructor(userId, userName, userBalance) {
        this.userId = userId;
        this.userName = userName;
        this.userBalance = userBalance;
    }
    getBalance() {
        return this.userBalance;
    }
    addBalance(amount) {
        this.userBalance += amount;
    }
}
const wazedsAccount = new BankAccount(111, "Wazeds", 1000);
wazedsAccount.addBalance(500);
wazedsAccount.addBalance(500);
console.log(wazedsAccount.getBalance());
export {};
// i can use also protected instead of private if its to make a instance of the class
