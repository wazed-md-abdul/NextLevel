class BankAccount {
  readonly userId: number;
  userName: string;
  private userBalance: number;
  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this.userBalance = userBalance;
  }
  getBalance(): number {
    return this.userBalance;
  }
  addBalance(amount: number): void {
    this.userBalance += amount;
  }
}
const wazedsAccount = new BankAccount(111, "Wazeds", 1000);
wazedsAccount.addBalance(500);
wazedsAccount.addBalance(500);
console.log(wazedsAccount.getBalance());
// i can use also protected instead of private if its to make a instance of the class
