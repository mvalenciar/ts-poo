(() => {
  class MyDate {
    constructor(
      public year: number,
      public month: number,
      private _day: number,
    ) {}

    private addPadding(value: number): string {
      if (value < 10) {
        return `0${value}`;
      } else {
        return `${value}`;
      }
    }

    printFormat(): string {
      const day = this.addPadding(this._day);
      const month = this.addPadding(this.month);
      return `${day}/${month}/${this.year}`;
    }

    add(amount: number, type: "days" | "months" | "years"): void {
      if (type === "days") {
        this._day += amount;
      }
      if (type === "months") {
        this.month += amount;
      }
      if (type === "years") {
        this.year += amount;
      }
    }

    get day(): number {
      return this._day;
    }

    get isLeapYear(): boolean {
      if (this.year % 400 === 0) return true;
      if (this.year % 100 === 0) return false;
      return this.year % 400 === 0;
    }
  }

  const date1 = new MyDate(1993, 7, 10);
  console.log(date1.printFormat());
  console.log(date1.day);
  console.log("1993", date1.isLeapYear);

  const date2 = new MyDate(2000, 7, 10);
  console.log("2000", date2.isLeapYear);

  const date3 = new MyDate(2001, 7, 10);
  console.log("2001", date3.isLeapYear);

  const date4 = new MyDate(2004, 7, 10);
  console.log("2004", date4.isLeapYear);
})();
