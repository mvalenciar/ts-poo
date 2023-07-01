const date = new Date();

date.getHours();
date.getTime();
date.toISOString();

const date2 = new Date(1992, 0, 10);
date2.getHours();
date2.getTime();
date2.toISOString();

console.log(date);
console.log(date2);

class MyDate {
  year: number;
  month: number;
  day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  printFormat(): string {
    return `${this.day}/${this.month}/${this.year}`;
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
mydate.add(2, "days");

console.log(mydate.printFormat());
