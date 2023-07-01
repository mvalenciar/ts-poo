(() => {
  class MyDate {
    year: number;
    month: number;
    private day: number;

    constructor(year: number, month: number, day: number) {
      this.year = year;
      this.month = month;
      this.day = day;
    }

    private addPadding(value: number): string {
      if (value < 10) {
        return `0${value}`;
      } else {
        return `${value}`;
      }
    }

    printFormat(): string {
      const day = this.addPadding(this.day);
      const month = this.addPadding(this.month);
      return `${day}/${month}/${this.year}`;
    }

    add(amount: number, type: "days" | "months" | "years"): void {
      if (type === "days") {
        this.day += amount;
      }
      if (type === "months") {
        this.month += amount;
      }
      if (type === "years") {
        this.year += amount;
      }
    }
  }

  const mydate = new MyDate(2021, 1, 10);
  console.log(mydate.printFormat());
})();
