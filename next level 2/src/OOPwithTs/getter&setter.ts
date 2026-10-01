class BankAccount {
  readonly userId: number;
  userName: string;
  private userBalance: number;
  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this.userBalance = userBalance;
  }
  set addBalance(amount: number) {
    this.userBalance += amount;
  }
  get getBalance(): number {
    return this.userBalance;
  }
}
const wazedsAccount = new BankAccount(111, "Wazeds", 1000);
wazedsAccount.addBalance = 500;
console.log(wazedsAccount.getBalance);
