import { Injectable } from '@nestjs/common';

@Injectable()
export class FizzBuzz {
  private isFizz(number: number): boolean {
    return number % 3 === 0;
  }
  private isBuzz(number: number): boolean {
    return number % 5 === 0;
  }
  private isFizzBuzz(number: number): boolean {
    return number % 15 === 0;
  }
  getFizzBuzz(number: number): string | number {
    if (this.isFizzBuzz(number)) return 'FizzBuzz';
    if (this.isFizz(number)) return 'Fizz';
    if (this.isBuzz(number)) return 'Buzz';
    return number;
  }
}
