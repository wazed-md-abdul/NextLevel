class BankAccount {
    userId;
    userName;
    userBalance;
    constructor(userId, userName, userBalance) {
        this.userId = userId;
        this.userName = userName;
        this.userBalance = userBalance;
    }
    set addBalance(amount) {
        this.userBalance += amount;
    }
    get getBalance() {
        return this.userBalance;
    }
}
const wazedsAccount = new BankAccount(111, "Wazeds", 1000);
wazedsAccount.addBalance = 500;
console.log(wazedsAccount.getBalance);
export {};
