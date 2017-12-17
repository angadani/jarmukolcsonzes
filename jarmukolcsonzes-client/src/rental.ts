export class Rental {
    text: string;
    isDone: boolean;
    start: Date;
    end: Date;
    constructor(
      text: string, start: string, end: string
    ) {
      this.text = text;
      this.isDone = false;
      this.start = new Date(start);
      this.end = new Date(end);
    }
  }